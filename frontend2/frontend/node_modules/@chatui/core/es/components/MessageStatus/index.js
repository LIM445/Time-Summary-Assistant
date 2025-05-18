import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
export var MessageStatus = function MessageStatus(_ref) {
  var status = _ref.status,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 800 : _ref$delay,
    _ref$maxDelay = _ref.maxDelay,
    maxDelay = _ref$maxDelay === void 0 ? 12000 : _ref$maxDelay,
    _ref$retryInterval = _ref.retryInterval,
    retryInterval = _ref$retryInterval === void 0 ? 5000 : _ref$retryInterval,
    onRetry = _ref.onRetry,
    onChange = _ref.onChange;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var loadingTimerRef = useRef();
  var failTimerRef = useRef();
  var autoTimerRef = useRef();
  function clear() {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (failTimerRef.current) {
      clearTimeout(failTimerRef.current);
    }
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
    }
  }
  var doTimeout = useCallback(function () {
    clear();
    loadingTimerRef.current = setTimeout(function () {
      setType('loading');
    }, delay);
    failTimerRef.current = setTimeout(function () {
      setType('fail');
      clear();
    }, maxDelay);
    autoTimerRef.current = setInterval(function () {
      if (onRetry) {
        onRetry(true);
      }
    }, retryInterval);
  }, [delay, maxDelay, onRetry, retryInterval]);
  useEffect(function () {
    clear();
    if (status === 'pending') {
      doTimeout();
    } else if (status === 'sent') {
      setType('');
    } else if (status === 'fail') {
      setType('fail');
    }
    return clear;
  }, [status, doTimeout]);
  useEffect(function () {
    if (onChange) {
      onChange(type);
    }
  }, [onChange, type]);
  function handleRetry() {
    setType('loading');
    doTimeout();
    if (onRetry) {
      onRetry();
    }
  }
  if (type) {
    return /*#__PURE__*/React.createElement("div", {
      className: "MessageStatus",
      "data-status": type
    }, type === 'fail' ? /*#__PURE__*/React.createElement(IconButton, {
      icon: "warning-circle-fill",
      onClick: handleRetry
    }) : /*#__PURE__*/React.createElement(Icon, {
      type: "spinner",
      spin: true
    }));
  }
  return null;
};