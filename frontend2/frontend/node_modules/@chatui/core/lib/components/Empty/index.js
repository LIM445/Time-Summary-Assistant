"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Flex = require("../Flex");
var IMAGE_EMPTY = 'https://gw.alicdn.com/imgextra/i3/O1CN01c0BqGH1Jx6L1ihheM_!!6000000001094-55-tps-280-280.svg';
var IMAGE_OOPS = 'https://gw.alicdn.com/imgextra/i3/O1CN011bYju01hGYK2LMydz_!!6000000004250-55-tps-280-280.svg';
var Empty = exports.Empty = function Empty(props) {
  var className = props.className,
    type = props.type,
    image = props.image,
    tip = props.tip,
    children = props.children;
  var imgUrl = image || (type === 'error' ? IMAGE_OOPS : IMAGE_EMPTY);
  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    className: (0, _clsx.default)('Empty', className),
    direction: "column",
    center: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "Empty-img",
    src: imgUrl,
    alt: tip
  }), tip && /*#__PURE__*/_react.default.createElement("p", {
    className: "Empty-tip"
  }, tip), children);
};