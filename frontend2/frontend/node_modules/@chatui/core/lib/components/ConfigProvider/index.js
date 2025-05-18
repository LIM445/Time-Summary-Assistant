"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocale = exports.useConfig = exports.ConfigProvider = exports.ConfigContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _locales = _interopRequireDefault(require("./locales"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_LOCALE = 'en-US';
var ConfigContext = exports.ConfigContext = /*#__PURE__*/_react.default.createContext({});
var ConfigProvider = exports.ConfigProvider = function ConfigProvider(_ref) {
  var _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? DEFAULT_LOCALE : _ref$locale,
    locales = _ref.locales,
    colorScheme = _ref.colorScheme,
    elderMode = _ref.elderMode,
    children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ConfigContext.Provider, {
    value: {
      locale: locale,
      locales: locales,
      colorScheme: colorScheme,
      elderMode: elderMode
    }
  }, children);
};
var useConfig = exports.useConfig = function useConfig() {
  return (0, _react.useContext)(ConfigContext);
};
var useLocale = exports.useLocale = function useLocale(componentName, fallback) {
  var _useContext = (0, _react.useContext)(ConfigContext),
    locale = _useContext.locale,
    locales = _useContext.locales;
  var defaultStrings = locale && _locales.default[locale] || _locales.default[DEFAULT_LOCALE];
  var strings = _objectSpread(_objectSpread({}, defaultStrings), locales);
  if (!locale && !locales && fallback) {
    strings = fallback;
  } else if (componentName) {
    strings = strings[componentName] || {};
  }
  return {
    locale: locale,
    trans: function trans(key) {
      return key ? strings[key] : strings;
    }
  };
};