from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime, timedelta, timezone
import requests
from openai import OpenAI
import time
import threading

# === Flask 应用 ===
app = Flask(__name__)
CORS(app)

# === 配置 ===
AW_HOST = "http://localhost:5600"
BUCKET_NAME = "aw-watcher-window_LAPTOP-SR2005"

# OpenAI 配置
API_KEY = "sk-agfcyzofhmzzloyynupabchifhmnooukddnpucofqqvlerbx"
BASE_URL = "https://api.siliconflow.cn/v1"

# === 全局缓存 ===
data_cache = {
    "last_updated": 0,      # 最后更新时间戳
    "summary_text": "",     # 缓存的分析结果
    "lock": threading.Lock() # 线程锁
}

# === 数据获取函数 ===
def update_cache():
    """强制更新缓存数据"""
    with data_cache["lock"]:
        try:
            print("正在更新缓存数据...")
            since_time = get_time("day")
            events = get_events(BUCKET_NAME)
            summary = summarize_by_app(events, since_time)
            data_cache["summary_text"] = format_summary(summary)
            data_cache["last_updated"] = time.time()
            print("缓存更新成功")
        except Exception as e:
            print(f"缓存更新失败: {str(e)}")

# === 定时任务 ===
def cache_updater():
    """每10分钟自动更新缓存"""
    while True:
        update_cache()
        time.sleep(600)  # 10分钟

# 时间范围标签到时间的映射
def get_time(label):
    now = datetime.now(timezone.utc)
    if label == "hour":
        return now - timedelta(hours=1)
    elif label == "day":
        return now - timedelta(days=1)
    elif label == "week":
        return now - timedelta(weeks=1)
    else:
        return now - timedelta(hours=1)

# 获取事件数据
def get_events(bucket):
    url = f"{AW_HOST}/api/0/buckets/{bucket}/events"
    response = requests.get(url)
    return response.json() if response.status_code == 200 else []

# 统计每个应用使用时间
def summarize_by_app(events, since):
    summary = {}
    for event in events:
        ts = datetime.fromisoformat(event['timestamp'].replace("Z", "+00:00"))
        if ts < since:
            continue
        app = event["data"].get("app", "").lower()
        duration = event["duration"] / 60  # 秒转分钟
        summary[app] = summary.get(app, 0) + duration
    return summary

# 格式化输出
def format_summary(summary):
    sorted_items = sorted(summary.items(), key=lambda x: x[1], reverse=True)
    return "\n".join([f"- {app}: {round(minutes, 1)} 分钟" for app, minutes in sorted_items])

# AI 总结
def get_natural_language_summary(summary_text, time_label):
    client = OpenAI(
        api_key=API_KEY.strip(),
        base_url=BASE_URL.strip()
    )

    prompt = (
        f"以下是我在{time_label}期间使用不同电脑应用的时长统计：\n\n{summary_text}\n\n"
        "请根据这些数据，用简洁的自然语言总结我主要使用了哪些应用，每个应用的大致用途，是否存在时间分配不合理的情况，并提出建议。(以女仆语气输出)"
    )

    response = client.chat.completions.create(
        model="THUDM/GLM-Z1-9B-0414",
        messages=[{"role": "user", "content": prompt}],
        stream=False,
    )

    return response.choices[0].message.content


# === 路由接口 ===
@app.route('/summary/<period>', methods=['GET'])
def summary(period):
    since_time = get_time(period)
    events = get_events(BUCKET_NAME)
    summary = summarize_by_app(events, since_time)
    summary_text = format_summary(summary)
    try:
        ai_summary = get_natural_language_summary(summary_text, f"过去{period}")
    except Exception as e:
        ai_summary = f"生成 AI 总结失败：{e}"
    return jsonify({
        "summary_text": summary_text,
        "ai_summary": ai_summary
    })

# === 修改后的问答接口 ===
@app.route('/ask', methods=['POST'])
def ask_question():
    try:
        # 获取用户问题
        data = request.get_json()
        user_question = data.get('question', '')
        
        if not user_question:
            return jsonify({"error": "问题不能为空"}), 400

        # 检查缓存有效期（10分钟）
        current_time = time.time()
        if current_time - data_cache["last_updated"] > 600:
            update_cache()

        # 调用大模型（使用缓存数据）
        client = OpenAI(
            api_key=API_KEY.strip(),
            base_url=BASE_URL.strip()
        )

        prompt = (
            f"用户电脑使用数据（过去一天）：\n{data_cache['summary_text']}\n\n"
            f"用户问题：{user_question}\n\n"
            "请根据上述数据回答用户问题（完全使用中文回答，使用女仆语气，不要用markdown）"
        )

        response = client.chat.completions.create(
            model="THUDM/GLM-Z1-9B-0414",
            messages=[{"role": "user", "content": prompt}],
            stream=False,
        )
        
        return jsonify({
            "answer": response.choices[0].message.content
        })
        
    except Exception as e:
        return jsonify({
            "error": f"服务异常：{str(e)}"
        }), 500

# === 启动服务 ===
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)

# 启动定时线程
update_thread = threading.Thread(target=cache_updater, daemon=True)
update_thread.start()