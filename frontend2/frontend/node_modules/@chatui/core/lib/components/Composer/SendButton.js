"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../Button");
var _ConfigProvider = require("../ConfigProvider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SendButton = exports.SendButton = function SendButton(_ref) {
  var disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _useLocale = (0, _ConfigProvider.useLocale)('Composer'),
    trans = _useLocale.trans;
  var wrapRef = (0, _react.useRef)(null);
  var btnRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var wrap = wrapRef.current;
    var btn = btnRef.current;
    if (wrap && btn) {
      wrap.style.setProperty('--send-width', "".concat(btn.offsetWidth, "px"));
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Composer-actions",
    "data-action": "send",
    ref: wrapRef
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "Composer-sendBtn",
    disabled: disabled,
    onMouseDown: onClick,
    color: "primary",
    ref: btnRef
  }, trans('send')));
};