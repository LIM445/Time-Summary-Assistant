import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
export var Navbar = function Navbar(props) {
  var className = props.className,
    title = props.title,
    logo = props.logo,
    desc = props.desc,
    leftContent = props.leftContent,
    _props$rightContent = props.rightContent,
    rightContent = _props$rightContent === void 0 ? [] : _props$rightContent,
    rightSlot = props.rightSlot,
    align = props.align;
  var isLeft = align === 'left';
  var showTitle = isLeft ? true : !logo;
  return /*#__PURE__*/React.createElement("header", {
    className: clsx('Navbar', {
      'Navbar--left': isLeft
    }, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "Navbar-left"
  }, leftContent && /*#__PURE__*/React.createElement(IconButton, _extends({
    size: "lg"
  }, leftContent))), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-main"
  }, logo && /*#__PURE__*/React.createElement("div", {
    className: "Navbar-brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "Navbar-logo",
    src: logo,
    alt: title
  })), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-inner"
  }, showTitle && /*#__PURE__*/React.createElement("h2", {
    className: "Navbar-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-desc"
  }, desc))), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Navbar-rightSlot"
  }, rightSlot), rightContent.map(function (item) {
    return /*#__PURE__*/React.createElement(IconButton, _extends({
      size: "lg",
      key: item.icon
    }, item));
  })));
};