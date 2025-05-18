import React, { useEffect, useRef } from 'react';
import { Button } from '../Button';
import { useLocale } from '../ConfigProvider';
export var SendButton = function SendButton(_ref) {
  var disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _useLocale = useLocale('Composer'),
    trans = _useLocale.trans;
  var wrapRef = useRef(null);
  var btnRef = useRef(null);
  useEffect(function () {
    var wrap = wrapRef.current;
    var btn = btnRef.current;
    if (wrap && btn) {
      wrap.style.setProperty('--send-width', "".concat(btn.offsetWidth, "px"));
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "Composer-actions",
    "data-action": "send",
    ref: wrapRef
  }, /*#__PURE__*/React.createElement(Button, {
    className: "Composer-sendBtn",
    disabled: disabled,
    onMouseDown: onClick,
    color: "primary",
    ref: btnRef
  }, trans('send')));
};