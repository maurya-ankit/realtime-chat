(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{194:function(e,t,n){"use strict";var r=n(4),a=n(0),c=n(177),i=n(32),o=n(50),l=n(117),s=n(31),u=n(41),d=n(6);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=Object(i.a)((function(e,t){var n=Object(o.b)(e),r=n.className,c=n.centerContent,i=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["className","centerContent"]),d=Object(l.b)("Container",e);return a.createElement(s.a.div,f({ref:t,className:Object(u.c)("chakra-container",r)},i,{__css:f({},d,c&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));d.a&&(m.displayName="Container");var b=n(195),g=n(210),j=n(118),p=n(229),h=n(218),O=n(45),v=n(77),x=n(3);t.a=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){v.a.get("chat/room/").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),n.length?Object(x.jsx)(c.a,{p:4,bg:"Highlight",borderRadius:"20",children:Object(x.jsx)(m,{maxW:"6xl",mt:2,children:Object(x.jsx)(b.a,{children:n.map((function(e){return Object(x.jsxs)(g.a,{align:"top",as:O.b,_hover:{backgroundColor:"blue.200"},bg:Object(j.d)("facebook.100","gray.700"),width:"100%",alignItems:"center",borderRadius:"20",p:3,m:3,to:"/".concat(e.name),children:[Object(x.jsx)(c.a,{color:"green.400",px:2,children:Object(x.jsx)(p.a,{src:"",name:e.name,size:"sm"})}),Object(x.jsx)(g.c,{align:"start",children:Object(x.jsx)(h.a,{fontWeight:300,children:e.name.replace(/_/g," ")})})]},e.id)}))})})}):Object(x.jsx)(x.Fragment,{})}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(32),a=n(6),c=n(157),i=n(0),o=n(162);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=Object(r.a)((function(e,t){var n,r,s=e.columns,u=e.spacingX,d=e.spacingY,f=e.spacing,m=e.minChildWidth,b=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),g=m?(r=m,Object(c.a)(r,(function(e){return Object(a.g)(e)?null:"repeat(auto-fit, minmax("+(t=e,(Object(a.h)(t)?t+"px":t)+", 1fr))");var t}))):(n=s,Object(c.a)(n,(function(e){return Object(a.g)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return i.createElement(o.a,l({ref:t,gap:f,columnGap:u,rowGap:d,templateColumns:g},b))}));a.a&&(s.displayName="SimpleGrid")},210:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return j}));var r=n(7),a=n(31),c=n(32),i=n(41),o=n(6),l=n(182),s=n(0),u=n(157),d="& > *:not(style) ~ *:not(style)";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e){return s.createElement(a.a.div,f({className:"chakra-stack__item"},e,{__css:f({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},b=Object(c.a)((function(e,t){var n=e.isInline,c=e.direction,o=e.align,b=e.justify,g=e.spacing,j=void 0===g?"0.5rem":g,p=e.wrap,h=e.children,O=e.divider,v=e.className,x=e.shouldWrapChildren,y=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),E=n?"row":null!=c?c:"column",_=s.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return Object(r.a)({flexDirection:n},d,Object(u.a)(n,(function(e){return a[e]})))}({direction:E,spacing:j})}),[E,j]),k=s.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Object(u.a)(n,(function(e){return r[e]}))}}({spacing:j,direction:E})}),[j,E]),C=!!O,N=!x&&!C,w=Object(l.a)(h),W=N?w:w.map((function(e,t){var n=t+1===w.length,r=x?s.createElement(m,{key:t},e):e;if(!C)return r;var a=n?null:s.cloneElement(O,{__css:k});return s.createElement(s.Fragment,{key:t},r,a)})),I=Object(i.c)("chakra-stack",v);return s.createElement(a.a.div,f({ref:t,display:"flex",alignItems:o,justifyContent:b,flexDirection:_.flexDirection,flexWrap:p,className:I,__css:C?{}:Object(r.a)({},d,_[d])},y),W)}));o.a&&(b.displayName="Stack");var g=Object(c.a)((function(e,t){return s.createElement(b,f({align:"center"},e,{direction:"row",ref:t}))}));o.a&&(g.displayName="HStack");var j=Object(c.a)((function(e,t){return s.createElement(b,f({align:"center"},e,{direction:"column",ref:t}))}));o.a&&(j.displayName="VStack")},217:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(177),c=n(162),i=n(176),o=n(194),l=n(12),s=n(3),u=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(8)]).then(n.bind(null,209))})),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,208))}));t.default=function(){return Object(s.jsx)(a.a,{textAlign:"center",fontSize:"xl",children:Object(s.jsx)(c.a,{minH:"100vh",pt:3,children:Object(s.jsxs)(c.a,{templateColumns:"repeat(5, 1fr)",gap:4,children:[Object(s.jsx)(c.b,{colSpan:1,display:["none","none","flex"],children:Object(s.jsx)(o.a,{})}),Object(s.jsx)(c.b,{colSpan:[5,5,4],children:Object(s.jsx)(r.Suspense,{fallback:Object(s.jsx)(i.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl",mx:"auto"}),children:Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/:id",children:Object(s.jsx)(u,{})}),Object(s.jsx)(l.b,{path:"/*",children:Object(s.jsx)(d,{})})]})})})]})})})}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(32),a=n(117),c=n(50),i=n(31),o=n(16),l=n(41),s=n(6),u=n(0);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=Object(r.a)((function(e,t){var n=Object(a.b)("Text",e),r=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(Object(c.b)(e),["className","align","decoration","casing"]),s=Object(o.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(i.a.p,d({ref:t,className:Object(l.c)("chakra-text",e.className)},s,r,{__css:n}))}));s.a&&(f.displayName="Text")},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(4),a=n(74),c=n(0);var i=n(32),o=n(82),l=n(31),s=n(117),u=n(50),d=n(41),f=n(6);function m(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=Object(i.a)((function(e,t){var n=b({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},Object(o.d)().badge);return c.createElement(l.a.div,b({ref:t},e,{className:Object(d.c)("chakra-avatar__badge",e.className),__css:n}))}));function j(e){var t=e.split(" "),n=Object(r.a)(t,2),a=n[0],c=n[1];return a&&c?""+a.charAt(0)+c.charAt(0):a.charAt(0)}f.a&&(g.displayName="AvatarBadge");var p=function(e){var t=e.name,n=e.getInitials,r=m(e,["name","getInitials"]),a=Object(o.d)();return c.createElement(l.a.div,b({role:"img","aria-label":t},r,{__css:a.label}),t?null==n?void 0:n(t):null)},h=function(e){return c.createElement(l.a.svg,b({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),c.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),c.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},O={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},v=Object(i.a)((function(e,t){var n=Object(s.a)("Avatar",e),r=Object(u.b)(e),a=r.src,i=r.name,f=r.showBorder,g=r.borderRadius,p=void 0===g?"full":g,v=r.onError,y=r.getInitials,E=void 0===y?j:y,_=r.icon,k=void 0===_?c.createElement(h,null):_,C=r.iconLabel,N=void 0===C?" avatar":C,w=r.loading,W=r.children,I=r.borderColor,S=m(r,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor"]),B=b({borderRadius:p,borderWidth:f?"2px":void 0},O,n.container);return I&&(B.borderColor=I),c.createElement(l.a.span,b({ref:t},S,{className:Object(d.c)("chakra-avatar",e.className),__css:B}),c.createElement(o.b,{value:n},c.createElement(x,{src:a,loading:w,onError:v,getInitials:E,name:i,borderRadius:p,icon:k,iconLabel:N}),W))}));f.a&&(v.displayName="Avatar");var x=function(e){var t=e.src,n=e.onError,i=e.getInitials,o=e.name,s=e.borderRadius,u=e.loading,d=e.iconLabel,f=e.icon,m=void 0===f?c.createElement(h,null):f,b=function(e){var t=e.src,n=e.srcSet,i=e.onLoad,o=e.onError,l=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,d=Object(c.useState)("pending"),f=Object(r.a)(d,2),m=f[0],b=f[1];Object(c.useEffect)((function(){b(t?"loading":"pending")}),[t]);var g=Object(c.useRef)(),j=Object(c.useCallback)((function(){if(t){p();var e=new Image;e.src=t,l&&(e.crossOrigin=l),n&&(e.srcset=n),s&&(e.sizes=s),e.onload=function(e){p(),b("loaded"),null==i||i(e)},e.onerror=function(e){p(),b("failed"),null==o||o(e)},g.current=e}}),[t,l,n,s,i,o]),p=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return Object(a.a)((function(){if(!u)return"loading"===m&&j(),function(){p()}}),[m,j,u]),u?"loaded":m}({src:t,onError:n});return!t||!("loaded"===b)?o?c.createElement(p,{className:"chakra-avatar__initials",getInitials:i,name:o}):c.cloneElement(m,{role:"img","aria-label":d}):c.createElement(l.a.img,{src:t,alt:o,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};f.a&&(x.displayName="AvatarImage")}}]);
//# sourceMappingURL=5.9a9c2832.chunk.js.map