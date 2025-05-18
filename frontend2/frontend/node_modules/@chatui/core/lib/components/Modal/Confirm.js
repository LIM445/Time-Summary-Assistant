"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Base = require("./Base");
var _ConfigProvider = require("../ConfigProvider");
var _excluded = ["className", "vertical", "actions"];
var isPrimary = function isPrimary(btn) {
  return btn.color === 'primary';
};
var Confirm = exports.Confirm = function Confirm(_ref) {
  var className = _ref.className,
    oVertical = _ref.vertical,
    actions = _ref.actions,
    other = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useLocale = (0, _ConfigProvider.useLocale)(),
    _useLocale$locale = _useLocale.locale,
    locale = _useLocale$locale === void 0 ? '' : _useLocale$locale;
  var isZh = locale.includes('zh');
  // 中文默认横排
  var vertical = oVertical != null ? oVertical : !isZh;
  if (Array.isArray(actions)) {
    // 主按钮排序：横排主按钮在后，竖排主按钮在前
    actions.sort(function (a, b) {
      if (isPrimary(a)) {
        return vertical ? -1 : 1;
      }
      if (isPrimary(b)) {
        return vertical ? 1 : -1;
      }
      return 0;
    });
  }
  return /*#__PURE__*/_react.default.createElement(_Base.Base, (0, _extends2.default)({
    baseClass: "Modal",
    className: (0, _clsx.default)('Confirm', className),
    showClose: false,
    btnVariant: "outline",
    vertical: vertical,
    actions: actions
  }, other));
};