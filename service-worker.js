if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const r=e=>s(e,o),u={module:{uri:o},exports:l,require:r};i[o]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(n(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Bite-English"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/chatgpt-ui/404.html",revision:"a53ef690caa5796a1009f5901ca3da4e"},{url:"/chatgpt-ui/css/app.ad822a30.css",revision:null},{url:"/chatgpt-ui/css/chunk-vendors.68a08f50.css",revision:null},{url:"/chatgpt-ui/css/home.e3b3d658.css",revision:null},{url:"/chatgpt-ui/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/chatgpt-ui/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/chatgpt-ui/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/chatgpt-ui/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/chatgpt-ui/index.html",revision:"d657031a1706b1487129e004fadaced0"},{url:"/chatgpt-ui/js/app.99107980.js",revision:null},{url:"/chatgpt-ui/js/chunk-vendors.99f931ba.js",revision:null},{url:"/chatgpt-ui/js/home.dcc62a5e.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
