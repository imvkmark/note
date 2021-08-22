#!/usr/bin/env node
let axios = require("axios/index.js");

// let url = "http://p.zhongche.duoli.com/api_v1/site/material/prepreg";
let url = "http://proj.zhongche.sour-lemon.com/api_v1/site/material/prepreg";
params = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcC56aG9uZ2NoZS5kdW9saS5jb20vYXBpX3YxL3N5c3RlbS9hdXRoL2xvZ2luIiwiaWF0IjoxNTc0NjcxODcwLCJleHAiOjE1NzQ3MDc4NzAsIm5iZiI6MTU3NDY3MTg3MCwianRpIjoiVEZ1eFBwR3BLeTg0TlFKayIsInN1YiI6OCwicHJ2IjoiNjdkMzEwNjAzOTdkZWJkNDIyMzYzMWMxMTc1NGNlMTRjNjYzNDJjMSIsInVzZXIiOnsiaWQiOjh9fQ.F2sJdxTRrPHt54CgtiIfgpnm0Ed9yxSgkeg6sY95xlw",
  axis1_str_test: [
    { temp: "1", mpa_avg_guiyi: "2", mpa_avg_celiang: "2" },
    { temp: "1", mpa_avg_guiyi: "2", mpa_avg_celiang: "2" },
    { temp: "1", mpa_avg_guiyi: "2", mpa_avg_celiang: "2" }
  ],
  axis2_str_test: [{}, {}, {}],
  category_id: 33,
  title: "ce2"
};
let resp = axios.post(url, params).then(res => {
  console.log(res.data);
});
console.log(resp);
