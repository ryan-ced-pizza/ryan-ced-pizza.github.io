import{n as _,k as c,l as i,m as u}from"./vendor.ea1ee57e.js";function f(t){return c(t)===!0?"__q_date|"+t.toUTCString():i(t)===!0?"__q_expr|"+t.source:typeof t=="number"?"__q_numb|"+t:typeof t=="boolean"?"__q_bool|"+(t?"1":"0"):typeof t=="string"?"__q_strn|"+t:typeof t=="function"?"__q_strn|"+t.toString():t===Object(t)?"__q_objt|"+JSON.stringify(t):t}function a(t){if(t.length<9)return t;const o=t.substr(0,8),e=t.substring(9);switch(o){case"__q_date":return new Date(e);case"__q_expr":return new RegExp(e);case"__q_numb":return Number(e);case"__q_bool":return Boolean(e==="1");case"__q_strn":return""+e;case"__q_objt":return JSON.parse(e);default:return t}}function m(){const t=()=>null;return{has:()=>!1,getLength:()=>0,getItem:t,getIndex:t,getKey:t,getAll:()=>{},getAllKeys:()=>[],set:_,remove:_,clear:_,isEmpty:()=>!0}}function y(t){const r=window[t+"Storage"],o=e=>{const n=r.getItem(e);return n?a(n):null};return{has:e=>r.getItem(e)!==null,getLength:()=>r.length,getItem:o,getIndex:e=>e<r.length?o(r.key(e)):null,getKey:e=>e<r.length?r.key(e):null,getAll:()=>{let e;const n={},s=r.length;for(let g=0;g<s;g++)e=r.key(g),n[e]=o(e);return n},getAllKeys:()=>{const e=[],n=r.length;for(let s=0;s<n;s++)e.push(r.key(s));return e},set:(e,n)=>{r.setItem(e,f(n))},remove:e=>{r.removeItem(e)},clear:()=>{r.clear()},isEmpty:()=>r.length===0}}const l=u.has.webStorage===!1?m():y("local"),p={install({$q:t}){t.localStorage=l}};Object.assign(p,l);export{p as P};
