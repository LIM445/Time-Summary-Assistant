"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = smoothScroll;
var _getFps = _interopRequireDefault(require("./getFps"));
var rAF = requestAnimationFrame;
var mockRAF = function mockRAF(cb) {
  return window.setTimeout(cb, 16);
};
(0, _getFps.default)(function (fps) {
  rAF = fps < 55 ? mockRAF : requestAnimationFrame;
}, 3);
function smoothScroll(_ref) {
  var el = _ref.el,
    to = _ref.to,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 300 : _ref$duration,
    x = _ref.x;
  var attr = x ? 'scrollLeft' : 'scrollTop';
  if (!rAF) {
    el[attr] = to;
    return;
  }
  var from = el[attr];
  var frames = Math.round(duration / 16);
  var step = (to - from) / frames;
  var count = 0;
  function animate() {
    // eslint-disable-next-line no-param-reassign
    el[attr] += step;

    // eslint-disable-next-line no-plusplus
    if (++count < frames) {
      rAF(animate);
    }
  }
  animate();
}