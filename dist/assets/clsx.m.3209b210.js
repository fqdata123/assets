import{u as t,v as o,w as n,x as F,y as e,z as f,A as c,C as u,D as p,E as m,H as d,J as k,n as B,K as g,L as E,N as b}from"./index.af9b405a.js";import{a as y}from"./index.esm.0e795abe.js";import{I as j}from"./index.901a944a.js";const w={"dmg,ipa,plist":m,"exe,msi":d,"zip,gz,rar,7z,tar,jar,xz":k,apk:y,db:B,md:g,epub:E,iso:b,m3u8:e},_=(r,a)=>{if(r!==1){for(const[s,l]of Object.entries(w))if(s.split(",").includes(a.toLowerCase()))return l}switch(r){case 1:return j;case 2:return a==="doc"||a==="docx"?f:a==="xls"||a==="xlsx"?c:a==="ppt"||a==="pptx"?u:p;case 3:return e;case 4:return F;case 5:return n;case 6:return o;default:return t}};function i(r){var a,s,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r))for(a=0;a<r.length;a++)r[a]&&(s=i(r[a]))&&(l&&(l+=" "),l+=s);else for(a in r)r[a]&&(l&&(l+=" "),l+=a);return l}function z(){for(var r=0,a,s,l="";r<arguments.length;)(a=arguments[r++])&&(s=i(a))&&(l&&(l+=" "),l+=s);return l}var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});export{h as a,z as c,_ as g};