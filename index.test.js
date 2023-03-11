const stringLength = require("./index.js");

test("expect string length of hello to be 5", () => {
  expect(stringLength("hello")).toBe(5);
});

test("expect string length of an empty string to throw an error", () => {
  expect(() => {
    stringLength("");
  }).toThrow(Error);
});

test("expect string length of more than 10 to throw an error", () => {
  expect(() => {
    stringLength("12345678901");
  }).toThrow(Error);
});
