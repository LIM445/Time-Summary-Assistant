import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { ConfigProvider } from '../ConfigProvider';
import { Navbar } from '../Navbar';
import { MessageContainer } from '../MessageContainer';
import { QuickReplies } from '../QuickReplies';
import { Composer as DComposer } from '../Composer';
import { isSafari, getIOSMajorVersion } from '../../utils/ua';
export var Chat = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    Composer = _props$Composer === void 0 ? DComposer : _props$Composer,
    isX = props.isX;
  var _useState = useState('light'),
    _useState2 = _slicedToArray(_useState, 2),
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
  useEffect(function () {
    var rootEl = document.documentElement;
    if (isSafari) {
      rootEl.dataset.safari = '';
    }
    var v = getIOSMajorVersion();
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
  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: locale,
    locales: locales,
    colorScheme: currentColorScheme,
    elderMode: elderMode
  }, /*#__PURE__*/React.createElement("div", {
    className: "ChatApp",
    "data-elder-mode": elderMode,
    "data-x": isX,
    ref: ref
  }, renderNavbar ? renderNavbar() : navbar && /*#__PURE__*/React.createElement(Navbar, navbar), /*#__PURE__*/React.createElement(MessageContainer, {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "ChatFooter"
  }, renderQuickReplies ? renderQuickReplies() : /*#__PURE__*/React.createElement(QuickReplies, {
    items: quickReplies,
    visible: quickRepliesVisible,
    onClick: onQuickReplyClick,
    onScroll: onQuickReplyScroll
  }), /*#__PURE__*/React.createElement(Composer, {
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