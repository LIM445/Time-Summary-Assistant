"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemMessage = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Button = require("../Button");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SystemMessage = exports.SystemMessage = function SystemMessage(props) {
  var className = props.className,
    content = props.content,
    action = props.action;
  var _ref = action || {},
    onClick = _ref.onClick,
    once = _ref.once;
  var _useState = (0, _react.useState)(action && action.disabled),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    disabled = _useState2[0],
    setDisabled = _useState2[1];
  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
    if (once) {
      setDisabled(true);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('Message SystemMessage', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "SystemMessage-inner"
  }, /*#__PURE__*/_react.default.createElement("span", null, content), action && /*#__PURE__*/_react.default.createElement(_Button.Button, {
    variant: "text",
    disabled: disabled,
    onClick: handleClick
  }, action.text)));
};