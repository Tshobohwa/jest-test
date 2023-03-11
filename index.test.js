const stringLength = require("./index.js");

test("expect string length of hello to equal 4", () => {
  expect(stringLength("Hello")).toBe(5);
});
