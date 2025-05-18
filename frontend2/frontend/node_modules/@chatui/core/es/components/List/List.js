import React from 'react';
import clsx from 'clsx';
export var List = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? false : _props$bordered,
    className = props.className,
    variant = props.variant,
    children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx('List', {
      'List--bordered': bordered
    }, className),
    "data-variant": variant,
    role: "list",
    ref: ref
  }, children);
});