import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["content", "className", "isRichText", "options", "messageRender", "onResize", "children"];
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { RichText } from '../RichText';
import { useTypewriter } from '../../hooks/useTypewriter';
export var TypingBubble = function TypingBubble(props) {
  var content = props.content,
    className = props.className,
    isRichText = props.isRichText,
    options = props.options,
    messageRender = props.messageRender,
    onResize = props.onResize,
    children = props.children,
    other = _objectWithoutProperties(props, _excluded);
  var _useTypewriter = useTypewriter(messageRender ? messageRender(content) : content, options),
    typedContent = _useTypewriter.typedContent,
    isTyping = _useTypewriter.isTyping;
  var bubbleRef = useRef(null);
  useEffect(function () {
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx('Bubble richtext', className)
  }, other, {
    ref: bubbleRef
  }), typedContent && (isRichText ? /*#__PURE__*/React.createElement(RichText, {
    "data-effect": effect,
    content: typedContent
  }) : /*#__PURE__*/React.createElement("div", {
    "data-effect": effect
  }, /*#__PURE__*/React.createElement("p", null, typedContent))), children);
};