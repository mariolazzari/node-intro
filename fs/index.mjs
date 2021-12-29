// promises fs API
import { readFile, writeFile } from "fs/promises";

//console.log("Path:", import.meta.url);

// read file
let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf8"
);
//console.log(template);

const data = {
  title: "Learn Node.js",
  body: "This is the final HTML",
};

//console.log(Object.entries(data));
for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value);
}
//console.log(template);

// save file
await writeFile(new URL("index.html", import.meta.url), template, "utf8");
