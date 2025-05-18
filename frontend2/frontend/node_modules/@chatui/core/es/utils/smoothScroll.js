import getFps from './getFps';
var rAF = requestAnimationFrame;
var mockRAF = function mockRAF(cb) {
  return window.setTimeout(cb, 16);
};
getFps(function (fps) {
  rAF = fps < 55 ? mockRAF : requestAnimationFrame;
}, 3);
export default function smoothScroll(_ref) {
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