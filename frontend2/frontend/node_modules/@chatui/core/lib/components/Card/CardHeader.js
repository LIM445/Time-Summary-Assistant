"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardHeader = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Icon = require("../Icon");
var _Text = require("../Text");
var _Flex = require("../Flex");
var _Image = require("../Image");
var _excluded = ["className", "icon", "iconColor", "logo", "title", "desc", "hasBg", "badge", "children"];
var CardHeader = exports.CardHeader = function CardHeader(props) {
  var className = props.className,
    icon = props.icon,
    iconColor = props.iconColor,
    logo = props.logo,
    title = props.title,
    desc = props.desc,
    hasBg = props.hasBg,
    badge = props.badge,
    children = props.children,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, (0, _extends2.default)({
    className: (0, _clsx.default)('CardHeader', className),
    "data-has-bg": !!hasBg
  }, other), icon && (icon.includes('//') ? /*#__PURE__*/_react.default.createElement(_Image.Image, {
    className: "CardHeader-icon",
    src: icon
  }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: "CardHeader-icon",
    style: {
      color: iconColor
    },
    type: icon
  })), /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, null, logo ? /*#__PURE__*/_react.default.createElement(_Image.Image, {
    className: "CardHeader-logo",
    src: logo
  }) : /*#__PURE__*/_react.default.createElement(_Text.Text, {
    as: "h4",
    className: "CardHeader-title",
    truncate: 2
  }, title), desc && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    as: "h5",
    className: "CardHeader-desc",
    truncate: true
  }, desc)), badge ? /*#__PURE__*/_react.default.createElement("div", {
    className: "CardHeader-badge",
    style: {
      backgroundImage: "url(".concat(badge, ")")
    }
  }) : children && /*#__PURE__*/_react.default.createElement("div", {
    className: "CardHeader-slot"
  }, children));
};