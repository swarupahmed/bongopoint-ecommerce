import{_ as t}from"./vendor-aa600824.js";async function c(r){const o=t.stringify(r),s=await fetch(`/api/product?${o}`);return console.log("products for",o),s.json()}export{c as q};
