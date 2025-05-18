"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ConfigProvider = require("../ConfigProvider");
var _Navbar = require("../Navbar");
var _MessageContainer = require("../MessageContainer");
var _QuickReplies = require("../QuickReplies");
var _Composer = require("../Composer");
var _ua = require("../../utils/ua");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Chat = exports.Chat = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var wideBreakpoint = props.wideBreakpoint,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? 'zh-CN' : _props$locale,
    locales = props.locales,
    colorScheme = props.colorScheme,
    elderMode = props.elderMode,
    navbar = props.navbar,
    renderNavbar = props.renderNavbar,
    loadMoreText = props.loadMoreText,
    renderBeforeMessageList = props.renderBeforeMessageList,
    messagesRef = props.messagesRef,
    onRefresh = props.onRefresh,
    onScroll = props.onScroll,
    _props$messages = props.messages,
    messages = _props$messages === void 0 ? [] : _props$messages,
    isTyping = props.isTyping,
    renderMessageContent = props.renderMessageContent,
    onBackBottomShow = props.onBackBottomShow,
    onBackBottomClick = props.onBackBottomClick,
    _props$quickReplies = props.quickReplies,
    quickReplies = _props$quickReplies === void 0 ? [] : _props$quickReplies,
    quickRepliesVisible = props.quickRepliesVisible,
    _props$onQuickReplyCl = props.onQuickReplyClick,
    onQuickReplyClick = _props$onQuickReplyCl === void 0 ? function () {} : _props$onQuickReplyCl,
    onQuickReplyScroll = props.onQuickReplyScroll,
    renderQuickReplies = props.renderQuickReplies,
    text = props.text,
    textOnce = props.textOnce,
    placeholder = props.placeholder,
    onInputFocus = props.onInputFocus,
    onInputChange = props.onInputChange,
    onInputBlur = props.onInputBlur,
    onSend = props.onSend,
    onImageSend = props.onImageSend,
    inputOptions = props.inputOptions,
    composerRef = props.composerRef,
    inputType = props.inputType,
    onInputTypeChange = props.onInputTypeChange,
    recorder = props.recorder,
    toolbar = props.toolbar,
    onToolbarClick = props.onToolbarClick,
    onAccessoryToggle = props.onAccessoryToggle,
    rightAction = props.rightAction,
    _props$Composer = props.Composer,
    Composer = _props$Composer === void 0 ? _Composer.Composer : _props$Composer,
    isX = props.isX;
  var _useState = (0, _react.useState)('light'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    currentColorScheme = _useState2[0],
    setCurrentColorScheme = _useState2[1];
  function handleInputFocus(e) {
    if (messagesRef && messagesRef.current) {
      messagesRef.current.scrollToEnd({
        animated: false,
        force: true
      });
    }
    if (onInputFocus) {
      onInputFocus(e);
    }
  }
  (0, _react.useEffect)(function () {
    var rootEl = document.documentElement;
    if (_ua.isSafari) {
      rootEl.dataset.safari = '';
    }
    var v = (0, _ua.getIOSMajorVersion)();
    if (v) {
      if (v < 11) {
        // iOS 9、10 不支持按钮使用 flex
        rootEl.classList.add('no-btn-flex');
      }
      if (v < 13) {
        rootEl.classList.add('no-scrolling');
      }
    }
  }, []);
  (0, _react.useEffect)(function () {
    var updateColorScheme = function updateColorScheme(scheme) {
      setCurrentColorScheme(scheme);
      document.documentElement.dataset.colorScheme = scheme;
    };
    if (colorScheme === 'auto') {
      var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      var handleColorSchemeChange = function handleColorSchemeChange(e) {
        updateColorScheme(e.matches ? 'dark' : 'light');
      };
      colorSchemeQuery.addEventListener('change', handleColorSchemeChange);
      handleColorSchemeChange(colorSchemeQuery);
      return function () {
        colorSchemeQuery.removeEventListener('change', handleColorSchemeChange);
      };
    } else if (colorScheme === 'dark') {
      updateColorScheme(colorScheme);
    }
    return;
  }, [colorScheme]);
  return /*#__PURE__*/_react.default.createElement(_ConfigProvider.ConfigProvider, {
    locale: locale,
    locales: locales,
    colorScheme: currentColorScheme,
    elderMode: elderMode
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ChatApp",
    "data-elder-mode": elderMode,
    "data-x": isX,
    ref: ref
  }, renderNavbar ? renderNavbar() : navbar && /*#__PURE__*/_react.default.createElement(_Navbar.Navbar, navbar), /*#__PURE__*/_react.default.createElement(_MessageContainer.MessageContainer, {
    ref: messagesRef,
    loadMoreText: loadMoreText,
    messages: messages,
    isTyping: isTyping,
    renderBeforeMessageList: renderBeforeMessageList,
    renderMessageContent: renderMessageContent,
    onRefresh: onRefresh,
    onScroll: onScroll,
    onBackBottomShow: onBackBottomShow,
    onBackBottomClick: onBackBottomClick
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ChatFooter"
  }, renderQuickReplies ? renderQuickReplies() : /*#__PURE__*/_react.default.createElement(_QuickReplies.QuickReplies, {
    items: quickReplies,
    visible: quickRepliesVisible,
    onClick: onQuickReplyClick,
    onScroll: onQuickReplyScroll
  }), /*#__PURE__*/_react.default.createElement(Composer, {
    wideBreakpoint: wideBreakpoint,
    ref: composerRef,
    inputType: inputType,
    text: text,
    textOnce: textOnce,
    inputOptions: inputOptions,
    placeholder: placeholder,
    onAccessoryToggle: onAccessoryToggle,
    recorder: recorder,
    toolbar: toolbar,
    onToolbarClick: onToolbarClick,
    onInputTypeChange: onInputTypeChange,
    onFocus: handleInputFocus,
    onChange: onInputChange,
    onBlur: onInputBlur,
    onSend: onSend,
    onImageSend: onImageSend,
    rightAction: rightAction
  }))));
});