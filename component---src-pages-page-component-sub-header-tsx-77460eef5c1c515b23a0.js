"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[553],{2734:function(e,t,n){n.d(t,{Z:function(){return a}});n(7294);var r=n(6682),o=n(247),s=n(606);function a(){const e=(0,r.Z)(o.Z);return e[s.Z]||e}},1730:function(e,t,n){var r;n.d(t,{Z:function(){return l}});var o=n(7294),s=n(3546),a=n(539),c=n(4168);function i(e,t,n,r,a){const[c,i]=o.useState((()=>a&&n?n(e).matches:r?r(e).matches:t));return(0,s.Z)((()=>{let t=!0;if(!n)return;const r=n(e),o=()=>{t&&i(r.matches)};return o(),r.addListener(o),()=>{t=!1,r.removeListener(o)}}),[e,n]),c}const u=(r||(r=n.t(o,2))).useSyncExternalStore;function d(e,t,n,r,s){const a=o.useCallback((()=>t),[t]),c=o.useMemo((()=>{if(s&&n)return()=>n(e).matches;if(null!==r){const{matches:t}=r(e);return()=>t}return a}),[a,e,r,s,n]),[i,d]=o.useMemo((()=>{if(null===n)return[a,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[a,n,e]);return u(d,i,c)}function l(e,t={}){const n=(0,c.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:s=(r?window.matchMedia:null),ssrMatchMedia:l=null,noSsr:p=!1}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let y="function"==typeof e?e(n):e;y=y.replace(/^@media( ?)/m,"");return(void 0!==u?d:i)(y,o,s,l,p)}},539:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5971);function o(e){const{theme:t,name:n,props:o}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,o):o}},3546:function(e,t,n){var r=n(7294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.Z=o},3494:function(e,t,n){n.r(t);var r=n(2734),o=n(1730),s=n(3906),a=n(2658),c=n(8032),i=n(7294),u=n(2637);t.default=()=>{const e=(0,r.Z)(),t=(0,o.Z)(e.breakpoints.down("sm"));return i.createElement(s.Z,{sx:{position:"relative",textAlign:"center",color:"white"}},i.createElement(c.S,{src:"../../images/sub-header.jpg",alt:"Subheader",style:{width:"100%",height:"250px"},__imageData:n(1971)}),i.createElement(s.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"rgba(0, 0, 0, 0)",p:2,borderRadius:1}},i.createElement(a.Z,{variant:t?"h5":"h4",component:"h1"},i.createElement(u.rf,{words:["Welcome to my tech blog","Enjoy Reading"],loop:!0,cursor:!0,cursorStyle:"_",typeSpeed:50,deleteSpeed:50,delaySpeed:2e3}))))}},2637:function(e,t,n){var r=n(5893),o=n(7294),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};function a(e,t){var n,r;switch(t.type){case"TYPE":return s(s({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length+1)});case"DELAY":return s(s({},e),{speed:t.payload});case"DELETE":return s(s({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length-1)});case"COUNT":return s(s({},e),{count:e.count+1});default:return e}}var c=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,s=void 0===r?1:r,c=e.typeSpeed,i=void 0===c?80:c,u=e.deleteSpeed,d=void 0===u?50:u,l=e.delaySpeed,p=void 0===l?1500:l,y=e.onLoopDone,f=e.onType,m=e.onDelete,b=e.onDelay,h=o.useReducer(a,{speed:i,text:"",count:0}),g=h[0],v=g.speed,w=g.text,S=g.count,_=h[1],x=o.useRef(0),E=o.useRef(!1),T=o.useRef(!1),k=o.useRef(!1),C=o.useRef(!1),D=o.useCallback((function(){var e=S%n.length,t=n[e];T.current?(_({type:"DELETE",payload:t,speed:d}),""===w&&(T.current=!1,_({type:"COUNT"}))):(_({type:"TYPE",payload:t,speed:i}),k.current=!0,w===t&&(_({type:"DELAY",payload:p}),k.current=!1,C.current=!0,setTimeout((function(){C.current=!1,T.current=!0}),p),s>0&&(x.current+=1,x.current/n.length===s&&(C.current=!1,E.current=!0)))),k.current&&f&&f(x.current),T.current&&m&&m(),C.current&&b&&b()}),[S,p,d,s,i,n,w,f,m,b]);return o.useEffect((function(){var e=setTimeout(D,v);return E.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[D,v]),o.useEffect((function(){y&&E.current&&y()}),[y]),[w,{isType:k.current,isDelay:C.current,isDelete:T.current,isDone:E.current}]};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var i=o.memo((function(e){var t=e.cursorBlinking,n=void 0===t||t,o=e.cursorStyle,a=void 0===o?"|":o,c=e.cursorColor,i=void 0===c?"inherit":c;return r.jsx("span",s({style:{color:i},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(n?"styles-module_blinking__9VXRT":"")},{children:a}))}));t.rf=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,o=e.loop,s=void 0===o?1:o,a=e.typeSpeed,u=void 0===a?80:a,d=e.deleteSpeed,l=void 0===d?50:d,p=e.delaySpeed,y=void 0===p?1500:p,f=e.cursor,m=void 0!==f&&f,b=e.cursorStyle,h=void 0===b?"|":b,g=e.cursorColor,v=void 0===g?"inherit":g,w=e.cursorBlinking,S=void 0===w||w,_=e.onLoopDone,x=e.onType,E=e.onDelay,T=e.onDelete,k=c({words:n,loop:s,typeSpeed:u,deleteSpeed:l,delaySpeed:y,onLoopDone:_,onType:x,onDelay:E,onDelete:T})[0];return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:k}),m&&r.jsx(i,{cursorStyle:h,cursorColor:v,cursorBlinking:S})]})}},1971:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#684838","images":{"fallback":{"src":"/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/65100/sub-header.jpg","srcSet":"/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/36355/sub-header.jpg 968w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/1c754/sub-header.jpg 1936w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/65100/sub-header.jpg 3872w","sizes":"(min-width: 3872px) 3872px, 100vw"},"sources":[{"srcSet":"/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/ced80/sub-header.webp 968w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/2608e/sub-header.webp 1936w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/782f0/sub-header.webp 3872w","type":"image/webp","sizes":"(min-width: 3872px) 3872px, 100vw"}]},"width":3872,"height":2592}')}}]);
//# sourceMappingURL=component---src-pages-page-component-sub-header-tsx-77460eef5c1c515b23a0.js.map