(()=>{"use strict";var e={964:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(81),n=r.n(o),i=r(645),a=r.n(i)()(n());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]),a.push([e.id,'*{box-sizing:border-box;font-family:"Inter",sans-serif}html{background-color:#000}body{position:relative;max-width:400px;margin:auto;background-color:#03071e;min-height:100vh}main{margin-left:.7rem;margin-right:.7rem}.title{font-size:1.7rem;color:#ffba08}.title-md{font-size:1.3rem}.title-sm{font-size:1rem}.title-light{color:#abb5f2}.title-img{position:relative;z-index:1;width:100%;min-height:100%}.title-content{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:10}.title-header{width:100%;min-width:400px;height:6.25rem;background-color:#03071e;display:flex;align-items:center;justify-content:center;border-bottom:.125rem solid #ffba08}.title-headline{color:#ffba08;font-size:2rem;font-weight:bold}.title-login{margin-top:4rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.title-login *{margin-top:2rem}.title-login-field{font-size:1.25rem;color:#abb5f2;padding-bottom:.5rem;border-bottom:.125rem solid #abb5f2}.title-login-help{font-size:1rem;font-style:italic;color:#abb5f2;margin-top:.2rem}.title-footer{position:absolute;z-index:10;height:2.313rem;width:100%;bottom:0;background-color:#03071e;display:flex;align-items:center;justify-content:center}.title-footer-copyright{font-size:1rem;font-weight:lighter;color:#abb5f2}.title-container{height:100vh;overflow:hidden}.button{display:inline-block;font-size:1.5rem;font-weight:bold;color:#ffba08;background-color:#03071e;padding:.8rem;padding-left:3rem;padding-right:3rem;border:.125rem solid #ffba08;border-radius:30px;user-select:none}.button a{color:inherit;text-decoration:inherit}.card{position:relative;margin-top:1rem;border:1px solid #ff0;border-radius:30px;overflow:hidden;color:#03071e;padding-top:1rem;text-align:center;background-color:#abb5f2}.card img{width:100%;display:block;margin-top:.5rem}',""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,f="".concat(c," ").concat(d);i[c]=d+1;var u=r(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=n(p,o);o.byIndex=s,t.splice(s,0,{identifier:f,updater:m,references:1})}a.push(f)}return a}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var i=o(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var l=o(e,n),c=0;c<i.length;c++){var d=r(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),o=r(795),n=r.n(o),i=r(569),a=r.n(i),s=r(565),l=r.n(s),c=r(216),d=r.n(c),f=r(589),u=r.n(f),p=r(964),m={};async function h(e,t,r){return new Promise((o=>{fetch(e).then((e=>e.json())).then((e=>{let r=Math.floor(Math.random()*e.results.length),o=e.results[r].original_title,n=e.results[r].release_date,i="https://image.tmdb.org/t/p/original"+e.results[r].poster_path,a=document.createElement("div");return a.classList.add("card"),a.innerHTML=o+", "+n+' <br><img src="'+i+'">',t.appendChild(a),e})).then(o(--r))}))}m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,window.getRandom=async function(e,t,r){let o=["popularity.asc","popularity.desc","release_date.asc","release_date.desc","revenue.asc","revenue.desc","primary_release_date.asc","primary_release_date.desc","original_title.asc","original_title.desc","vote_average.asc","vote_average.desc","vote_count.asc","vote_count.desc"],n=Math.floor(Math.random()*o.length),i=Math.floor(101*Math.random()),a="https://api.themoviedb.org/3/discover/movie?api_key=842edf5aa8d511e033aa2536e59e3fb4&language=en-US&sort_by="+o[n]+"&include_adult=false&with_genres="+e+"&page="+i,s=await h(a,t,r);for(;s>0;)s=await h(a,t,s)}})()})();