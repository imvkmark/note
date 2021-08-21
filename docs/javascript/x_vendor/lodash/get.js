#!/usr/bin/env node
let _ = require("../../node_modules/lodash/index.js");

let accid = "dev_nqmggn";
let sessions = [
    {
        id: "p2p-dev_nekdmn",
        scene: "p2p",
        to: "dev_old1",
        updateTime: 1581963554532,
        lastMsg: {
            text: "old1-old-content"
        },
        unread: 0
    },
    {
        id: "p2p-dev_pqmegp",
        scene: "p2p",
        to: "dev_old2",
        updateTime: 1581963548877,
        lastMsg: {
            text: "old2-old-content"
        },
        unread: 0,
    }
];

let sessionAddObj = {
    id: "p2p-dev_new",
    scene: "p2p",
    to: "dev_new1",
    updateTime: 1581963548877,
    lastMsg: {
        text: "new1-new-content"
    },
    unread: 0
};

let sessionModifyObj = {
    id: "p2p-dev_pqmegp",
    scene: "p2p",
    to: "dev_old1",
    updateTime: 1581963548877,
    lastMsg: {
        text: "old1-new-content"
    },
    unread: 0
};

let sessionAddArr = [
    {
        id: "p2p-dev_pqmegp",
        scene: "p2p",
        to: "dev_new2",
        updateTime: 1581963548877,
        lastMsg: {
            text: "new2-new-content"
        },
        unread: 0
    }
];


let sessionModifyArr = [
    {
        id: "p2p-dev_pqmegp",
        scene: "p2p",
        to: "dev_old2",
        updateTime: 1581963548877,
        lastMsg: {
            text: "old2-old-content"
        },
        unread: 0
    }
];
const storeSessions = obj => {

    let items = _.isArray(obj) ? obj : [obj];

    if (sessions && _.size(sessions)) {
        console.log(":tip:nim:sessions:before", sessions);
        let selfData = _.get(sessions, accid);
        console.log([accid]);
        console.log(selfData);
        let data;
        if (selfData) {
            data = nim.mergeSessions(selfData, items);
        } else {
            data = items;
        }
        _.set(sessions, accid, data);
        console.log(":tip:nim:sessions:after", sessions);
    } else {
        Helpers.localStore(StorageKey.IM_SESSION, {
            [accid]: items
        });
    }
};

sessionStorage([]);
sessionStorage(sessionAddArr);
sessionStorage(sessionAddObj);
sessionStorage(sessionModifyArr);
sessionStorage(sessionModifyObj);



