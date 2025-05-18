import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import { useLatest } from '../../hooks/useLatest';
var indicatorWidth = 20;
export function ScrollGrid(_ref) {
  var _ref$wrap = _ref.wrap,
    wrap = _ref$wrap === void 0 ? false : _ref$wrap,
    children = _ref.children,
    onIndicatorToggle = _ref.onIndicatorToggle;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showIndicator = _useState2[0],
    setShowIndicator = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    barWidth = _useState4[0],
    setBarWidth = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    barLeft = _useState6[0],
    setBarLeft = _useState6[1];
  var scrollerRef = useRef(null);
  var ratioRef = useRef(0.04);
  var onIndicatorToggleRef = useLatest(onIndicatorToggle);
  useEffect(function () {
    if (wrap) return;
    function updateIndicator() {
      var scroller = scrollerRef.current;
      if (!scroller) return;
      var scrollWidth = scroller.scrollWidth,
        clientWidth = scroller.clientWidth;
      if (scrollWidth === clientWidth) {
        setShowIndicator(false);
        return;
      }
      var ratio = indicatorWidth / scrollWidth;
      ratioRef.current = ratio;
      setShowIndicator(true);
      setBarWidth(clientWidth * ratio);
    }
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return function () {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [wrap]);
  useEffect(function () {
    var _onIndicatorToggleRef;
    (_onIndicatorToggleRef = onIndicatorToggleRef.current) === null || _onIndicatorToggleRef === void 0 || _onIndicatorToggleRef.call(onIndicatorToggleRef, showIndicator);
  }, [onIndicatorToggleRef, showIndicator]);
  var handleScroll = function handleScroll(e) {
    var _ref2 = e.target,
      scrollLeft = _ref2.scrollLeft;
    setBarLeft(scrollLeft * ratioRef.current);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ScrollGrid",
    "data-wrap": wrap
  }, /*#__PURE__*/React.createElement("div", {
    className: "ScrollGrid-scroller",
    ref: scrollerRef,
    onScroll: wrap ? undefined : handleScroll
  }, /*#__PURE__*/React.createElement("div", {
    className: "ScrollGrid-inner"
  }, children)), showIndicator && /*#__PURE__*/React.createElement("div", {
    className: "ScrollGrid-indicator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ScrollGrid-indicatorBar",
    style: {
      width: barWidth,
      transform: "translateX(".concat(barLeft, "px)")
    }
  })));
}