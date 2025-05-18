import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
export var Think = function Think(_ref) {
  var className = _ref.className,
    isDone = _ref.isDone,
    thinkTime = _ref.thinkTime,
    children = _ref.children;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleClick = function handleClick() {
    setShow(function (s) {
      return !s;
    });
  };
  var getText = function getText() {
    if (isDone) {
      var time = thinkTime ? "\uFF08\u7528\u65F6".concat(thinkTime, "\u79D2\uFF09") : '';
      return "\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(time);
    }
    return '思考中...';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: clsx('Think', className),
    "data-collapsed": !show
  }, /*#__PURE__*/React.createElement("div", {
    className: "Think-toggle",
    onClick: handleClick
  }, getText(), /*#__PURE__*/React.createElement(Icon, {
    type: "chevron-up"
  })), show && /*#__PURE__*/React.createElement("div", {
    className: "Think-content"
  }, children));
};