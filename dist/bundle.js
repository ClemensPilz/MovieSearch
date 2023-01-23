(()=>{"use strict";var e={964:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]),a.push([e.id,'*{box-sizing:border-box;font-family:"Inter",sans-serif}html{background-color:#000}body{position:relative;max-width:400px;margin:auto;background-color:#03071e;min-height:100vh}main{margin-left:.7rem;margin-right:.7rem}.main-center{display:flex;flex-direction:column;align-items:center}.title{font-size:1.7rem;color:#ffba08}.title-md{font-size:1.3rem}.title-sm{font-size:1rem}.title-light{color:#abb5f2}.title-img{position:relative;z-index:1;width:100%;min-height:100%}.title-content{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:10}.title-header{width:100%;min-width:400px;height:6.25rem;background-color:#03071e;display:flex;align-items:center;justify-content:center;border-bottom:.125rem solid #ffba08;margin-bottom:1rem}.title-headline{color:#ffba08;font-size:2rem;font-weight:bold}.title-login{margin-top:4rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.title-login *{margin-top:2rem}.title-login-field{font-size:1.25rem;color:#abb5f2;padding-bottom:.5rem;border-bottom:.125rem solid #abb5f2}.title-login-help{font-size:1rem;font-style:italic;color:#abb5f2;margin-top:.2rem}.title-footer{position:absolute;z-index:10;height:2.313rem;width:100%;bottom:0;background-color:#03071e;display:flex;align-items:center;justify-content:center}.title-footer-copyright{font-size:1rem;font-weight:lighter;color:#abb5f2}.title-container{height:100vh;overflow:hidden}.button{display:inline-block;font-size:1.5rem;font-weight:bold;color:#ffba08;background-color:#03071e;padding:.8rem;padding-left:3rem;padding-right:3rem;border:.125rem solid #ffba08;border-radius:30px;user-select:none}.button:hover{color:#abb5f2;border:.125rem solid #abb5f2}.button a{color:inherit;text-decoration:inherit}.card{position:relative;margin-top:1rem;border:1px solid #ff0;border-radius:30px;overflow:hidden;color:#03071e;padding-top:1rem;text-align:center;background-color:#abb5f2}.card img{width:100%;display:block;margin-top:.5rem}',""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var f=r(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var l=n(e,o),c=0;c<i.length;c++){var d=r(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(569),a=r.n(i),s=r(565),l=r.n(s),c=r(216),d=r.n(c),u=r(589),f=r.n(u),p=r(964),m={};async function h(e,t,r,n){return new Promise((o=>{fetch(e).then((e=>e.json())).then((e=>{console.log(e);let o=Math.floor(Math.random()*e.results.length);if(!n.includes(o)){n.push(o);let i="https://www.themoviedb.org/movie/"+e.results[o].id,a=e.results[o].original_title,s=e.results[o].release_date,l="https://image.tmdb.org/t/p/original"+e.results[o].poster_path,c=document.createElement("div");c.classList.add("card"),c.innerHTML=a+", "+s+' <br><img src="'+l+'">',c.innerHTML.includes("null")||(t.appendChild(c),c.addEventListener("click",(()=>window.open(i))),r--)}return{count:r,done:n}})).then((e=>o(e)))}))}m.styleTagTransform=f(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,window.getRandomURL=function(e){let t=["popularity.desc","release_date.desc","revenue.desc","primary_release_date.desc","vote_average.desc","vote_count.desc"],r=Math.floor(Math.random()*t.length),n=Math.floor(50*Math.random())+1;return"https://api.themoviedb.org/3/discover/movie?api_key=842edf5aa8d511e033aa2536e59e3fb4&language=en-US&sort_by="+t[r]+"&include_adult=false&with_genres="+e+"&page="+n},window.callAddRandom=async function(e,t,r){let n=await h(e,t,r,[]);for(;n.count>0;)n=await h(e,t,n.count,n.done)}})()})();