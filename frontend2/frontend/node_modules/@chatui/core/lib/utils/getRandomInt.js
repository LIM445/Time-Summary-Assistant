"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandomInt;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}