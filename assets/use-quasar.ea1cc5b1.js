import{ad as o,ae as n,af as u}from"./vendor.191c97fe.js";const i={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},a=Object.keys(i);i.all=!0;function c(t){const e={};for(const r of a)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?i:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function s(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function d(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),o.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function f(){const t=new Map;return{getCache:function(e,r){return t[e]===void 0?t[e]=r:t[e]},getCacheWithFn:function(e,r){return t[e]===void 0?t[e]=r():t[e]}}}function g(){return n(u)}export{g as a,d as c,c as g,s,f as u};
