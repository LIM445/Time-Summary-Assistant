"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quote = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var Quote = exports.Quote = function Quote(props) {
  var className = props.className,
    author = props.author,
    children = props.children,
    onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('Quote', className),
    onClick: onClick
  }, author && /*#__PURE__*/_react.default.createElement("div", {
    className: "Quote-author"
  }, author), /*#__PURE__*/_react.default.createElement("div", {
    className: "Quote-content"
  }, children));
};