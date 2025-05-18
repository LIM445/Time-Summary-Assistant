"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTypewriter = useTypewriter;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _getRandomInt = _interopRequireDefault(require("../utils/getRandomInt"));
function useTypewriter(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$interval = options.interval,
    interval = _options$interval === void 0 ? 80 : _options$interval,
    _options$step = options.step,
    step = _options$step === void 0 ? 1 : _options$step,
    _options$initialIndex = options.initialIndex,
    initialIndex = _options$initialIndex === void 0 ? 5 : _options$initialIndex;
  var length = content.length;
  var _useState = (0, _react.useState)(initialIndex),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  (0, _react.useEffect)(function () {
    if (index < length) {
      var timer = setTimeout(function () {
        var currentStep = Array.isArray(step) ? (0, _getRandomInt.default)(step[0], step[1]) : step;
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