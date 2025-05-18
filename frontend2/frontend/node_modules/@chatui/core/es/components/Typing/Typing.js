import React from 'react';
import { Bubble } from '../Bubble';
export function Typing(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(Bubble, {
    type: "typing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Typing",
    "aria-busy": "true"
  }, text && /*#__PURE__*/React.createElement("span", {
    className: "Typing-text"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "Typing-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Typing-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Typing-dot"
  })));
}