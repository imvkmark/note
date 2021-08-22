#!/usr/bin/env node
let _ = require("../../node_modules/lodash/index.js");

let demoDeta = {
  first: 1,
  second: 2
};
console.log("_.get : {demoData} : ", demoDeta);
console.log("_.get : first : ", _.get(demoDeta, "first"));

console.log(
  "_.merge : {third : { '3rd-1' : '3-1'}} : After : ",
  _.merge(demoDeta, { third: { "3rd-1": "3-1" } })
);

const ori = [
  { a: 1, b: 1 },
  { a: 2, b: 2 },
  { a: 2, b: 3 }
];

const dans = [
  { value: 40, label: "青铜3", level: 2 },
  { value: 41, label: "青铜2", level: 3 },
  { value: 35, label: "青铜1", level: 4 }
];
let maps = _.find(dans, function(item) {
  if (item.value === 40) {
    return true;
  }
});

console.log(maps);

let takew = _.takeWhile(ori, function(item) {
  if (item.a !== 2) {
    let pic = _.pick(item, ["a"]);
    return pic;
  }
});

let redu = _.reduce(
  ori,
  function(aim, item) {
    if (item.a === 2) {
      aim.push(_.pick(item, ["b"]));
      return aim;
    }
    return aim;
  },
  []
);

// console.log(redu);

let at = _.at(null, "b");
console.log(at);

at = _.get({ a: 5 }, "a");
console.log(at);

at = _.get(null, "a", []);
console.log(_.isEmpty(at));

at = _.get(null, "a", {});
console.log(_.isEmpty(at));

let a = [{ b: 1 }, { b: 2 }];
console.log(_.find(a, { b: 1 }));
