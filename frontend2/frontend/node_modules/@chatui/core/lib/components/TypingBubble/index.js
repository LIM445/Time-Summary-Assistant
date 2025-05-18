"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypingBubble = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _RichText = require("../RichText");
var _useTypewriter2 = require("../../hooks/useTypewriter");
var _excluded = ["content", "className", "isRichText", "options", "messageRender", "onResize", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var TypingBubble = exports.TypingBubble = function TypingBubble(props) {
  var content = props.content,
    className = props.className,
    isRichText = props.isRichText,
    options = props.options,
    messageRender = props.messageRender,
    onResize = props.onResize,
    children = props.children,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useTypewriter = (0, _useTypewriter2.useTypewriter)(messageRender ? messageRender(content) : content, options),
    typedContent = _useTypewriter.typedContent,
    isTyping = _useTypewriter.isTyping;
  var bubbleRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!('ResizeObserver' in window)) {
      return;
    }

    // eslint-disable-next-line compat/compat
    var resizeObserver = new ResizeObserver(function () {
      onResize === null || onResize === void 0 || onResize(bubbleRef.current);
    });
    if (bubbleRef.current) {
      resizeObserver.observe(bubbleRef.current);
    }
    return function () {
      resizeObserver.disconnect();
    };
  }, [onResize]);
  var effect = isTyping ? 'typing' : null;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)('Bubble richtext', className)
  }, other, {
    ref: bubbleRef
  }), typedContent && (isRichText ? /*#__PURE__*/_react.default.createElement(_RichText.RichText, {
    "data-effect": effect,
    content: typedContent
  }) : /*#__PURE__*/_react.default.createElement("div", {
    "data-effect": effect
  }, /*#__PURE__*/_react.default.createElement("p", null, typedContent))), children);
};