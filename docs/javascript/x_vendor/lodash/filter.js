#!/usr/bin/env node
let _ = require("lodash");


console.log(_.filter(['abc', 'bbc', '', '']).join(','));

let a = _.split("abc,cd", ",");
console.log(a);

let ac = _.concat(a, ['abc','dbd']);
let acu = _.uniq(ac);

let acus = _.slice(acu, 0, 3);

console.log(ac);
console.log(acu);
console.log(acus);