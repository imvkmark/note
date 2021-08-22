#!/usr/bin/env node
let _ = require("../../node_modules/lodash/index.js");

console.log("_.empty : {} : ", _.isEmpty({}));

if ({}) {
    console.log("this is not empty");
}

var a = 0,
    b = true;
    c = true;

switch (true) {
    case a:
    case c:
        console.log("a");
        break;
    case b:
        console.log("b");
        break;
}
   console.log("6");
console.log(!{});
