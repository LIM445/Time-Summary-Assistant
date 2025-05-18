"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = void 0;
var _react = _interopRequireDefault(require("react"));
var _parser = _interopRequireDefault(require("./parser"));
var _ConfigProvider = require("../ConfigProvider");
var Time = exports.Time = function Time(_ref) {
  var date = _ref.date;
  var _useLocale = (0, _ConfigProvider.useLocale)('Time'),
    trans = _useLocale.trans;
  var dateTime = new Date(date).toLocaleString('zh').replace(/\//g, '-');
  return /*#__PURE__*/_react.default.createElement("time", {
    className: "Time",
    dateTime: dateTime
  }, (0, _parser.default)(date, trans()));
};