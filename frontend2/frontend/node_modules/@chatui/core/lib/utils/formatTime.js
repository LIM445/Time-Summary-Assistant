"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = formatTime;
function formatTime(duration) {
  if (!duration) return '';
  var hours = Math.floor(duration / 3600);
  var minutes = Math.floor((duration - hours * 3600) / 60);
  var seconds = Math.floor(duration - hours * 3600 - minutes * 60);
  var ret = '';
  if (hours > 0) {
    ret += "".concat(hours, ":");
  }
  ret += "".concat(minutes, ":");
  if (seconds < 10) {
    ret += '0';
  }
  ret += seconds;
  return ret;
}