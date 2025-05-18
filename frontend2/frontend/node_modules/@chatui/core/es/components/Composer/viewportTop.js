var rootEl = document.documentElement;
var chatApp;
var requestID;
var viewportTop = 0;
export function setViewportTop(top) {
  cancelAnimationFrame(requestID);
  rootEl.style.setProperty('--viewport-top', "".concat(top, "px"));
}
export function updateViewportTop() {
  if (!chatApp) {
    chatApp = document.querySelector('.ChatApp');
  }
  if (!chatApp) return;
  var _chatApp$getBoundingC = chatApp.getBoundingClientRect(),
    top = _chatApp$getBoundingC.top;
  if (top === 0) {
    requestID = requestAnimationFrame(updateViewportTop);
  } else {
    viewportTop = Math.abs(top);
    setViewportTop(viewportTop);
  }
}