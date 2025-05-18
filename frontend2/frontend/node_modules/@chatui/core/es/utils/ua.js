var ua = navigator.userAgent;
export var isIOS = /iPad|iPhone|iPod/.test(ua);
export var isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
export var isSafariOrIOS11 = ua.includes('Safari/') || /OS 11_[0-3]\D/.test(ua);
export function getIOSMajorVersion() {
  var v = ua.match(/OS (\d+)_/);
  return v ? +v[1] : 0;
}
export var isArkWeb = ua.includes('ArkWeb');