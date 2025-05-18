import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import useMount from '../../hooks/useMount';
import { Backdrop } from '../Backdrop';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import useNextId from '../../hooks/useNextId';
import toggleClass from '../../utils/toggleClass';
import { useConfig } from '../ConfigProvider';
function clearModal() {
  if (!document.querySelector('.Modal') && !document.querySelector('.Popup')) {
    toggleClass('S--modalOpen', false);
  }
}
export var Base = function Base(props) {
  var baseClass = props.baseClass,
    active = props.active,
    className = props.className,
    title = props.title,
    subTitle = props.subTitle,
    _props$showClose = props.showClose,
    showClose = _props$showClose === void 0 ? true : _props$showClose,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    _props$backdrop = props.backdrop,
    backdrop = _props$backdrop === void 0 ? true : _props$backdrop,
    height = props.height,
    overflow = props.overflow,
    actions = props.actions,
    _props$vertical = props.vertical,
    vertical = _props$vertical === void 0 ? true : _props$vertical,
    btnVariant = props.btnVariant,
    bgColor = props.bgColor,
    avatar = props.avatar,
    children = props.children,
    onBackdropClick = props.onBackdropClick,
    onClose = props.onClose;
  var mid = useNextId('modal-');
  var titleId = props.titleId || mid;
  var configCtx = useConfig();
  var wrapper = useRef(null);
  var _useMount = useMount({
      active: active,
      ref: wrapper
    }),
    didMount = _useMount.didMount,
    isShow = _useMount.isShow;
  useEffect(function () {
    setTimeout(function () {
      if (autoFocus && wrapper.current) {
        wrapper.current.focus();
      }
    });
  }, [autoFocus]);
  useEffect(function () {
    if (isShow) {
      toggleClass('S--modalOpen', isShow);
    }
  }, [isShow]);
  useEffect(function () {
    if (!active && !didMount) {
      clearModal();
    }
  }, [active, didMount]);
  useEffect(function () {
    return function () {
      clearModal();
    };
  }, []);
  if (!didMount) return null;
  var isPopup = baseClass === 'Popup';
  var hasAvatar = avatar && baseClass === 'Modal';
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: clsx(baseClass, className, {
      active: isShow
    }),
    tabIndex: -1,
    "data-elder-mode": configCtx.elderMode,
    ref: wrapper
  }, backdrop && /*#__PURE__*/React.createElement(Backdrop, {
    active: isShow,
    onClick: backdrop === true ? onBackdropClick || onClose : undefined
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx("".concat(baseClass, "-dialog"), {
      'pb-safe': isPopup && !actions
    }),
    "data-bg-color": bgColor,
    "data-height": isPopup && height ? height : undefined,
    "data-has-avatar": hasAvatar,
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-modal": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClass, "-content")
  }, hasAvatar && /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClass, "-avatar"),
    style: {
      '--avatar': "url(".concat(avatar, ")")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClass, "-header")
  }, /*#__PURE__*/React.createElement("h5", {
    className: "".concat(baseClass, "-title"),
    id: titleId
  }, title), isPopup && subTitle && /*#__PURE__*/React.createElement("h6", {
    className: "".concat(baseClass, "-subtitle")
  }, subTitle), showClose && onClose && /*#__PURE__*/React.createElement(IconButton, {
    className: "".concat(baseClass, "-close"),
    icon: "close",
    size: "lg",
    onClick: onClose,
    "aria-label": "\u5173\u95ED"
  })), /*#__PURE__*/React.createElement("div", {
    className: clsx("".concat(baseClass, "-body"), {
      overflow: overflow
    })
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClass, "-footer ").concat(baseClass, "-footer--").concat(vertical ? 'v' : 'h'),
    "data-variant": btnVariant || 'round'
  }, actions.map(function (item) {
    return /*#__PURE__*/React.createElement(Button, _extends({
      size: "lg",
      block: isPopup,
      variant: btnVariant
    }, item, {
      key: item.label
    }));
  }))))), document.body);
};