"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Icon = require("../Icon");
var _Text = require("../Text");
var _excluded = ["className", "as", "content", "ellipsis", "rightIcon", "children", "onClick"];
var ListItem = exports.ListItem = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
    _props$as = props.as,
    Element = _props$as === void 0 ? 'div' : _props$as,
    content = props.content,
    ellipsis = props.ellipsis,
    rightIcon = props.rightIcon,
    children = props.children,
    onClick = props.onClick,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(Element, (0, _extends2.default)({
    className: (0, _clsx.default)('ListItem', className),
    onClick: onClick,
    role: "listitem"
  }, other, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    className: "ListItem-content",
    truncate: ellipsis
  }, content || children), rightIcon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    type: rightIcon
  }));
});