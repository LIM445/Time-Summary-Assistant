import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "type", "img", "name", "desc", "tags", "locale", "currency", "price", "count", "unit", "action", "elderMode", "variant", "children", "originalPrice", "meta", "status", "asideContent"];
import React from 'react';
import clsx from 'clsx';
import { Flex, FlexItem } from '../Flex';
import { Text } from '../Text';
import { Price } from '../Price';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { useConfig } from '../ConfigProvider';
export var Goods = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var configCtx = useConfig();
  var className = props.className,
    type = props.type,
    img = props.img,
    name = props.name,
    desc = props.desc,
    _props$tags = props.tags,
    tags = _props$tags === void 0 ? [] : _props$tags,
    locale = props.locale,
    currency = props.currency,
    price = props.price,
    count = props.count,
    unit = props.unit,
    action = props.action,
    oElderMode = props.elderMode,
    variant = props.variant,
    children = props.children,
    originalPrice = props.originalPrice,
    meta = props.meta,
    status = props.status,
    asideContent = props.asideContent,
    other = _objectWithoutProperties(props, _excluded);
  var elderMode = oElderMode || configCtx.elderMode;
  var isOrder = type === 'order' && !elderMode;
  var isGoods = type !== 'order' && !elderMode;
  var isInList = variant === 'inList';
  var priceProps = {
    currency: currency,
    locale: locale
  };
  var priceCont = price != null && /*#__PURE__*/React.createElement(Price, _extends({
    price: price
  }, priceProps));
  var countUnit = /*#__PURE__*/React.createElement("div", {
    className: "Goods-countUnit"
  }, count && /*#__PURE__*/React.createElement("span", {
    className: "Goods-count"
  }, "\xD7", count), unit && /*#__PURE__*/React.createElement("span", {
    className: "Goods-unit"
  }, unit));
  var statusCont = status ? /*#__PURE__*/React.createElement("span", {
    className: "Goods-status"
  }, status, other.onClick && !isInList && /*#__PURE__*/React.createElement(Icon, {
    type: "chevron-right"
  })) : null;
  var actionCont = action ? /*#__PURE__*/React.createElement(Button, _extends({
    size: "sm"
  }, action)) : null;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    className: clsx('Goods', className),
    "data-type": type,
    "data-elder-mode": elderMode,
    "data-variant": variant,
    ref: ref
  }, other), img && /*#__PURE__*/React.createElement("img", {
    className: "Goods-img",
    src: img,
    alt: name
  }), /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(FlexItem, {
    className: "Goods-main"
  }, isGoods && action && /*#__PURE__*/React.createElement(IconButton, _extends({
    className: "Goods-buyBtn",
    icon: "cart"
  }, action)), /*#__PURE__*/React.createElement(Text, {
    as: "h4"
    /**
     * 名称行数规则：
     * 1. 有 desc，单行
     * 2. 无 desc，2行
     */,
    truncate: isOrder && !desc ? 2 : true,
    className: "Goods-name"
  }, name), desc &&
  /*#__PURE__*/
  /**
   * 行数规则：
   * 1. 订单，无状态，订单列表中，2行
   * 2. 其它，单行
   */
  React.createElement(Text, {
    className: "Goods-desc",
    truncate: isOrder && !status && isInList ? 2 : true
  }, desc), elderMode ? /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, priceCont, actionCont) : tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "Goods-tags"
  }, tags.map(function (t) {
    return /*#__PURE__*/React.createElement(Tag, {
      color: "primary",
      key: t.name
    }, t.name);
  })), isGoods && /*#__PURE__*/React.createElement(Flex, {
    alignItems: "flex-end"
  }, /*#__PURE__*/React.createElement(FlexItem, null, priceCont, originalPrice && /*#__PURE__*/React.createElement(Price, _extends({
    price: originalPrice,
    original: true
  }, priceProps)), meta && /*#__PURE__*/React.createElement("span", {
    className: "Goods-meta"
  }, meta)), countUnit)), isOrder && /*#__PURE__*/React.createElement("div", {
    className: "Goods-aside"
  }, priceCont, countUnit, asideContent && /*#__PURE__*/React.createElement("div", {
    className: "Goods-slot"
  }, asideContent), actionCont)), isInList && statusCont, children && /*#__PURE__*/React.createElement("div", {
    className: "Goods-slot"
  }, children), !isInList && statusCont));
});