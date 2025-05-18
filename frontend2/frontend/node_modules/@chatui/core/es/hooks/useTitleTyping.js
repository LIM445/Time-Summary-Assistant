import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useCallback, useRef } from 'react';
import getRandomInt from '../utils/getRandomInt';
export function useTitleTyping() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTyping = _useState2[0],
    setIsTyping = _useState2[1];
  // 间断变化
  var timerRef = useRef();
  // 超时
  var timeoutRef = useRef();
  var after = function after(_ref, cb) {
    var _ref2 = _slicedToArray(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];
    var ms = getRandomInt(min, max);
    timerRef.current = setTimeout(cb, ms);
  };
  var stop = useCallback(function () {
    clearTimeout(timerRef.current);
    clearTimeout(timeoutRef.current);
    setIsTyping(false);
  }, []);
  var start = useCallback(function () {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      delay = _ref3.delay,
      timeout = _ref3.timeout;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(function () {
      // delay 后开始
      setIsTyping(true);
      after([2500, 3500], function () {
        // 2.5-3.5s 后暂停
        setIsTyping(false);
        after([1000, 1800], function () {
          // 1-1.8s 后重新开始
          start();
        });
      });
    }, delay);
    if (timeout) {
      timeoutRef.current = setTimeout(function () {
        stop();
      }, timeout);
    }
  }, [stop]);
  return {
    isTyping: isTyping,
    start: start,
    stop: stop
  };
}