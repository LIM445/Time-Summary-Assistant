import requests
from datetime import datetime, timedelta, timezone
from openai import OpenAI

# === 配置 ===
AW_HOST = "http://localhost:5600"
BUCKET_NAME = "aw-watcher-window_LAPTOP-SR2005"

# ❗ 请替换为你真实的 API 密钥
API_KEY = "sk-agfcyzofhmzzloyynupabchifhmnooukddnpucofqqvlerbx"
BASE_URL = "https://api.siliconflow.cn/v1"

# === 时间段设置 ===
NOW = datetime.now(timezone.utc)
TIME_RANGES = {
    "过去一小时": NOW - timedelta(hours=1),
    "过去一天": NOW - timedelta(days=1),
    "过去一周": NOW - timedelta(weeks=1)
}

# === 获取事件数据 ===
def get_events(bucket: str):
    url = f"{AW_HOST}/api/0/buckets/{bucket}/events"
    response = requests.get(url)
    return response.json() if response.status_code == 200 else []

# === 统计每个应用的使用时间（分钟） ===
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

# === 格式化输出 ===
def format_summary(summary):
    sorted_items = sorted(summary.items(), key=lambda x: x[1], reverse=True)
    return "\n".join([f"- {app}: {round(minutes, 1)} 分钟" for app, minutes in sorted_items])

# === AI 总结 ===
def get_natural_language_summary(summary_text, time_label):
    client = OpenAI(
        api_key=API_KEY.strip(),
        base_url=BASE_URL.strip() if BASE_URL else None
    )

    prompt = (
        f"以下是我在{time_label}期间使用不同电脑应用的时长统计：\n\n{summary_text}\n\n"
        "请根据这些数据，用简洁的自然语言总结我主要使用了哪些应用，每个应用的大致用途，是否存在时间分配不合理的情况，并提出建议。"
    )

    response = client.chat.completions.create(
        model="Qwen/Qwen2.5-72B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        stream=False,
    )

    return response.choices[0].message.content

# === 主程序入口 ===
if __name__ == "__main__":
    events = get_events(BUCKET_NAME)
    for label, start_time in TIME_RANGES.items():
        summary = summarize_by_app(events, start_time)
        summary_text = format_summary(summary)

        print(f"\n🕒 {label} 应用使用统计：\n{summary_text}")
        print("\n🧠 AI 总结：")
        try:
            result = get_natural_language_summary(summary_text, label)
            print(result)
        except Exception as e:
            print(f"❌ 生成总结时出错：{e}")
