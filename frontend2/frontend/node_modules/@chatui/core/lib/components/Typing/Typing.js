"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typing = Typing;
var _react = _interopRequireDefault(require("react"));
var _Bubble = require("../Bubble");
function Typing(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(_Bubble.Bubble, {
    type: "typing"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Typing",
    "aria-busy": "true"
  }, text && /*#__PURE__*/_react.default.createElement("span", {
    className: "Typing-text"
  }, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "Typing-dot"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Typing-dot"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Typing-dot"
  })));
}