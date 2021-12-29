const { add } = require("./myLib.js");

describe("add()", () => {
  test("add(1,2) should return 3", () => {
    const res = add(1, 2);
    expect(res).toBe(3);
  });
});
