(this.webpackJsonpmypages=this.webpackJsonpmypages||[]).push([[11],{151:function(e,t,n){"use strict";function r(e){return"dark"===e.palette.type?"#252525":"#0F1C24"}function a(e){return"dark"===e.palette.type?"#252525":"#0F1C24"}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(4),a=(n(0),n(46)),c=n(920),o=n(38),i=n(15),l=n(127),u=n(6),s=n(13),p=n(923),f=n(53),d=n.n(f),g=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.grey[700],height:e.spacing(2),color:e.palette.primary.contrastText,fontWeight:e.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:e.palette.warning},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(s.b)(e.palette.grey[300],.12)},marginTop:"5px"}}}))(p.a);function m(e){var t=e.links,n=void 0===t?[]:t,u=e.current,s=e.pageNumber,p=Object(i.a)();return Object(r.jsx)(l.a,{theme:p,children:Object(r.jsxs)(c.a,{"aria-label":"breadcrumb",style:{paddingTop:p.spacing(2),paddingBottom:p.spacing(1)},children:[n.map((function(e,t){return Object(r.jsx)(g,{component:o.b,href:e.link,label:e.title,icon:0===t?Object(r.jsx)(d.a,{fontSize:"small",style:{color:"dark"===p.palette.type?'"#999"':"#fff",padding:p.spacing(.2)}}):null,to:{pathname:e.link,pageNumber:s,category:e.category},style:{padding:p.spacing(1.4),cursor:"pointer",color:"dark"===p.palette.type?"#ccc":"#fff",backgroundColor:"dark"===p.palette.type?"#555":p.palette.primary.dark}},t)})),Object(r.jsx)(g,{component:a.a,label:u,style:{padding:p.spacing(1.4),color:"dark"===p.palette.type?"#ccc":"#fff",backgroundColor:"dark"===p.palette.type?"#555":p.palette.primary.dark}}),"-"]})})}},160:function(e,t,n){"use strict";var r=n(4),a=(n(0),n(46)),c=n(903),o=n(151),i=n(15);t.a=function(){var e=Object(i.a)();return Object(r.jsx)("footer",{className:"",style:{backgroundColor:Object(o.a)(e),marginLeft:"2px",bottom:0,padding:"10px"},children:Object(r.jsxs)(c.a,{maxWidth:"lg",style:{height:e.spacing(7)},children:[Object(r.jsx)(a.a,{variant:"subtitle1",align:"center",color:"textPrimary",component:"p",children:"Copyright \xa9 2020 - 2021"}),Object(r.jsx)(a.a,{component:"p",color:"textPrimary",align:"center",variant:"subtitle1",children:"All rights reserved"})]})})}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(4),a=(n(0),n(15)),c=n(919),o=n(910),i=n(911);function l(e){var t=Object(a.a)(),n=e.children;return Object(r.jsx)(c.a,{language:function(){switch(e.className){case"lang-js":return"javascript";case"lang-php":return"php";case"lang-java":return"java";default:return"c"}}(),style:"dark"===t.palette.type?o.a:i.a,children:n})}},922:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return qe}));var r=n(39),a=n(17),c=n(4),o=n(0),i=n.n(o),l=n(9),u=n(903),s=n(156);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=/[\'\"]/,d={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},g={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,y=/mailto:/i,k=/\n{2,}$/,b=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,v=/^ *> ?/gm,x=/^ {2,}\n/,j=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,O=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,w=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,H=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,S=/^(?:\n *)*\n/,C=/\r\n?/g,I=/^\[\^([^\]]+)](:.*)\n/,A=/^\[\^([^\]]+)]/,M=/\f/g,E=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,L=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,G=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$=/&([a-z]+);/g,N=/^<!--.*?-->/,z=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,W=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,X=/^\{.*\}$/,_=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,B=/^<([^ >]+@[^ >]+)>/,R=/^<([^ >]+:\/[^ >]+)>/,P=/ *\n+$/,U=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,q=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,J=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,V=/^\[([^\]]*)\] ?\[([^\]]*)\]/,K=/(\[|\])/g,Q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Y=/\t/g,ee=/^ *\| */,te=/(^ *\||\| *$)/g,ne=/ *$/,re=/^ *:-+: *$/,ae=/^ *:-+ *$/,ce=/^ *-+: *$/,oe=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ie=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,le=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ue=/^\\([^0-9A-Za-z\s])/,se=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,pe=/(^\n+|\n+$|\s+$)/g,fe=/^([ \t]*)/,de=/\\([^0-9A-Z\s])/gi,ge=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),me=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),he=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),ye="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ke=new RegExp("^\\[("+ye+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),be=new RegExp("^!\\[("+ye+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ve=[b,w,O,T,L,G,N,W,me,he,F,Z];function xe(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function je(e){return ce.test(e)?"right":re.test(e)?"center":ae.test(e)?"left":null}function Oe(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var c=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&c.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(ne,"")),c[c.length-1].push(e))})),c}function we(e,t,n){n.inline=!0;var r=Oe(e[1],t,n),a=e[2].replace(te,"").split("|").map(je),c=function(e,t,n){return e.trim().split("\n").map((function(e){return Oe(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:c,header:r,type:"table"}}function He(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Se(e){return function(t,n){return n.inline?e.exec(t):null}}function Ce(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Ie(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ae(e){return function(t){return e.exec(t)}}function Me(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Ee(e){return e.replace(de,"$1")}function Te(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function Le(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function Ge(e,t,n){return n.inline=!1,e(t+"\n\n",n)}var $e,Ne,ze=function(e,t,n){return{content:Te(t,e[1],n)}};function We(){return{}}function Xe(){return null}function _e(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Be(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Re(e,t){var n=Be(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Be(t,e+".component",e):e}(Ne=$e||($e={}))[Ne.MAX=0]="MAX",Ne[Ne.HIGH=1]="HIGH",Ne[Ne.MED=2]="MED",Ne[Ne.LOW=3]="LOW",Ne[Ne.MIN=4]="MIN";var Pe=function(e){var t=e.children,n=e.options,r=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t.indexOf(n=c[r])>=0||(a[n]=e[n]);return a}(e,["children","options"]);return i.a.cloneElement(function(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||xe,t.namedCodesToUnicode=t.namedCodesToUnicode?p({},g,t.namedCodesToUnicode):g;var n=t.createElement||i.a.createElement;function r(e,r){var a=Be(t.overrides,e+".props",{});return n.apply(void 0,[Re(e,t.overrides),p({},r,a,{className:_e(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function a(e){var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===Q.test(e));var a=re(ne(n?e:e.replace(pe,"")+"\n\n",{inline:n}));if(null===t.wrapper)return a;var c,o=t.wrapper||(n?"span":"div");if(a.length>1||t.forceWrapper)c=a;else{if(1===a.length)return"string"==typeof(c=a[0])?r("span",{key:"outer"},c):c;c=null}return i.a.createElement(o,{key:"outer"},c)}function c(e){var t=e.match(h);return t?t.reduce((function(e,t,n){var r,c=t.indexOf("=");if(-1!==c){var o=(r=t.slice(0,c),-1!==r.indexOf("-")&&null===r.match(z)&&(r=r.replace(D,(function(e,t){return t.toUpperCase()}))),r).trim(),l=function(e){return e?(f.test(e.charAt(0))&&(e=e.substr(1)),f.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(t.slice(c+1).trim()),u=d[o]||o,s=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Me(t):(t.match(X)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(o,l);"string"==typeof s&&(G.test(s)||W.test(s))&&(e[u]=i.a.cloneElement(a(s.trim()),{key:n}))}else"style"!==t&&(e[d[t]||t]=!0);return e}),{}):void 0}var o=[],l={},u={blockQuote:{match:Ie(b),order:$e.HIGH,parse:function(e,t,n){return{content:t(e[0].replace(v,""),n)}},react:function(e,t,n){return r("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:Ae(x),order:$e.HIGH,parse:We,react:function(e,t,n){return r("br",{key:n.key})}},breakThematic:{match:Ie(j),order:$e.HIGH,parse:We,react:function(e,t,n){return r("hr",{key:n.key})}},codeBlock:{match:Ie(w),order:$e.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return r("pre",{key:n.key},r("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ie(O),order:$e.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Ce(H),order:$e.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,n){return r("code",{key:n.key},e.content)}},footnote:{match:Ie(I),order:$e.MAX,parse:function(e){return o.push({footnote:e[2],identifier:e[1]}),{}},react:Xe},footnoteReference:{match:Se(A),order:$e.HIGH,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,n){return r("a",{key:n.key,href:Me(e.target)},r("sup",{key:n.key},e.content))}},gfmTask:{match:Se(E),order:$e.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return r("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ie(T),order:$e.HIGH,parse:function(e,n,r){return{content:Te(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return e.tag="h"+e.level,r(e.tag,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:Ie(L),order:$e.MAX,parse:function(e,t,n){return{content:Te(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Ae(N),order:$e.HIGH,parse:function(){return{}},react:Xe},image:{match:Ce(be),order:$e.HIGH,parse:function(e){return{alt:e[1],target:Ee(e[2]),title:e[3]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Me(e.target)})}},link:{match:Se(ke),order:$e.LOW,parse:function(e,t,n){return{content:Le(t,e[1],n),target:Ee(e[2]),title:e[3]}},react:function(e,t,n){return r("a",{key:n.key,href:Me(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:Se(R),order:$e.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Se(_),order:$e.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Se(B),order:$e.MAX,parse:function(e){var t=e[1],n=e[1];return y.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=U.exec(n);return!r||!t._list&&t.inline?null:he.exec(e=r[1]+e)},order:$e.HIGH,parse:function(e,t,n){var r=e[2],a=r.length>1,c=a?+r:void 0,o=e[0].replace(k,"\n").match(me),i=!1;return{items:o.map((function(e,r){var a=ge.exec(e)[0].length,c=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(c,"").replace(ge,""),u=r===o.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var p,f=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,p=l.replace(P,"\n\n")):(n.inline=!0,p=l.replace(P,""));var g=t(p,n);return n.inline=f,n._list=d,g})),ordered:a,start:c}},react:function(e,t,n){return r(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map((function(e,a){return r("li",{key:a},t(e,n))})))}},newlineCoalescer:{match:Ie(S),order:$e.LOW,parse:We,react:function(){return"\n"}},paragraph:{match:Ie(Z),order:$e.LOW,parse:ze,react:function(e,t,n){return r("p",{key:n.key},t(e.content,n))}},ref:{match:Se(q),order:$e.MAX,parse:function(e){return l[e[1]]={target:e[2],title:e[4]},{}},react:Xe},refImage:{match:Ce(J),order:$e.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt,src:Me(l[e.ref].target),title:l[e.ref].title})}},refLink:{match:Se(V),order:$e.MAX,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(K,"\\$1"),n),ref:e[2]}},react:function(e,t,n){return l[e.ref]?r("a",{key:n.key,href:Me(l[e.ref].target),title:l[e.ref].title},t(e.content,n)):r("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:Ie(F),order:$e.HIGH,parse:we,react:function(e,t,n){return r("table",{key:n.key},r("thead",null,r("tr",null,e.header.map((function(a,c){return r("th",{key:c,style:He(e,c)},t(a,n))})))),r("tbody",null,e.cells.map((function(a,c){return r("tr",{key:c},a.map((function(a,c){return r("td",{key:c,style:He(e,c)},t(a,n))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?ee.exec(e):null},order:$e.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ae(se),order:$e.MIN,parse:function(e){return{content:e[0].replace($,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Ce(oe),order:$e.MED,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return r("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:Ce(ie),order:$e.LOW,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return r("em",{key:n.key},t(e.content,n))}},textEscaped:{match:Ce(ue),order:$e.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Ce(le),order:$e.LOW,parse:ze,react:function(e,t,n){return r("del",{key:n.key},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(u.htmlBlock={match:Ae(G),order:$e.HIGH,parse:function(e,t,n){var r,a=e[3].match(fe),o=new RegExp("^"+a[1],"gm"),i=e[3].replace(o,""),l=(r=i,ve.some((function(e){return e.test(r)}))?Ge:Te),u=e[1].toLowerCase(),s=-1!==m.indexOf(u);return{attrs:c(e[2]),content:s?e[3]:l(t,i,n),noInnerParse:s,tag:s?u:e[1]}},react:function(e,t,n){return r(e.tag,Object.assign({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},u.htmlSelfClosing={match:Ae(W),order:$e.HIGH,parse:function(e){return{attrs:c(e[2]||""),tag:e[1]}},react:function(e,t,n){return r(e.tag,Object.assign({},e.attrs,{key:n.key}))}});var s,te,ne=function(e){var t=Object.keys(e);function n(r,a){for(var c=[],o="";r;)for(var i=0;i<t.length;){var l=t[i],u=e[l],s=u.match(r,a,o);if(s){var p=s[0];r=r.substring(p.length);var f=u.parse(s,n,a);null==f.type&&(f.type=l),c.push(f),o=p;break}i++}return c}return t.sort((function(t,n){var r=e[t].order,a=e[n].order;return r!==a?r-a:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(C,"\n").replace(M,"").replace(Y,"    ")}(e),t)}}(u),re=(te=u,s=function(e,t,n){return te[e.type].react(e,t,n)},function e(t,n){if(void 0===n&&(n={}),Array.isArray(t)){for(var r=n.key,a=[],c=!1,o=0;o<t.length;o++){n.key=o;var i=e(t[o],n),l="string"==typeof i;l&&c?a[a.length-1]+=i:a.push(i),c=l}return n.key=r,a}return s(t,e,n)}),ae=a(e.replace(/<!--[\s\S]*?(?:-->)/g,""));return o.length&&ae.props.children.push(r("footer",{key:"footer"},o.map((function(e){return r("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,re(ne(e.footnote,{inline:!0})))})))),ae}(t,n),r)},Ue=n(194),De=n(160),Fe=n(126),Ze=Object(Fe.a)((function(e){var t;return{root:{width:300},container:(t={display:"flex",flexDirection:"column"},Object(a.a)(t,e.breakpoints.between("xs","md"),{minHeight:"calc(100vh - 131px)"}),Object(a.a)(t,e.breakpoints.up("md"),{minHeight:"calc(100vh - 225px)"}),Object(a.a)(t,"paddingBottom",e.spacing(8)),t)}}));function qe(e){var t=Ze(),a=Object(o.useState)(!1),p=Object(r.a)(a,2),f=p[0],d=p[1],g=Object(l.h)(),m=g.category,h=g.post,y=g.name,k=g.file,b=Object(o.useState)(""),v=Object(r.a)(b,2),x=v[0],j=v[1],O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"80%",n=e.match(/(\d+)/);return n?n[0]+"%":t};return Object(o.useState)((function(){window.scrollTo(0,0),fetch("/static/md/".concat(m,"/").concat(h,"/").concat(k,".md")).then((function(e){return e.blob()})).then((function(e){return e&&e.type&&e.type.includes("text/markdown")?e.text():""})).then((function(e){return j(e)}))}),[]),Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)("img",{src:"/static/md/".concat(m,"/").concat(h,"/post-header-1.jpg"),alt:"header",onError:function(e){f?(n.e(16).then(n.bind(null,914)),e.target.src="/static/img/image_not_found.jpg"):(d(!0),e.target.src="/static/md/".concat(m)+"/post-header1920x200.".concat("jpg"))},style:{width:"100%",height:"150px",backgroundSize:"cover",objectFit:"cover"}}),Object(c.jsxs)(u.a,{maxWidth:"md",className:t.container,children:[Object(c.jsx)(s.a,{links:[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",link:"/",category:""},{title:m,link:"/category/".concat(m),category:m}],current:y}),Object(c.jsx)("main",{children:Object(c.jsx)(Pe,{children:x,options:{overrides:{code:{component:Ue.a},img:{component:function(e){return Object(c.jsx)("img",{alt:e.alt,className:e.className,src:e.src,title:e.title,style:{width:O(e.alt),height:"auto",display:"block",margin:"0 auto"}})}}}}})})]}),Object(c.jsx)(De.a,{})]})}}}]);
//# sourceMappingURL=11.ed29104f.chunk.js.map