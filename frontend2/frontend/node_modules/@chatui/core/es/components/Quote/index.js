import React from 'react';
import clsx from 'clsx';
export var Quote = function Quote(props) {
  var className = props.className,
    author = props.author,
    children = props.children,
    onClick = props.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx('Quote', className),
    onClick: onClick
  }, author && /*#__PURE__*/React.createElement("div", {
    className: "Quote-author"
  }, author), /*#__PURE__*/React.createElement("div", {
    className: "Quote-content"
  }, children));
};