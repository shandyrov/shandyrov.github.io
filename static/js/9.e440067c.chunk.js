(this.webpackJsonpmypages=this.webpackJsonpmypages||[]).push([[9],{151:function(t,e,n){"use strict";function r(t){return"dark"===t.palette.type?"#252525":"#0F1C24"}function a(t){return"dark"===t.palette.type?"#252525":"#0F1C24"}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}))},156:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(4),a=(n(0),n(46)),c=n(920),i=n(38),o=n(15),s=n(127),l=n(6),u=n(13),d=n(923),p=n(53),b=n.n(p),h=Object(l.a)((function(t){return{root:{backgroundColor:t.palette.grey[700],height:t.spacing(2),color:t.palette.primary.contrastText,fontWeight:t.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:t.palette.warning},"&:active":{boxShadow:t.shadows[1],backgroundColor:Object(u.b)(t.palette.grey[300],.12)},marginTop:"5px"}}}))(d.a);function j(t){var e=t.links,n=void 0===e?[]:e,l=t.current,u=t.pageNumber,d=Object(o.a)();return Object(r.jsx)(s.a,{theme:d,children:Object(r.jsxs)(c.a,{"aria-label":"breadcrumb",style:{paddingTop:d.spacing(2),paddingBottom:d.spacing(1)},children:[n.map((function(t,e){return Object(r.jsx)(h,{component:i.b,href:t.link,label:t.title,icon:0===e?Object(r.jsx)(b.a,{fontSize:"small",style:{color:"dark"===d.palette.type?'"#999"':"#fff",padding:d.spacing(.2)}}):null,to:{pathname:t.link,pageNumber:u,category:t.category},style:{padding:d.spacing(1.4),cursor:"pointer",color:"dark"===d.palette.type?"#ccc":"#fff",backgroundColor:"dark"===d.palette.type?"#555":d.palette.primary.dark}},e)})),Object(r.jsx)(h,{component:a.a,label:l,style:{padding:d.spacing(1.4),color:"dark"===d.palette.type?"#ccc":"#fff",backgroundColor:"dark"===d.palette.type?"#555":d.palette.primary.dark}}),"-"]})})}},192:function(t,e,n){"use strict";var r=n(26);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(0)),c=(0,r(n(27)).default)(a.default.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");e.default=c},193:function(t,e,n){"use strict";var r=n(26);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(0)),c=(0,r(n(27)).default)(a.default.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");e.default=c},497:function(t,e,n){"use strict";var r=n(1),a=n(2),c=n(0),i=(n(3),n(5)),o=n(6),s=n(71),l=c.forwardRef((function(t,e){var n=t.children,o=t.classes,l=t.className,u=t.focusVisibleClassName,d=Object(a.a)(t,["children","classes","className","focusVisibleClassName"]);return c.createElement(s.a,Object(r.a)({className:Object(i.a)(o.root,l),focusVisibleClassName:Object(i.a)(u,o.focusVisible),ref:e},d),n,c.createElement("span",{className:o.focusHighlight}))}));e.a=Object(o.a)((function(t){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:t.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},917:function(t,e,n){"use strict";n.r(e);var r=n(161),a=n.n(r);function c(t,e,n,r,a,c,i){try{var o=t[c](i),s=o.value}catch(l){return void n(l)}o.done?e(s):Promise.resolve(s).then(r,a)}var i=n(39),o=n(17),s=n(4),l=n(0),u=n.n(l),d=n(126),p=n(904),b=n(497),h=n(906),j=n(905),f=n(46),g=n(38),m=Object(d.a)({root:{maxWidth:345,border:"1px solid #333",borderRadius:0},link:{textDecoration:"none"},media:{height:140}});function x(t){var e=m(),n=t.gistId,r=(t.title,t.category,t.description),a=t.content,c=t.image,i=t.pageNumber;return Object(s.jsx)(p.a,{className:e.root,children:Object(s.jsx)(g.b,{to:{pathname:"/gists/".concat(n),title:"",description:r,content:a,pageNumber:i,gistId:n},children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(j.a,{className:e.media,image:c,title:r}),Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{style:{textDecoration:"none"},variant:"body1",color:"textPrimary",component:"p",title:r,children:r.length>30?r.slice(0,30)+"...":r.slice(0,30)})})]})})})}var O=n(907),y=n(903),v=n(156),k=n(908),w=n(916),C=n(192),N=n.n(C),E=n(193),A=n.n(E),S=n(132),H=n(141),I=n(151),L=n(15);var V=function(){var t=Object(L.a)();return Object(s.jsx)("footer",{className:"",style:{backgroundColor:Object(I.a)(t),marginLeft:"2px"},children:Object(s.jsxs)(y.a,{maxWidth:"lg",children:[Object(s.jsx)(f.a,{variant:"h6",align:"center",gutterBottom:!0,children:"shandyrov.github.io"}),Object(s.jsx)(f.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Copyright \xa9, 2020-2021. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."})]})})},W=n.p+"static/img/bash640x425.jpg",B=n.p+"static/img/7.png",M=n(169),P=n.n(M),R=Object(d.a)((function(t){var e;return{root:{width:300},container:(e={display:"flex",flexDirection:"column"},Object(o.a)(e,t.breakpoints.between("xs","md"),{minHeight:"calc(100vh - 131px)"}),Object(o.a)(e,t.breakpoints.up("md"),{minHeight:"calc(100vh - 225px)"}),e)}}));e.default=function(){var t=R(),e=Object(L.a)(),n=Object(l.useState)([]),r=Object(i.a)(n,2),o=r[0],d=r[1],p=Object(l.useState)(1),b=Object(i.a)(p,2),h=b[0],j=b[1];Object(l.useEffect)((function(){document.title="\u0413\u0438\u0441\u0442\u044b",o instanceof Array&&0===o.length&&f().then((function(t){return d(t)}))}),[]),Object(l.useEffect)((function(){h>=1&&f().then((function(t){return d(t)}))}),[h]);var f=function(){var t,e=(t=a.a.mark((function t(){var e,n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.github.com/users/shandyrov/gists?page=".concat(h,"&per_page=9"));case 3:if(e=t.sent,(n=e.headers.get("content-type"))&&n.includes("application/json")){t.next=7;break}throw new TypeError("Error: Content type is not  JSON!");case 7:return t.next=9,e.json();case 9:return r=t.sent,t.abrupt("return",r);case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){c(i,r,a,o,s,"next",t)}function s(t){c(i,r,a,o,s,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),g=function(){return null!==o&&o instanceof Array&&o.length>0?o.map((function(t,e){return m(e,t)})):C()},m=function(t,e){var n=E(e.files,e.description);return Object(s.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(s.jsx)(x,{gistId:e.id,image:n,category:"gists",description:e.description,content:e.files.content,pageNumber:h})},e.id)},C=function(){for(var t=[],e=0;e<9;e++)t[e]=Object(s.jsx)(O.a,{item:!0,xs:12,sm:4,style:{maxWidth:345},children:Object(s.jsxs)(w.a,{style:{width:"100%"},marginRight:.5,my:1,children:[Object(s.jsx)(k.a,{variant:"rect",style:{width:"100%"},height:170}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(k.a,{}),Object(s.jsx)(k.a,{width:"60%"})]})]})},e);return t},E=function(t,e){for(var n=0,r=Object.entries(t);n<r.length;n++){var a=Object(i.a)(r[n],2);a[0];switch(a[1].language){case"Shell":case"Text":return W;default:return B}}};return Object(s.jsxs)(u.a.Fragment,{children:[Object(s.jsx)(H.a,{only:["xs","sm"],children:Object(s.jsx)(P.a,{height:150,style:{backgroundColor:Object(I.b)(e)}})}),Object(s.jsxs)(y.a,{maxWidth:"md",className:t.container,children:[Object(s.jsx)(v.a,{links:[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",link:"/"}],current:"\u0413\u0438\u0441\u0442\u044b"}),Object(s.jsx)("br",{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(O.a,{container:!0,spacing:2,style:{marginBottom:"10px"},children:null!==o?g():C()}),Object(s.jsx)(O.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{paddingBottom:"20px"},children:Object(s.jsxs)(O.a,{item:!0,sm:12,children:[Object(s.jsx)(S.a,{onClick:function(t){return j((function(t){return t-1}))},disabled:null===o||void 0===o||0===o.length||1===h,children:Object(s.jsx)(N.a,{})}),h,Object(s.jsx)(S.a,{onClick:function(t){return j((function(t){return t+1}))},disabled:o&&0===o.length||o&&o.length<9,children:Object(s.jsx)(A.a,{})})]})})]})]}),Object(s.jsx)(V,{})]})}}}]);
//# sourceMappingURL=9.e440067c.chunk.js.map