import assert from "assert";
import { add } from "./myLib.mjs";

console.log("add()\nShould add numbers");

try {
  assert.strictEqual(add(1, 2), 3);
  console.log("SUCCESS ");
} catch (error) {
  console.log("FAIL");
  console.error(error);
}
