import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
export var SystemMessage = function SystemMessage(props) {
  var className = props.className,
    content = props.content,
    action = props.action;
  var _ref = action || {},
    onClick = _ref.onClick,
    once = _ref.once;
  var _useState = useState(action && action.disabled),
    _useState2 = _slicedToArray(_useState, 2),
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
  return /*#__PURE__*/React.createElement("div", {
    className: clsx('Message SystemMessage', className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "SystemMessage-inner"
  }, /*#__PURE__*/React.createElement("span", null, content), action && /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    disabled: disabled,
    onClick: handleClick
  }, action.text)));
};