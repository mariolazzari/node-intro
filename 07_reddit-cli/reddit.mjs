#! /usr/bin/env node
import yargs from "yargs";
import fetch from "node-fetch";
import open from "open";

const { argv } = yargs(process.argv);
const res = await fetch(`https://www.reddit.com/.json`);
const data = await res.json();
const { children } = data.data;
const randomPost = children[Math.floor(Math.random() * children.length)];
const { title, permalink } = randomPost.data;
const link = "https://reddit.com" + permalink;

if (argv.print) {
  console.log(title);
  console.log(link);
} else {
  open(link);
}
