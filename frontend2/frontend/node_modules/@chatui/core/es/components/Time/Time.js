import React from 'react';
import formatDate from './parser';
import { useLocale } from '../ConfigProvider';
export var Time = function Time(_ref) {
  var date = _ref.date;
  var _useLocale = useLocale('Time'),
    trans = _useLocale.trans;
  var dateTime = new Date(date).toLocaleString('zh').replace(/\//g, '-');
  return /*#__PURE__*/React.createElement("time", {
    className: "Time",
    dateTime: dateTime
  }, formatDate(date, trans()));
};