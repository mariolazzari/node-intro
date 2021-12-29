//import { readFile } from "fs/promises";

//const result = await readFile(new URL("app.mjs", import.meta.url), "utf8");
//console.log("hello");

const compute = (a, b) => {
  let res = a + b;

  if (res > 10) {
    res /= 2;
  } else {
    res *= 2;
  }

  return res;
};

const val = compute(1, 2);

console.log(val);
