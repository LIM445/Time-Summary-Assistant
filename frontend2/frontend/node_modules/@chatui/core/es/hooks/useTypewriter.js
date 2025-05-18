import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useEffect } from 'react';
import getRandomInt from '../utils/getRandomInt';
export function useTypewriter(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$interval = options.interval,
    interval = _options$interval === void 0 ? 80 : _options$interval,
    _options$step = options.step,
    step = _options$step === void 0 ? 1 : _options$step,
    _options$initialIndex = options.initialIndex,
    initialIndex = _options$initialIndex === void 0 ? 5 : _options$initialIndex;
  var length = content.length;
  var _useState = useState(initialIndex),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  useEffect(function () {
    if (index < length) {
      var timer = setTimeout(function () {
        var currentStep = Array.isArray(step) ? getRandomInt(step[0], step[1]) : step;
        setIndex(function (prev) {
          return prev + currentStep;
        });
      }, interval);
      return function () {
        clearTimeout(timer);
      };
    }
    return;
  }, [index, interval, length, step]);
  return {
    typedContent: content.slice(0, index),
    isTyping: index < length
  };
}