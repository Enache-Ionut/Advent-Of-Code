"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var input_1 = require("./input");
var sum = input_1["default"].reduce(function (number) {
  return Math.floor(number / 3) - 2;
});
console.log(sum);
//# sourceMappingURL=part1.js.map