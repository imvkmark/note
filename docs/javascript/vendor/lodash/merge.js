#!/usr/bin/env node
let _ = require("../../node_modules/lodash/index.js");

let sequence = [
    {
        account_id: 393,
        nickname: "阿拉蕾",
        avatar:
            "https://dianjing-oss.liexiang.net/dev/default/201907/04/17/01185iKNp9dS.png",
        sex: "female",
        age: 21,
        accid: "dev_pjwrkn",
        seat: "",
        nobility_info: {
            noble_thumb: "",
            title: ""
        },
        sequence: 0,
        privilege: ["view"]
    },
    {
        account_id: 0,
        nickname: "2号座",
        avatar: "",
        sex: "",
        age: 0,
        accid: "",
        seat: "",
        nobility_info: {
            noble_thumb: "",
            title: ""
        },
        sequence: 1,
        privilege: []
    },
    {
        account_id: 0,
        nickname: "3号座",
        avatar: "",
        sex: "",
        age: 0,
        accid: "",
        seat: "",
        nobility_info: {
            noble_thumb: "",
            title: ""
        },
        sequence: 2,
        privilege: []
    },
    {
        account_id: 0,
        nickname: "4号座",
        avatar: "",
        sex: "",
        age: 0,
        accid: "",
        seat: "",
        nobility_info: {
            noble_thumb: "",
            title: ""
        },
        sequence: 3,
        privilege: []
    },
    {
        account_id: 0,
        nickname: "5号座",
        avatar: "",
        sex: "",
        age: 0,
        accid: "",
        seat: "",
        nobility_info: {
            noble_thumb: "",
            title: ""
        },
        sequence: 4,
        privilege: []
    },
    {
        account_id: 0,
        nickname: "6号座",
        avatar: "",
        sex: "",
        age: 0,
        accid: "",
        seat: "",
        nobility_info: {
            noble_thumb: "",
            title: ""
        },
        sequence: 5,
        privilege: []
    }
];

let carPit = [
    { nickname: "1号座", sequence: 0, account_id: 0 },
    { nickname: "2号座", sequence: 1, account_id: 0 },
    { nickname: "3号座", sequence: 2, account_id: 0 },
    { nickname: "4号座", sequence: 3, account_id: 0 },
    { nickname: "5号座", sequence: 4, account_id: 0 },
    { nickname: "6号座", sequence: 5, account_id: 0 },
    { nickname: "7号座", sequence: 6, account_id: 0 },
    { nickname: "8号座", sequence: 7, account_id: 0 },
    { nickname: "9号座", sequence: 8, account_id: 0 }
];

if (_.size(sequence) < 9) {
   let last = _.slice(carPit, _.size(sequence) - 9);
   console.log(_.concat(sequence, last));
}


