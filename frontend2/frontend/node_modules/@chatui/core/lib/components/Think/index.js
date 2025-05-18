"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Think = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Icon = require("../Icon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Think = exports.Think = function Think(_ref) {
  var className = _ref.className,
    isDone = _ref.isDone,
    thinkTime = _ref.thinkTime,
    children = _ref.children;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleClick = function handleClick() {
    setShow(function (s) {
      return !s;
    });
  };
  var getText = function getText() {
    if (isDone) {
      var time = thinkTime ? "\uFF08\u7528\u65F6".concat(thinkTime, "\u79D2\uFF09") : '';
      return "\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(time);
    }
    return '思考中...';
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('Think', className),
    "data-collapsed": !show
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Think-toggle",
    onClick: handleClick
  }, getText(), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    type: "chevron-up"
  })), show && /*#__PURE__*/_react.default.createElement("div", {
    className: "Think-content"
  }, children));
};