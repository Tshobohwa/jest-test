"use strict";
const stringLength = (string) => {
  const length = string.length;
  if (length === 0) {
    throw Error("The string should have at least one character");
  } else if (length > 10) {
    throw Error("The string should not have more than 10 characters");
  } else return length;
};
console.log(stringLength(""));

module.exports = stringLength;
