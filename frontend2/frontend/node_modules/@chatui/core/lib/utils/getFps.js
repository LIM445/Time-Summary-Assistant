"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = function _default(callback, maxCount) {
  var fps = 0;
  var last = Date.now();
  var count = 0; // 回调触发次数

  // 兼容性处理
  if (!requestAnimationFrame) {
    callback(0);
    return;
  }
  var _loop = function loop() {
    var offset = Date.now() - last;
    fps += 1;
    if (offset >= 1000) {
      last += offset;
      callback(fps);
      if (maxCount) count += 1;
      fps = 0;
    }
    if (!maxCount || count <= maxCount) {
      requestAnimationFrame(_loop);
    }
  };
  _loop();
};