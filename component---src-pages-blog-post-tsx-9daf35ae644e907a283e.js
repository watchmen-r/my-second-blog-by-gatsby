(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[211,422,652],{5295:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7462),o=n(3366),i=n(7294),a=n(512),l=n(4780),s=n(948),c=n(8628),u=n(4680),d=n(1588),p=n(4867);function f(e){return(0,p.ZP)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var m=n(5893);const h=["className","raised"],g=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var y=i.forwardRef((function(e,t){const n=(0,c.i)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,u=(0,o.Z)(n,h),d=(0,r.Z)({},n,{raised:s}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},f,t)})(d);return(0,m.jsx)(g,(0,r.Z)({className:(0,a.Z)(p.root,i),elevation:s?8:void 0,ref:t,ownerState:d},u))}))},9960:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(n=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===n.Tag||e.type===n.Script||e.type===n.Style},t.Root=n.Root,t.Text=n.Text,t.Directive=n.Directive,t.Comment=n.Comment,t.Script=n.Script,t.Style=n.Style,t.Tag=n.Tag,t.CDATA=n.CDATA,t.Doctype=n.Doctype},7915:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var i=n(9960),a=n(7790);o(n(7790),t);var l={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},s=function(){function e(e,t,n){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof t&&(n=t,t=l),"object"==typeof e&&(t=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=t?t:l,this.elementCB=null!=n?n:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null;var e=this.tagStack.pop();this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var n=this.options.xmlMode?i.ElementType.Tag:void 0,r=new a.Element(e,t,void 0,n);this.addNode(r),this.tagStack.push(r)},e.prototype.ontext=function(e){var t=this.lastNode;if(t&&t.type===i.ElementType.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex);else{var n=new a.Text(e);this.addNode(n),this.lastNode=n}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===i.ElementType.Comment)this.lastNode.data+=e;else{var t=new a.Comment(e);this.addNode(t),this.lastNode=t}},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new a.Text(""),t=new a.CDATA([e]);this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var n=new a.ProcessingInstruction(e,t);this.addNode(n)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom);else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],n=t.children[t.children.length-1];this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),n&&(e.prev=n,n.next=e),e.parent=t,this.lastNode=null},e}();t.DomHandler=s,t.default=s},7790:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.CDATA=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var a=n(9960),l=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),k(this,e)},e}();t.Node=l;var s=function(e){function t(t){var n=e.call(this)||this;return n.data=t,n}return o(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(l);t.DataNode=s;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.Text,t}return o(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(s);t.Text=c;var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.Comment,t}return o(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(s);t.Comment=u;var d=function(e){function t(t,n){var r=e.call(this,n)||this;return r.name=t,r.type=a.ElementType.Directive,r}return o(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(s);t.ProcessingInstruction=d;var p=function(e){function t(t){var n=e.call(this)||this;return n.children=t,n}return o(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(l);t.NodeWithChildren=p;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.CDATA,t}return o(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(p);t.CDATA=f;var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.Root,t}return o(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(p);t.Document=m;var h=function(e){function t(t,n,r,o){void 0===r&&(r=[]),void 0===o&&(o="script"===t?a.ElementType.Script:"style"===t?a.ElementType.Style:a.ElementType.Tag);var i=e.call(this,r)||this;return i.name=t,i.attribs=n,i.type=o,i}return o(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))},enumerable:!1,configurable:!0}),t}(p);function g(e){return(0,a.isTag)(e)}function y(e){return e.type===a.ElementType.CDATA}function v(e){return e.type===a.ElementType.Text}function b(e){return e.type===a.ElementType.Comment}function x(e){return e.type===a.ElementType.Directive}function E(e){return e.type===a.ElementType.Root}function k(e,t){var n;if(void 0===t&&(t=!1),v(e))n=new c(e.data);else if(b(e))n=new u(e.data);else if(g(e)){var r=t?T(e.children):[],o=new h(e.name,i({},e.attribs),r);r.forEach((function(e){return e.parent=o})),null!=e.namespace&&(o.namespace=e.namespace),e["x-attribsNamespace"]&&(o["x-attribsNamespace"]=i({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(o["x-attribsPrefix"]=i({},e["x-attribsPrefix"])),n=o}else if(y(e)){r=t?T(e.children):[];var a=new f(r);r.forEach((function(e){return e.parent=a})),n=a}else if(E(e)){r=t?T(e.children):[];var l=new m(r);r.forEach((function(e){return e.parent=l})),e["x-mode"]&&(l["x-mode"]=e["x-mode"]),n=l}else{if(!x(e))throw new Error("Not implemented yet: ".concat(e.type));var s=new d(e.name,e.data);null!=e["x-name"]&&(s["x-name"]=e["x-name"],s["x-publicId"]=e["x-publicId"],s["x-systemId"]=e["x-systemId"]),n=s}return n.startIndex=e.startIndex,n.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(n.sourceCodeLocation=e.sourceCodeLocation),n}function T(e){for(var t=e.map((function(e){return k(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}t.Element=h,t.isTag=g,t.isCDATA=y,t.isText=v,t.isComment=b,t.isDirective=x,t.isDocument=E,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=k},3156:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return g},default:function(){return y}});var r=n(7294),o=n(4854),i=n(718),a=n(7182),l=n(5295),s=n(2658),c=n(3906),u=n(2574),d=n(3426),p=d.default||d,f=n(8216),m=n(3510),h=n(1617);const g=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(h.default,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var y=e=>{let{data:{previous:t,next:n,markdownRemark:h},location:g}=e;const y=[],v={replace:e=>{if("h1"===e.name){const{children:t,attribs:n}=e,r=n.id||"heading-"+(y.length+1);return y.push({text:(0,d.domToReact)(t),id:r}),e.attribs.id=r,e.attribs.class=((e.attribs.class||"")+" anchor-heading").trim(),e}}},b=p(h.html,v);return r.createElement(r.Fragment,null,r.createElement(f.default,null),r.createElement(i.Z,{maxWidth:"lg",sx:{pb:8}},r.createElement(a.ZP,{container:!0,spacing:3},r.createElement(a.ZP,{item:!0,xs:12,md:8,mt:7},r.createElement(l.Z,{sx:{padding:3}},r.createElement("header",null,r.createElement(s.Z,{variant:"h3",component:"h1",gutterBottom:!0},h.frontmatter.title),r.createElement(s.Z,{variant:"subtitle1",color:"textSecondary"},h.frontmatter.date)),r.createElement(c.Z,{component:"section",itemProp:"articleBody",sx:{mt:3}},b),r.createElement("nav",{className:"blog-post-nav"},r.createElement(c.Z,{component:"ul",sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,mt:3}},r.createElement(c.Z,{component:"li"},t&&r.createElement(u.Z,{component:o.Link,to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title)),r.createElement(c.Z,{component:"li"},n&&r.createElement(u.Z,{component:o.Link,to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))))),r.createElement(a.ZP,{item:!0,xs:12,md:4,mt:7},r.createElement(l.Z,{sx:{position:"sticky",top:"80px",padding:2}},r.createElement(c.Z,null,r.createElement(s.Z,{variant:"h6",gutterBottom:!0,sx:{textAlign:"center"}},"Table of Contents"),r.createElement(c.Z,{component:"ul",sx:{listStyle:"none",padding:0}},y.map(((e,t)=>r.createElement(c.Z,{component:"li",key:t,sx:{mb:1}},r.createElement(u.Z,{size:"small",variant:"outlined",onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})(e.id),sx:{marginLeft:1}},e.text)))))))))),r.createElement(m.default,null))}},3510:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(3906),i=n(2658);t.default=()=>r.createElement(o.Z,{component:"footer",sx:{height:13,display:"flex",justifyContent:"center",alignItems:"center",padding:2,backgroundColor:"#759a97",color:"white",bottom:0,width:"100%",position:"fixed"}},r.createElement(i.Z,{variant:"body1"},"© ",(new Date).getFullYear()," created by oda"))},1617:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(4854);t.default=e=>{var t,n,i;let{description:a,title:l,children:s}=e;const{site:c}=(0,o.useStaticQuery)("2841359383"),u=a||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?l+" | "+d:l),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n||null===(i=n.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:u}),s)}},885:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES=void 0,t.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e,t){return e[t.toLowerCase()]=t,e}),{})},8276:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,u,d=e.match(i),p=d&&d[1]?d[1].toLowerCase():"";switch(p){case n:var m=c(e);if(!a.test(e))null===(t=null==(g=m.querySelector(r))?void 0:g.parentNode)||void 0===t||t.removeChild(g);if(!l.test(e))null===(u=null==(g=m.querySelector(o))?void 0:g.parentNode)||void 0===u||u.removeChild(g);return m.querySelectorAll(n);case r:case o:var h=s(e).querySelectorAll(p);return l.test(e)&&a.test(e)?h[0].parentNode.childNodes:h;default:return f?f(e):(g=s(e,o).querySelector(o)).childNodes;var g}};var n="html",r="head",o="body",i=/<([a-zA-Z]+[0-9]?)/,a=/<head[^]*>/i,l=/<body[^]*>/i,s=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},c=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},u="object"==typeof window&&window.DOMParser;if("function"==typeof u){var d=new u;s=c=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),d.parseFromString(e,"text/html")}}if("object"==typeof document&&document.implementation){var p=document.implementation.createHTMLDocument();s=function(e,t){if(t){var n=p.documentElement.querySelector(t);return n&&(n.innerHTML=e),p}return p.documentElement.innerHTML=e,p}}var f,m="object"==typeof document&&document.createElement("template");m&&m.content&&(f=function(e){return m.innerHTML=e,m.content.childNodes})},4152:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(a),n=t?t[1]:void 0;return(0,i.formatDOM)((0,o.default)(e),null,n)};var o=r(n(8276)),i=n(1507),a=/<(![a-zA-Z\s]+)>/},1507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatAttributes=i,t.formatDOM=function e(t,n,o){void 0===n&&(n=null);for(var l,s=[],c=0,u=t.length;c<u;c++){var d=t[c];switch(d.nodeType){case 1:var p=a(d.nodeName);(l=new r.Element(p,i(d.attributes))).children=e("template"===p?d.content.childNodes:d.childNodes,l);break;case 3:l=new r.Text(d.nodeValue);break;case 8:l=new r.Comment(d.nodeValue);break;default:continue}var f=s[c-1]||null;f&&(f.next=l),l.parent=n,l.prev=f,l.next=null,s.push(l)}o&&((l=new r.ProcessingInstruction(o.substring(0,o.indexOf(" ")).toLowerCase(),o)).next=s[0]||null,l.parent=n,s.unshift(l),s[1]&&(s[1].prev=s[0]));return s};var r=n(7915),o=n(885);function i(e){for(var t={},n=0,r=e.length;n<r;n++){var o=e[n];t[o.name]=o.value}return t}function a(e){var t=function(e){return o.CASE_SENSITIVE_TAG_NAMES_MAP[e]}(e=e.toLowerCase());return t||e}},484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===e&&(e={});var n={},c=Boolean(e.type&&l[e.type]);for(var u in e){var d=e[u];if((0,r.isCustomAttribute)(u))n[u]=d;else{var p=u.toLowerCase(),f=s(p);if(f){var m=(0,r.getPropertyInfo)(f);switch(i.includes(f)&&a.includes(t)&&!c&&(f=s("default"+p)),n[f]=d,m&&m.type){case r.BOOLEAN:n[f]=!0;break;case r.OVERLOADED_BOOLEAN:""===d&&(n[f]=!0)}}else o.PRESERVE_CUSTOM_ATTRIBUTES&&(n[u]=d)}}return(0,o.setStyleProp)(e.style,n),n};var r=n(5726),o=n(4606),i=["checked","value"],a=["input","select","textarea"],l={reset:!0,submit:!0};function s(e){return r.possibleStandardNames[e]}},3670:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n){void 0===n&&(n={});for(var r=[],o="function"==typeof n.replace,c=n.transform||a.returnFirstArg,u=n.library||l,d=u.cloneElement,p=u.createElement,f=u.isValidElement,m=t.length,h=0;h<m;h++){var g=t[h];if(o){var y=n.replace(g,h);if(f(y)){m>1&&(y=d(y,{key:y.key||h})),r.push(c(y,g,h));continue}}if("text"!==g.type){var v=g,b={};s(v)?((0,a.setStyleProp)(v.attribs.style,v.attribs),b=v.attribs):v.attribs&&(b=(0,i.default)(v.attribs,v.name));var x=void 0;switch(g.type){case"script":case"style":g.children[0]&&(b.dangerouslySetInnerHTML={__html:g.children[0].data});break;case"tag":"textarea"===g.name&&g.children[0]?b.defaultValue=g.children[0].data:g.children&&g.children.length&&(x=e(g.children,n));break;default:continue}m>1&&(b.key=h),r.push(c(p(g.name,b,x),g,h))}else{var E=!g.data.trim().length;if(E&&g.parent&&!(0,a.canTextBeChildOfNode)(g.parent))continue;if(n.trim&&E)continue;r.push(c(g.data,g,h))}}return 1===r.length?r[0]:r};var o=n(7294),i=r(n(484)),a=n(4606),l={cloneElement:o.cloneElement,createElement:o.createElement,isValidElement:o.isValidElement};function s(e){return a.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&(0,a.isCustomComponent)(e.name,e.attribs)}},3426:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToDOM=t.domToReact=t.attributesToProps=t.Text=t.ProcessingInstruction=t.Element=t.Comment=void 0,t.default=function(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];return(0,a.default)((0,o.default)(e,(null==t?void 0:t.htmlparser2)||s),t)};var o=r(n(4152));t.htmlToDOM=o.default;var i=r(n(484));t.attributesToProps=i.default;var a=r(n(3670));t.domToReact=a.default;var l=n(7915);Object.defineProperty(t,"Comment",{enumerable:!0,get:function(){return l.Comment}}),Object.defineProperty(t,"Element",{enumerable:!0,get:function(){return l.Element}}),Object.defineProperty(t,"ProcessingInstruction",{enumerable:!0,get:function(){return l.ProcessingInstruction}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return l.Text}});var s={lowerCaseAttributeNames:!1}},4606:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.returnFirstArg=t.canTextBeChildOfNode=t.ELEMENTS_WITH_NO_TEXT_CHILDREN=t.PRESERVE_CUSTOM_ATTRIBUTES=void 0,t.isCustomComponent=function(e,t){if(!e.includes("-"))return Boolean(t&&"string"==typeof t.is);if(a.has(e))return!1;return!0},t.setStyleProp=function(e,t){if("string"!=typeof e)return;if(!e.trim())return void(t.style={});try{t.style=(0,i.default)(e,l)}catch(n){t.style={}}};var o=n(7294),i=r(n(1476)),a=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);var l={reactCompat:!0};t.PRESERVE_CUSTOM_ATTRIBUTES=Number(o.version.split(".")[0])>=16,t.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);t.canTextBeChildOfNode=function(e){return!t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)};t.returnFirstArg=function(e){return e}},5726:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}const o={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((e=>{o[e]=new r(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((([e,t])=>{o[e]=new r(e,1,!1,t,null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((e=>{o[e]=new r(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((e=>{o[e]=new r(e,2,!1,e,null,!1,!1)})),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach((e=>{o[e]=new r(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((e=>{o[e]=new r(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((e=>{o[e]=new r(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((e=>{o[e]=new r(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((e=>{o[e]=new r(e,5,!1,e.toLowerCase(),null,!1,!1)}));const i=/[\-\:]([a-z])/g,a=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((e=>{const t=e.replace(i,a);o[t]=new r(t,1,!1,e,null,!1,!1)})),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((e=>{const t=e.replace(i,a);o[t]=new r(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((e=>{const t=e.replace(i,a);o[t]=new r(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((e=>{o[e]=new r(e,1,!1,e.toLowerCase(),null,!1,!1)}));o.xlinkHref=new r("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((e=>{o[e]=new r(e,1,!1,e.toLowerCase(),null,!0,!0)}));const{CAMELCASE:l,SAME:s,possibleStandardNames:c}=n(8229),u=RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),d=Object.keys(c).reduce(((e,t)=>{const n=c[t];return n===s?e[t]=t:n===l?e[t.toLowerCase()]=t:e[t]=n,e}),{});t.BOOLEAN=3,t.BOOLEANISH_STRING=2,t.NUMERIC=5,t.OVERLOADED_BOOLEAN=4,t.POSITIVE_NUMERIC=6,t.RESERVED=0,t.STRING=1,t.getPropertyInfo=function(e){return o.hasOwnProperty(e)?o[e]:null},t.isCustomAttribute=u,t.possibleStandardNames=d},8229:function(e,t){t.SAME=0;t.CAMELCASE=1,t.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}},1476:function(e,t,n){"use strict";var r=(this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(n(7214)),o=n(6678);function i(e,t){var n={};return e&&"string"==typeof e?((0,r.default)(e,(function(e,r){e&&r&&(n[(0,o.camelCase)(e,t)]=r)})),n):n}i.default=i,e.exports=i},6678:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.camelCase=void 0;var n=/^--[a-zA-Z0-9-]+$/,r=/-([a-z])/g,o=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,l=function(e,t){return t.toUpperCase()},s=function(e,t){return"".concat(t,"-")};t.camelCase=function(e,t){return void 0===t&&(t={}),function(e){return!e||o.test(e)||n.test(e)}(e)?e:(e=e.toLowerCase(),(e=t.reactCompat?e.replace(a,s):e.replace(i,s)).replace(r,l))}},9515:function(e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,s=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(s,c):c}e.exports=function(e,s){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];s=s||{};var d=1,p=1;function f(e){var t=e.match(n);t&&(d+=t.length);var r=e.lastIndexOf("\n");p=~r?e.length-r:p+e.length}function m(){var e={line:d,column:p};return function(t){return t.position=new h(e),b(),t}}function h(e){this.start=e,this.end={line:d,column:p},this.source=s.source}h.prototype.content=e;var g=[];function y(t){var n=new Error(s.source+":"+d+":"+p+": "+t);if(n.reason=t,n.filename=s.source,n.line=d,n.column=p,n.source=e,!s.silent)throw n;g.push(n)}function v(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function b(){v(r)}function x(e){var t;for(e=e||[];t=E();)!1!==t&&e.push(t);return e}function E(){var t=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return y("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}function k(){var e=m(),n=v(o);if(n){if(E(),!v(i))return y("property missing ':'");var r=v(a),s=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return v(l),s}}return b(),function(){var e,t=[];for(x(t);e=k();)!1!==e&&(t.push(e),x(t));return t}()}},7214:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(9515));t.default=function(e,t){var n=null;if(!e||"string"!=typeof e)return n;var r=(0,o.default)(e),i="function"==typeof t;return r.forEach((function(e){if("declaration"===e.type){var r=e.property,o=e.value;i?t(r,o,e):o&&((n=n||{})[r]=o)}})),n}}}]);
//# sourceMappingURL=component---src-pages-blog-post-tsx-9daf35ae644e907a283e.js.map