"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[131],{2574:function(e,t,o){o.d(t,{Z:function(){return C}});var r=o(3366),n=o(7462),a=o(7294),i=o(512),s=o(5971),l=o(4780),c=o(2101),p=o(948),d=o(9219),u=o(8628),m=o(6317),h=o(1220),f=o(1588),v=o(4867);function g(e){return(0,v.ZP)("MuiButton",e)}var x=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=a.createContext({});var S=a.createContext(void 0),Z=o(5893);const w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),k=(0,p.ZP)(m.Z,{shouldForwardProp:e=>(0,d.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,h.Z)(o.color)}`],t[`size${(0,h.Z)(o.size)}`],t[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,r;const a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),$=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),z=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var C=a.forwardRef((function(e,t){const o=a.useContext(b),c=a.useContext(S),p=(0,s.Z)(o,e),d=(0,u.i)({props:p,name:"MuiButton"}),{children:m,color:f="primary",component:v="button",className:x,disabled:y=!1,disableElevation:C=!1,disableFocusRipple:W=!1,endIcon:R,focusVisibleClassName:I,fullWidth:M=!1,size:B="medium",startIcon:E,type:P,variant:N="text"}=d,A=(0,r.Z)(d,w),T=(0,n.Z)({},d,{color:f,component:v,disabled:y,disableElevation:C,disableFocusRipple:W,fullWidth:M,size:B,type:P,variant:N}),O=(e=>{const{color:t,disableElevation:o,fullWidth:r,size:a,variant:i,classes:s}=e,c={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(a)}`,`${i}Size${(0,h.Z)(a)}`,`color${(0,h.Z)(t)}`,o&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,h.Z)(a)}`],endIcon:["icon","endIcon",`iconSize${(0,h.Z)(a)}`]},p=(0,l.Z)(c,g,s);return(0,n.Z)({},s,p)})(T),G=E&&(0,Z.jsx)($,{className:O.startIcon,ownerState:T,children:E}),j=R&&(0,Z.jsx)(z,{className:O.endIcon,ownerState:T,children:R}),L=c||"";return(0,Z.jsxs)(k,(0,n.Z)({ownerState:T,className:(0,i.Z)(o.className,O.root,x,L),component:v,disabled:y,focusRipple:!W,focusVisibleClassName:(0,i.Z)(O.focusVisible,I),ref:t,type:P},A,{classes:O,children:[G,m,j]}))}))},718:function(e,t,o){o.d(t,{Z:function(){return T}});var r=o(3366),n=o(7462),a=o(7294),i=o(512),s=o(4867),l=o(4780),c=o(4142),p=o(5971);var d=o(6682);function u({props:e,name:t,defaultTheme:o,themeId:r}){let n=(0,d.Z)(o);r&&(n=n[r]||n);const a=function(e){const{theme:t,name:o,props:r}=e;return t&&t.components&&t.components[o]&&t.components[o].defaultProps?(0,p.Z)(t.components[o].defaultProps,r):r}({theme:n,name:t,props:e});return a}var m=o(4742),h=o(4953),f=o(7408),v=o(6523);const g=["ownerState"],x=["variants"],b=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function S(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const Z=(0,f.Z)(),w=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function y({defaultTheme:e,theme:t,themeId:o}){return r=t,0===Object.keys(r).length?e:t[o]||t;var r}function k(e){return e?(t,o)=>o[e]:null}function $(e,t){let{ownerState:o}=t,a=(0,r.Z)(t,g);const i="function"==typeof e?e((0,n.Z)({ownerState:o},a)):e;if(Array.isArray(i))return i.flatMap((e=>$(e,(0,n.Z)({ownerState:o},a))));if(i&&"object"==typeof i&&Array.isArray(i.variants)){const{variants:e=[]}=i;let t=(0,r.Z)(i,x);return e.forEach((e=>{let r=!0;"function"==typeof e.props?r=e.props((0,n.Z)({ownerState:o},a,o)):Object.keys(e.props).forEach((t=>{(null==o?void 0:o[t])!==e.props[t]&&a[t]!==e.props[t]&&(r=!1)})),r&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,n.Z)({ownerState:o},a,o)):e.style))})),t}return i}const z=function(e={}){const{themeId:t,defaultTheme:o=Z,rootShouldForwardProp:a=S,slotShouldForwardProp:i=S}=e,s=e=>(0,v.Z)((0,n.Z)({},e,{theme:y((0,n.Z)({},e,{defaultTheme:o,themeId:t}))}));return s.__mui_systemSx=!0,(e,l={})=>{(0,m.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:c,slot:p,skipVariantsResolver:d,skipSx:u,overridesResolver:f=k(w(p))}=l,v=(0,r.Z)(l,b),g=void 0!==d?d:p&&"Root"!==p&&"root"!==p||!1,x=u||!1;let Z=S;"Root"===p||"root"===p?Z=a:p?Z=i:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(Z=void 0);const z=(0,m.default)(e,(0,n.Z)({shouldForwardProp:Z,label:undefined},v)),C=e=>"function"==typeof e&&e.__emotion_real!==e||(0,h.P)(e)?r=>$(e,(0,n.Z)({},r,{theme:y({theme:r.theme,defaultTheme:o,themeId:t})})):e,W=(r,...a)=>{let i=C(r);const l=a?a.map(C):[];c&&f&&l.push((e=>{const r=y((0,n.Z)({},e,{defaultTheme:o,themeId:t}));if(!r.components||!r.components[c]||!r.components[c].styleOverrides)return null;const a=r.components[c].styleOverrides,i={};return Object.entries(a).forEach((([t,o])=>{i[t]=$(o,(0,n.Z)({},e,{theme:r}))})),f(e,i)})),c&&!g&&l.push((e=>{var r;const a=y((0,n.Z)({},e,{defaultTheme:o,themeId:t}));return $({variants:null==a||null==(r=a.components)||null==(r=r[c])?void 0:r.variants},(0,n.Z)({},e,{theme:a}))})),x||l.push(s);const p=l.length-a.length;if(Array.isArray(r)&&p>0){const e=new Array(p).fill("");i=[...r,...e],i.raw=[...r.raw,...e]}const d=z(i,...l);return e.muiName&&(d.muiName=e.muiName),d};return z.withConfig&&(W.withConfig=z.withConfig),W}}();var C=z,W=o(5893);const R=["className","component","disableGutters","fixed","maxWidth","classes"],I=(0,f.Z)(),M=C("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,c.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),B=e=>u({props:e,name:"MuiContainer",defaultTheme:I});var E=o(1220),P=o(948),N=o(8628);const A=function(e={}){const{createStyledComponent:t=M,useThemeProps:o=B,componentName:p="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,o)=>{const r=o,n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=a.forwardRef((function(e,t){const a=o(e),{className:u,component:m="div",disableGutters:h=!1,fixed:f=!1,maxWidth:v="lg"}=a,g=(0,r.Z)(a,R),x=(0,n.Z)({},a,{component:m,disableGutters:h,fixed:f,maxWidth:v}),b=((e,t)=>{const{classes:o,fixed:r,disableGutters:n,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,c.Z)(String(a))}`,r&&"fixed",n&&"disableGutters"]};return(0,l.Z)(i,(e=>(0,s.ZP)(t,e)),o)})(x,p);return(0,W.jsx)(d,(0,n.Z)({as:m,ownerState:x,className:(0,i.Z)(b.root,u),ref:t},g))}));return u}({createStyledComponent:(0,P.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,E.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,N.i)({props:e,name:"MuiContainer"})});var T=A},7182:function(e,t,o){o.d(t,{ZP:function(){return W}});var r=o(3366),n=o(7462),a=o(7294),i=o(512),s=o(5408),l=o(9707),c=o(4780),p=o(948),d=o(8628),u=o(6682),m=o(247),h=o(606);var f=a.createContext(),v=o(1588),g=o(4867);function x(e){return(0,g.ZP)("MuiGrid",e)}const b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var S=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...b.map((e=>`grid-xs-${e}`)),...b.map((e=>`grid-sm-${e}`)),...b.map((e=>`grid-md-${e}`)),...b.map((e=>`grid-lg-${e}`)),...b.map((e=>`grid-xl-${e}`))]),Z=o(5893);const w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function k({breakpoints:e,values:t}){let o="";Object.keys(t).forEach((e=>{""===o&&0!==t[e]&&(o=e)}));const r=Object.keys(e).sort(((t,o)=>e[t]-e[o]));return r.slice(0,r.indexOf(o))}const $=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:r,direction:n,item:a,spacing:i,wrap:s,zeroMinWidth:l,breakpoints:c}=o;let p=[];r&&(p=function(e,t,o={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[o[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const n=e[t];Number(n)>0&&r.push(o[`spacing-${t}-${String(n)}`])})),r}(i,c,t));const d=[];return c.forEach((e=>{const r=o[e];r&&d.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,a&&t.item,l&&t.zeroMinWidth,...p,"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...d]}})((({ownerState:e})=>(0,n.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const o=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},o,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${S.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:o,rowSpacing:r}=t;let n={};if(o&&0!==r){const t=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});let o;"object"==typeof t&&(o=k({breakpoints:e.breakpoints.values,values:t})),n=(0,s.k9)({theme:e},t,((t,r)=>{var n;const a=e.spacing(t);return"0px"!==a?{marginTop:`-${y(a)}`,[`& > .${S.item}`]:{paddingTop:y(a)}}:null!=(n=o)&&n.includes(r)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}}))}return n}),(function({theme:e,ownerState:t}){const{container:o,columnSpacing:r}=t;let n={};if(o&&0!==r){const t=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});let o;"object"==typeof t&&(o=k({breakpoints:e.breakpoints.values,values:t})),n=(0,s.k9)({theme:e},t,((t,r)=>{var n;const a=e.spacing(t);return"0px"!==a?{width:`calc(100% + ${y(a)})`,marginLeft:`-${y(a)}`,[`& > .${S.item}`]:{paddingLeft:y(a)}}:null!=(n=o)&&n.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}}))}return n}),(function({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce(((r,a)=>{let i={};if(t[a]&&(o=t[a]),!o)return r;if(!0===o)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===o)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),c="object"==typeof l?l[a]:l;if(null==c)return r;const p=Math.round(o/c*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const o=e.spacing(t.columnSpacing);if("0px"!==o){const e=`calc(${p} + ${y(o)})`;d={flexBasis:e,maxWidth:e}}}i=(0,n.Z)({flexBasis:p,flexGrow:0,maxWidth:p},d)}return 0===e.breakpoints.values[a]?Object.assign(r,i):r[e.breakpoints.up(a)]=i,r}),{})}));const z=e=>{const{classes:t,container:o,direction:r,item:n,spacing:a,wrap:i,zeroMinWidth:s,breakpoints:l}=e;let p=[];o&&(p=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const o=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;o.push(e)}})),o}(a,l));const d=[];l.forEach((t=>{const o=e[t];o&&d.push(`grid-${t}-${String(o)}`)}));const u={root:["root",o&&"container",n&&"item",s&&"zeroMinWidth",...p,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==i&&`wrap-xs-${String(i)}`,...d]};return(0,c.Z)(u,x,t)},C=a.forwardRef((function(e,t){const o=(0,d.i)({props:e,name:"MuiGrid"}),{breakpoints:s}=function(){const e=(0,u.Z)(m.Z);return e[h.Z]||e}(),c=(0,l.Z)(o),{className:p,columns:v,columnSpacing:g,component:x="div",container:b=!1,direction:S="row",item:y=!1,rowSpacing:k,spacing:C=0,wrap:W="wrap",zeroMinWidth:R=!1}=c,I=(0,r.Z)(c,w),M=k||C,B=g||C,E=a.useContext(f),P=b?v||12:E,N={},A=(0,n.Z)({},I);s.keys.forEach((e=>{null!=I[e]&&(N[e]=I[e],delete A[e])}));const T=(0,n.Z)({},c,{columns:P,container:b,direction:S,item:y,rowSpacing:M,columnSpacing:B,wrap:W,zeroMinWidth:R,spacing:C},N,{breakpoints:s.keys}),O=z(T);return(0,Z.jsx)(f.Provider,{value:P,children:(0,Z.jsx)($,(0,n.Z)({ownerState:T,className:(0,i.Z)(O.root,p),as:x,ref:t},A))})}));var W=C},8216:function(e,t,o){o.r(t),o.d(t,{default:function(){return M}});var r=o(7294),n=o(3366),a=o(7462),i=o(512),s=o(4780),l=o(948),c=o(8628),p=o(1220),d=o(4680),u=o(1588),m=o(4867);function h(e){return(0,m.ZP)("MuiAppBar",e)}(0,u.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var f=o(5893);const v=["className","color","enableColorOnDark","position"],g=(e,t)=>e?`${null==e?void 0:e.replace(")","")}, ${t})`:t,x=(0,l.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,p.Z)(o.position)}`],t[`color${(0,p.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!e.vars&&(0,a.Z)({},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,a.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,a.Z)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:g(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:g(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:g(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:g(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},!["inherit","transparent"].includes(t.color)&&{backgroundColor:"var(--AppBar-background)"},{color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}));var b=r.forwardRef((function(e,t){const o=(0,c.i)({props:e,name:"MuiAppBar"}),{className:r,color:l="primary",enableColorOnDark:d=!1,position:u="fixed"}=o,m=(0,n.Z)(o,v),g=(0,a.Z)({},o,{color:l,position:u,enableColorOnDark:d}),b=(e=>{const{color:t,position:o,classes:r}=e,n={root:["root",`color${(0,p.Z)(t)}`,`position${(0,p.Z)(o)}`]};return(0,s.Z)(n,h,r)})(g);return(0,f.jsx)(x,(0,a.Z)({square:!0,component:"header",ownerState:g,elevation:4,className:(0,i.Z)(b.root,r,"fixed"===u&&"mui-fixed"),ref:t},m))})),S=o(3906);function Z(e){return(0,m.ZP)("MuiToolbar",e)}(0,u.Z)("MuiToolbar",["root","gutters","regular","dense"]);const w=["className","component","disableGutters","variant"],y=(0,l.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar));var k=r.forwardRef((function(e,t){const o=(0,c.i)({props:e,name:"MuiToolbar"}),{className:r,component:l="div",disableGutters:p=!1,variant:d="regular"}=o,u=(0,n.Z)(o,w),m=(0,a.Z)({},o,{component:l,disableGutters:p,variant:d}),h=(e=>{const{classes:t,disableGutters:o,variant:r}=e,n={root:["root",!o&&"gutters",r]};return(0,s.Z)(n,Z,t)})(m);return(0,f.jsx)(y,(0,a.Z)({as:l,className:(0,i.Z)(h.root,r),ref:t,ownerState:m},u))})),$=o(2658),z=o(2574),C=o(718),W=o(7182),R=o(1079),I=o(4854);var M=()=>r.createElement(S.Z,{sx:{flexGrow:1,mt:5}},r.createElement(b,{position:"fixed",sx:{backgroundColor:"#6988A9"}},r.createElement(k,null,r.createElement(C.Z,{maxWidth:"lg"},r.createElement(W.ZP,{container:!0,alignItems:"center",justifyContent:"space-between"},r.createElement(W.ZP,{item:!0,xs:8,sm:9,md:9},r.createElement($.Z,{variant:"h6",sx:{fontWeight:700,ml:{xs:0,sm:10}}},r.createElement(R.Z,{href:(0,I.withPrefix)("/"),underline:"none",sx:{color:"white"}},"Oda's blog"))),r.createElement(W.ZP,{item:!0,xs:4,sm:3,md:3,container:!0,justifyContent:"flex-end"},r.createElement(z.Z,{color:"inherit",sx:{mr:{sm:30}}},r.createElement(R.Z,{href:"/about",underline:"none"},r.createElement($.Z,{sx:{color:"white"}},"About")))))))))}}]);
//# sourceMappingURL=83663f2d939d81efb98ed3e3f4cb52111d7b098e-ce453ef40d89f452b669.js.map