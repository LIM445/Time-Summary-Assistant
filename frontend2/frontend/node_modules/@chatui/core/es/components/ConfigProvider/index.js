import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { useContext } from 'react';
import defaultLocales from './locales';
var DEFAULT_LOCALE = 'en-US';
export var ConfigContext = /*#__PURE__*/React.createContext({});
export var ConfigProvider = function ConfigProvider(_ref) {
  var _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? DEFAULT_LOCALE : _ref$locale,
    locales = _ref.locales,
    colorScheme = _ref.colorScheme,
    elderMode = _ref.elderMode,
    children = _ref.children;
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: {
      locale: locale,
      locales: locales,
      colorScheme: colorScheme,
      elderMode: elderMode
    }
  }, children);
};
export var useConfig = function useConfig() {
  return useContext(ConfigContext);
};
export var useLocale = function useLocale(componentName, fallback) {
  var _useContext = useContext(ConfigContext),
    locale = _useContext.locale,
    locales = _useContext.locales;
  var defaultStrings = locale && defaultLocales[locale] || defaultLocales[DEFAULT_LOCALE];
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