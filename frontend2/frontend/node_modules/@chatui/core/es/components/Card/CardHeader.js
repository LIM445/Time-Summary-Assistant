import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "icon", "iconColor", "logo", "title", "desc", "hasBg", "badge", "children"];
import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Flex, FlexItem } from '../Flex';
import { Image } from '../Image';
export var CardHeader = function CardHeader(props) {
  var className = props.className,
    icon = props.icon,
    iconColor = props.iconColor,
    logo = props.logo,
    title = props.title,
    desc = props.desc,
    hasBg = props.hasBg,
    badge = props.badge,
    children = props.children,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Flex, _extends({
    className: clsx('CardHeader', className),
    "data-has-bg": !!hasBg
  }, other), icon && (icon.includes('//') ? /*#__PURE__*/React.createElement(Image, {
    className: "CardHeader-icon",
    src: icon
  }) : /*#__PURE__*/React.createElement(Icon, {
    className: "CardHeader-icon",
    style: {
      color: iconColor
    },
    type: icon
  })), /*#__PURE__*/React.createElement(FlexItem, null, logo ? /*#__PURE__*/React.createElement(Image, {
    className: "CardHeader-logo",
    src: logo
  }) : /*#__PURE__*/React.createElement(Text, {
    as: "h4",
    className: "CardHeader-title",
    truncate: 2
  }, title), desc && /*#__PURE__*/React.createElement(Text, {
    as: "h5",
    className: "CardHeader-desc",
    truncate: true
  }, desc)), badge ? /*#__PURE__*/React.createElement("div", {
    className: "CardHeader-badge",
    style: {
      backgroundImage: "url(".concat(badge, ")")
    }
  }) : children && /*#__PURE__*/React.createElement("div", {
    className: "CardHeader-slot"
  }, children));
};