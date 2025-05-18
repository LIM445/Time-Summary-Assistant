"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goods = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Flex = require("../Flex");
var _Text = require("../Text");
var _Price = require("../Price");
var _Tag = require("../Tag");
var _Icon = require("../Icon");
var _IconButton = require("../IconButton");
var _Button = require("../Button");
var _ConfigProvider = require("../ConfigProvider");
var _excluded = ["className", "type", "img", "name", "desc", "tags", "locale", "currency", "price", "count", "unit", "action", "elderMode", "variant", "children", "originalPrice", "meta", "status", "asideContent"];
var Goods = exports.Goods = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var configCtx = (0, _ConfigProvider.useConfig)();
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
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var elderMode = oElderMode || configCtx.elderMode;
  var isOrder = type === 'order' && !elderMode;
  var isGoods = type !== 'order' && !elderMode;
  var isInList = variant === 'inList';
  var priceProps = {
    currency: currency,
    locale: locale
  };
  var priceCont = price != null && /*#__PURE__*/_react.default.createElement(_Price.Price, (0, _extends2.default)({
    price: price
  }, priceProps));
  var countUnit = /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-countUnit"
  }, count && /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-count"
  }, "\xD7", count), unit && /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-unit"
  }, unit));
  var statusCont = status ? /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-status"
  }, status, other.onClick && !isInList && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    type: "chevron-right"
  })) : null;
  var actionCont = action ? /*#__PURE__*/_react.default.createElement(_Button.Button, (0, _extends2.default)({
    size: "sm"
  }, action)) : null;
  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, (0, _extends2.default)({
    className: (0, _clsx.default)('Goods', className),
    "data-type": type,
    "data-elder-mode": elderMode,
    "data-variant": variant,
    ref: ref
  }, other), img && /*#__PURE__*/_react.default.createElement("img", {
    className: "Goods-img",
    src: img,
    alt: name
  }), /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, null, /*#__PURE__*/_react.default.createElement(_Flex.Flex, null, /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, {
    className: "Goods-main"
  }, isGoods && action && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, (0, _extends2.default)({
    className: "Goods-buyBtn",
    icon: "cart"
  }, action)), /*#__PURE__*/_react.default.createElement(_Text.Text, {
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
  _react.default.createElement(_Text.Text, {
    className: "Goods-desc",
    truncate: isOrder && !status && isInList ? 2 : true
  }, desc), elderMode ? /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, priceCont, actionCont) : tags.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-tags"
  }, tags.map(function (t) {
    return /*#__PURE__*/_react.default.createElement(_Tag.Tag, {
      color: "primary",
      key: t.name
    }, t.name);
  })), isGoods && /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    alignItems: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, null, priceCont, originalPrice && /*#__PURE__*/_react.default.createElement(_Price.Price, (0, _extends2.default)({
    price: originalPrice,
    original: true
  }, priceProps)), meta && /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-meta"
  }, meta)), countUnit)), isOrder && /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-aside"
  }, priceCont, countUnit, asideContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-slot"
  }, asideContent), actionCont)), isInList && statusCont, children && /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-slot"
  }, children), !isInList && statusCont));
});