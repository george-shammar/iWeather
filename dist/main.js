(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(645),o=n.n(r),c=n(667),a=n.n(c),i=n(659),d=o()((function(e){return e[1]})),s=a()(i);d.push([e.id,"body {\n  background-image: url("+s+");\n  background-color: #ccc;\n  height: 500px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.color-white {\n  color: white;\n}\n\n.header {\n  position: relative;\n  text-align: center;\n  font-size: larger;\n}\n\n.loc-input {\n  padding-left: 35%;\n  padding-right: 35%;\n}\n\n.weather-card {\n  position: relative;\n  margin-left: 20%;\n  margin-right: 20%;\n  height: 350px;\n  border-radius: 10%;\n}\n\n.cloud {\n  font-size: 5rem;\n  color: rgb(78, 76, 76);\n}\n\n.main {\n  font-size: 5rem;\n}\n\n.main-desc {\n  font-size: 3.5rem;\n}\n\n.line {\n  border-left: solid whitesmoke;\n  margin-bottom: 15px;\n  margin-top: 5px;\n}\n\n.color-font {\n  color: rgb(38, 38, 39);\n}\n",""]);const l=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],d=t.base?i[0]+t.base:i[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:l,updater:f(p,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var c=n.nc;c&&(r.nonce=c)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var c=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(c,a[t]):e.appendChild(c)}}function p(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function f(e,t){var n,r,o;if(t.singleton){var c=h++;n=m||(m=d(t)),r=u.bind(null,n,c,!1),o=u.bind(null,n,c,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var d=i(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=d}}}},659:(e,t,n)=>{e.exports=n.p+"58b3bc1ddb5098e70087.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(426);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=(e,t,n,r,o,c,a,i)=>{document.querySelector("#body").innerHTML="";const d=document.createElement("div");d.setAttribute("class","weather-card mt-5 border shadow"),document.getElementById("body").appendChild(d);const s=document.createElement("i");s.setAttribute("class","fas fa-cloud-sun-rain cloud"),d.appendChild(s);const l=document.createElement("div");l.setAttribute("class","d-flex justify-content-center color-font"),d.appendChild(l);const u=document.createElement("div"),p=document.createElement("h4");p.setAttribute("class","px-3 fw-bold");const m=document.createTextNode("Max-Temp");p.appendChild(m);const h=document.createElement("h4");h.setAttribute("class","px-5 fw-bold");const f=document.createTextNode(`${o}°`);h.appendChild(f),u.appendChild(p),u.appendChild(h),l.appendChild(u);const b=document.createElement("div"),v=document.createElement("h4");v.setAttribute("class","px-3 fw-bold");const g=document.createTextNode("Min-Temp");v.appendChild(g);const y=document.createElement("h4");y.setAttribute("class","px-5 fw-bold");const C=document.createTextNode(`${r}°`);y.appendChild(C),b.appendChild(v),b.appendChild(y),l.appendChild(b);const x=document.createElement("div"),w=document.createElement("h4");w.setAttribute("class","px-3 fw-bold");const E=document.createTextNode("Humidity");w.appendChild(E);const T=document.createElement("h4");T.setAttribute("class","px-5 fw-bold");const A=document.createTextNode(`${c}%`);T.appendChild(A),x.appendChild(w),x.appendChild(T),l.appendChild(x);const M=document.createElement("div"),N=document.createElement("h4");N.setAttribute("class","px-3 fw-bold");const j=document.createTextNode("Pressure");N.appendChild(j);const S=document.createElement("h4");S.setAttribute("class","px-5 fw-bold");const $=document.createTextNode(`${a}ha`);S.appendChild($),M.appendChild(N),M.appendChild(S),l.appendChild(M);const k=document.createElement("div");k.setAttribute("class","d-flex justify-content-center"),d.appendChild(k);const B=document.createElement("div");B.setAttribute("class","pe-5"),k.appendChild(B);const I=document.createElement("p");I.setAttribute("class","main color-white");const P=document.createTextNode(`${e}°`);I.appendChild(P),B.appendChild(I);const H=document.createElement("p");H.setAttribute("class","fs-3 color-white");const L=document.createTextNode(`${t}, ${n}`);H.appendChild(L),B.appendChild(H);const O=document.createElement("div");O.setAttribute("class","line"),k.appendChild(O);const _=document.createElement("div"),z=document.createElement("p");z.setAttribute("class","main-desc ps-5 color-white");const q=document.createTextNode(i);z.appendChild(q),_.appendChild(z);const F=document.createElement("div");F.setAttribute("class","d-flex mx-5");const Z=document.createElement("button");Z.setAttribute("id","fer");const D=document.createTextNode("°F");Z.appendChild(D),F.appendChild(Z),_.appendChild(F),k.appendChild(_)};(async()=>{try{await void(document.getElementById("submit").onclick=()=>{e=document.getElementById("location").value,fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c7911001fbb406aa98e26c70ab98ec78`,{mode:"cors"}).then((e=>e.json())).then((e=>{const{description:t}=e.weather[0],n=Math.round(e.main.temp-273),r=e.name,c=e.sys.country,{humidity:a}=e.main,{pressure:i}=e.main,d=Math.round(e.main.temp_min-273),s=Math.round(e.main.temp_max-273);o(n,r,c,d,s,a,i,t),document.getElementById("fer").onclick=()=>{const e=Math.round(1.8*n+32),l=Math.round(1.8*d+32),u=Math.round(1.8*s+32);o(e,r,c,l,u,a,i,t)}})).catch((e=>(document.querySelector("#body").innerHTML="",(()=>{const e=document.getElementById("error"),t=document.createTextNode("Please enter a valid city or check your spelling.");e.appendChild(t)})()))),document.getElementById("error").innerHTML=""})}catch(e){}var e})()})()})();