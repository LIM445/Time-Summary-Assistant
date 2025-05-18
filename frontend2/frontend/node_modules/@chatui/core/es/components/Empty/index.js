import React from 'react';
import clsx from 'clsx';
import { Flex } from '../Flex';
var IMAGE_EMPTY = 'https://gw.alicdn.com/imgextra/i3/O1CN01c0BqGH1Jx6L1ihheM_!!6000000001094-55-tps-280-280.svg';
var IMAGE_OOPS = 'https://gw.alicdn.com/imgextra/i3/O1CN011bYju01hGYK2LMydz_!!6000000004250-55-tps-280-280.svg';
export var Empty = function Empty(props) {
  var className = props.className,
    type = props.type,
    image = props.image,
    tip = props.tip,
    children = props.children;
  var imgUrl = image || (type === 'error' ? IMAGE_OOPS : IMAGE_EMPTY);
  return /*#__PURE__*/React.createElement(Flex, {
    className: clsx('Empty', className),
    direction: "column",
    center: true
  }, /*#__PURE__*/React.createElement("img", {
    className: "Empty-img",
    src: imgUrl,
    alt: tip
  }), tip && /*#__PURE__*/React.createElement("p", {
    className: "Empty-tip"
  }, tip), children);
};