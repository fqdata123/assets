import{j as u,o as c,h as m,r as d,R as e,C as p,V as g,M as b,N as f,I as C,G as h}from"./vendor.53f783ab.js";import{C as E,b as w}from"./index.esm.926b1885.js";import"./index.b4cae35e.js";const x=()=>{const{t}=u(),l=c(),o=m(),[r,i]=d.exports.useState(""),n=()=>{E(r),w.post("login").then(s=>{const a=s.data;a.code===200?(o({title:t(a.message),status:"success",duration:3e3,isClosable:!0}),l.push("settings/0")):o({title:t(a.message),status:"error",duration:3e3,isClosable:!0})})};return e.createElement(p,{p:"4",h:"full"},e.createElement(g,{w:{base:"full",md:"50%"}},e.createElement(b,{isRequired:!0},e.createElement(f,null,t("password")),e.createElement(C,{type:"password",value:r,onChange:s=>i(s.target.value),onKeyUp:s=>{s.key==="Enter"&&n()}})),e.createElement(h,{onClick:n},t("login"))))};export{x as default};