"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[864,422,652],{3510:function(e,t,n){n.r(t);var r=n(7294),a=n(3906),o=n(2658);t.default=()=>r.createElement(a.Z,{component:"footer",sx:{height:13,display:"flex",justifyContent:"center",alignItems:"center",padding:2,backgroundColor:"#759a97",color:"white",bottom:0,width:"100%",position:"fixed"}},r.createElement(o.Z,{variant:"body1"},"© ",(new Date).getFullYear()," created by oda"))},5670:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(2734),a=n(7294),o=n.t(a,2),i=n(3546),c=n(539),l=n(4168);function s(e,t,n,r,o){const[c,l]=a.useState((()=>o&&n?n(e).matches:r?r(e).matches:t));return(0,i.Z)((()=>{let t=!0;if(!n)return;const r=n(e),a=()=>{t&&l(r.matches)};return a(),r.addListener(a),()=>{t=!1,r.removeListener(a)}}),[e,n]),c}const d=o.useSyncExternalStore;function u(e,t,n,r,o){const i=a.useCallback((()=>t),[t]),c=a.useMemo((()=>{if(o&&n)return()=>n(e).matches;if(null!==r){const{matches:t}=r(e);return()=>t}return i}),[i,e,r,o,n]),[l,s]=a.useMemo((()=>{if(null===n)return[i,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,n,e]);return d(s,l,c)}var m=n(3906),p=n(2658),y=n(8032),f=n(2637);var g=()=>{const e=function(e,t={}){const n=(0,l.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:a=!1,matchMedia:o=(r?window.matchMedia:null),ssrMatchMedia:i=null,noSsr:m=!1}=(0,c.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let p="function"==typeof e?e(n):e;return p=p.replace(/^@media( ?)/m,""),(void 0!==d?u:s)(p,a,o,i,m)}((0,r.Z)().breakpoints.down("sm"));return a.createElement(m.Z,{sx:{position:"relative",textAlign:"center",color:"white"}},a.createElement(y.S,{src:"../../images/sub-header.jpg",alt:"Subheader",style:{width:"100%",height:"250px"},__imageData:n(1971)}),a.createElement(m.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"rgba(0, 0, 0, 0)",p:2,borderRadius:1}},a.createElement(p.Z,{variant:e?"h5":"h4",component:"h1"},a.createElement(f.rf,{words:["Welcome to my tech blog","Enjoy Reading"],loop:!0,cursor:!0,cursorStyle:"_",typeSpeed:50,deleteSpeed:50,delaySpeed:2e3}))))}},1617:function(e,t,n){n.r(t);var r=n(7294),a=n(4854);t.default=e=>{var t,n,o;let{description:i,title:c,children:l}=e;const{site:s}=(0,a.useStaticQuery)("2841359383"),d=i||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?c+" | "+u:c),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n||null===(o=n.social)||void 0===o?void 0:o.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:d}),l)}},8015:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v}});var r=n(7294),a=n(4854),o=n(9155),i=n(5725),c=n(5295),l=n(7797),s=n(2643),d=n(2658),u=n(3906),m=n(8032),p=n(8126),y=n(3510),f=n(8216),g=n(5670),b=n(1617);const h=(e,t)=>e.length<=t?e:e.substring(0,t)+"...";t.default=e=>{let{data:t,pageContext:n}=e;const b=t.allMarkdownRemark.nodes,{currentPage:v,numPages:E}=n,x=v||1,w=1===x,S=x===E,k=x-1==1?"/":"/page/"+(x-1),_="/page/"+(x+1);return r.createElement(r.Fragment,null,r.createElement(f.default,null),r.createElement(g.default,null),r.createElement(o.Z,{maxWidth:"lg",sx:{pb:10}},r.createElement(i.ZP,{container:!0,spacing:3},r.createElement(i.ZP,{item:!0,md:8,mt:3},r.createElement(i.ZP,{container:!0,spacing:3},b.map((e=>{const t=h(e.frontmatter.title||e.fields.slug,30),n=h(e.frontmatter.description||e.excerpt,130),o=(0,m.c)(e.frontmatter.featuredImage);return r.createElement(i.ZP,{item:!0,xs:12,sm:6,key:e.fields.slug},r.createElement(c.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",transition:"transform 0.3s, box-shadow 0.3s","&:hover":{transform:"translateY(-10px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"}}},r.createElement(l.Z,{component:a.Link,to:e.fields.slug},o&&r.createElement(m.G,{image:o,alt:e.frontmatter.title,style:{maxHeight:200}}),r.createElement(s.Z,null,r.createElement(d.Z,{variant:"h6",component:"h2"},t),r.createElement(d.Z,{variant:"body2",color:"text.secondary"},e.frontmatter.date),r.createElement(d.Z,{variant:"body2",component:"p"},n)))))}))),r.createElement(u.Z,{sx:{display:"flex",justifyContent:"space-between",mt:4}},w?r.createElement("div",null):r.createElement(a.Link,{to:k,rel:"prev"},"← Previous Page"),!S&&r.createElement(a.Link,{to:_,rel:"next"},"Next Page →"))),r.createElement(i.ZP,{item:!0,md:4,mt:3},r.createElement(u.Z,{sx:{position:"sticky",top:"80px"}},r.createElement(p.default,null))))),r.createElement(y.default,null))};const v=e=>{let{pageContext:t}=e;const{currentPage:n}=t,a=1===n?"All posts":"Page "+n;return r.createElement(b.default,{title:a})}},2637:function(e,t,n){var r=n(5893),a=n(7294),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function i(e,t){var n,r;switch(t.type){case"TYPE":return o(o({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length+1)});case"DELAY":return o(o({},e),{speed:t.payload});case"DELETE":return o(o({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length-1)});case"COUNT":return o(o({},e),{count:e.count+1});default:return e}}var c=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=void 0===r?1:r,c=e.typeSpeed,l=void 0===c?80:c,s=e.deleteSpeed,d=void 0===s?50:s,u=e.delaySpeed,m=void 0===u?1500:u,p=e.onLoopDone,y=e.onType,f=e.onDelete,g=e.onDelay,b=a.useReducer(i,{speed:l,text:"",count:0}),h=b[0],v=h.speed,E=h.text,x=h.count,w=b[1],S=a.useRef(0),k=a.useRef(!1),_=a.useRef(!1),C=a.useRef(!1),T=a.useRef(!1),Z=a.useCallback((function(){var e=x%n.length,t=n[e];_.current?(w({type:"DELETE",payload:t,speed:d}),""===E&&(_.current=!1,w({type:"COUNT"}))):(w({type:"TYPE",payload:t,speed:l}),C.current=!0,E===t&&(w({type:"DELAY",payload:m}),C.current=!1,T.current=!0,setTimeout((function(){T.current=!1,_.current=!0}),m),o>0&&(S.current+=1,S.current/n.length===o&&(T.current=!1,k.current=!0)))),C.current&&y&&y(S.current),_.current&&f&&f(),T.current&&g&&g()}),[x,m,d,o,l,n,E,y,f,g]);return a.useEffect((function(){var e=setTimeout(Z,v);return k.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[Z,v]),a.useEffect((function(){p&&k.current&&p()}),[p]),[E,{isType:C.current,isDelay:T.current,isDelete:_.current,isDone:k.current}]};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var l=a.memo((function(e){var t=e.cursorBlinking,n=void 0===t||t,a=e.cursorStyle,i=void 0===a?"|":a,c=e.cursorColor,l=void 0===c?"inherit":c;return r.jsx("span",o({style:{color:l},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(n?"styles-module_blinking__9VXRT":"")},{children:i}))}));t.rf=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,a=e.loop,o=void 0===a?1:a,i=e.typeSpeed,s=void 0===i?80:i,d=e.deleteSpeed,u=void 0===d?50:d,m=e.delaySpeed,p=void 0===m?1500:m,y=e.cursor,f=void 0!==y&&y,g=e.cursorStyle,b=void 0===g?"|":g,h=e.cursorColor,v=void 0===h?"inherit":h,E=e.cursorBlinking,x=void 0===E||E,w=e.onLoopDone,S=e.onType,k=e.onDelay,_=e.onDelete,C=c({words:n,loop:o,typeSpeed:s,deleteSpeed:u,delaySpeed:p,onLoopDone:w,onType:S,onDelay:k,onDelete:_})[0];return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:C}),f&&r.jsx(l,{cursorStyle:b,cursorColor:v,cursorBlinking:x})]})}},1971:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#684838","images":{"fallback":{"src":"/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/65100/sub-header.jpg","srcSet":"/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/36355/sub-header.jpg 968w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/1c754/sub-header.jpg 1936w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/65100/sub-header.jpg 3872w","sizes":"(min-width: 3872px) 3872px, 100vw"},"sources":[{"srcSet":"/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/ced80/sub-header.webp 968w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/2608e/sub-header.webp 1936w,\\n/my-second-blog-by-gatsby/static/da8218cc4222a5996b9a874c78b7826f/782f0/sub-header.webp 3872w","type":"image/webp","sizes":"(min-width: 3872px) 3872px, 100vw"}]},"width":3872,"height":2592}')}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-tsx-4751e0d1f8c31cf74ca7.js.map