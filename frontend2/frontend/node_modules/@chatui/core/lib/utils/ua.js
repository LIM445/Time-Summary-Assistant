"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIOSMajorVersion = getIOSMajorVersion;
exports.isSafariOrIOS11 = exports.isSafari = exports.isIOS = exports.isArkWeb = void 0;
var ua = navigator.userAgent;
var isIOS = exports.isIOS = /iPad|iPhone|iPod/.test(ua);
var isSafari = exports.isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
var isSafariOrIOS11 = exports.isSafariOrIOS11 = ua.includes('Safari/') || /OS 11_[0-3]\D/.test(ua);
function getIOSMajorVersion() {
  var v = ua.match(/OS (\d+)_/);
  return v ? +v[1] : 0;
}
var isArkWeb = exports.isArkWeb = ua.includes('ArkWeb');