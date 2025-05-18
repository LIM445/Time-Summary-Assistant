"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollGrid = ScrollGrid;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _useLatest = require("../../hooks/useLatest");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var indicatorWidth = 20;
function ScrollGrid(_ref) {
  var _ref$wrap = _ref.wrap,
    wrap = _ref$wrap === void 0 ? false : _ref$wrap,
    children = _ref.children,
    onIndicatorToggle = _ref.onIndicatorToggle;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showIndicator = _useState2[0],
    setShowIndicator = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    barWidth = _useState4[0],
    setBarWidth = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    barLeft = _useState6[0],
    setBarLeft = _useState6[1];
  var scrollerRef = (0, _react.useRef)(null);
  var ratioRef = (0, _react.useRef)(0.04);
  var onIndicatorToggleRef = (0, _useLatest.useLatest)(onIndicatorToggle);
  (0, _react.useEffect)(function () {
    if (wrap) return;
    function updateIndicator() {
      var scroller = scrollerRef.current;
      if (!scroller) return;
      var scrollWidth = scroller.scrollWidth,
        clientWidth = scroller.clientWidth;
      if (scrollWidth === clientWidth) {
        setShowIndicator(false);
        return;
      }
      var ratio = indicatorWidth / scrollWidth;
      ratioRef.current = ratio;
      setShowIndicator(true);
      setBarWidth(clientWidth * ratio);
    }
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return function () {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [wrap]);
  (0, _react.useEffect)(function () {
    var _onIndicatorToggleRef;
    (_onIndicatorToggleRef = onIndicatorToggleRef.current) === null || _onIndicatorToggleRef === void 0 || _onIndicatorToggleRef.call(onIndicatorToggleRef, showIndicator);
  }, [onIndicatorToggleRef, showIndicator]);
  var handleScroll = function handleScroll(e) {
    var _ref2 = e.target,
      scrollLeft = _ref2.scrollLeft;
    setBarLeft(scrollLeft * ratioRef.current);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ScrollGrid",
    "data-wrap": wrap
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ScrollGrid-scroller",
    ref: scrollerRef,
    onScroll: wrap ? undefined : handleScroll
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ScrollGrid-inner"
  }, children)), showIndicator && /*#__PURE__*/_react.default.createElement("div", {
    className: "ScrollGrid-indicator"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ScrollGrid-indicatorBar",
    style: {
      width: barWidth,
      transform: "translateX(".concat(barLeft, "px)")
    }
  })));
}