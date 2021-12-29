import { readFile } from "fs";
import { readFile as readFileP } from "fs/promises";

// callback
readFile(new URL("app.mjs", import.meta.url), (err, data) => {
  if (err) {
    // error handling
    console.error(err);
    // stop execution
    throw err;
  } else {
    // data handling
    console.log("Data:", data);
  }
});

// promises
readFileP(new URL("app2.mjs", import.meta.url))
  .then(data => {
    // data handling
    console.log("Data:", data);
  })
  .catch(err => {
    // error handling
    console.error(err);
  });

// async / await
try {
  // data handling
  const file = await readFileP(new URL("app3.mjs", import.meta.url));
  console.log("Data:", file);
} catch (error) {
  // error handling
  console.error("Error async:", error);
}

// unhandled error
const file = await readFileP(new URL("app4.mjs", import.meta.url));

// unhandled errors
process.on("uncaoughtException", err => {
  console.error("Unhandled error:", err);
});
