(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{209:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a(21),s=a(4),r=a(210),i=a(178),o=a(116),l=a(177),d=a(179),j=a(180),b=a(218),u=a(222),O=a(229),m=a(186),h=a(31),g=a(224),x=a(230),f=a(225),p=a(0),v=a(12),S=a(45),y=a(198),C=a.n(y),w=a(118),N=a(206),z=a.n(N),I=a(51),k=a(3),E=function(e){var t,a,c,n,s,i,o=Object(I.c)((function(e){return e.user})).user;return Object(k.jsx)("div",{children:Object(k.jsx)(r.b,{direction:"row",spacing:"8",my:2,alignItems:"center",justifyContent:(null===(t=e.data)||void 0===t?void 0:t.user)===(null===o||void 0===o?void 0:o.username)?"flex-end":"flex-start",mx:10,children:(null===(a=e.data)||void 0===a?void 0:a.user)===(null===o||void 0===o?void 0:o.username)?Object(k.jsxs)(r.b,{direction:"row",bg:Object(w.d)("linkedin.200","facebook.600"),py:"3",px:6,borderRadius:"30",maxWidth:"400",alignItems:"flex-end",spacing:4,children:[Object(k.jsxs)(r.b,{children:[Object(k.jsx)(b.a,{align:"end",fontSize:"lg",children:e.data.message}),Object(k.jsx)(b.a,{color:"gray.500",fontSize:"sm",align:"end",children:Object(k.jsx)(z.a,{fromNow:!0,children:e.data.utc_time})})]}),Object(k.jsxs)(r.b,{align:"center",children:[Object(k.jsx)(O.a,{src:"",name:null===(c=e.data)||void 0===c?void 0:c.user,size:"sm",bg:"blue.100"}),Object(k.jsx)(b.a,{color:"gray.500",fontSize:"sm",align:"start",children:null===(n=e.data)||void 0===n?void 0:n.user})]})]}):Object(k.jsxs)(r.b,{direction:"row",spacing:4,bg:Object(w.d)("facebook.100","gray.600"),py:"3",px:6,borderRadius:"30",maxWidth:"400",alignItems:"flex-end",children:[Object(k.jsxs)(r.b,{align:"center",children:[Object(k.jsx)(O.a,{src:"",name:null===(s=e.data)||void 0===s?void 0:s.user,size:"sm",bg:"blue.100"}),Object(k.jsx)(b.a,{color:"gray.500",fontSize:"sm",align:"start",children:null===(i=e.data)||void 0===i?void 0:i.user})]}),Object(k.jsxs)(r.b,{children:[Object(k.jsx)(b.a,{align:"start",fontSize:"lg",children:e.data.message}),Object(k.jsx)(b.a,{color:"gray.500",fontSize:"sm",align:"start",children:Object(k.jsx)(z.a,{fromNow:!0,children:e.data.utc_time})})]})]})})})},J=a(221),R=a(223),U=a(227),T=a(77),_=a(196),A=a(195),D=a(156),F=function(e){var t=Object(U.a)(),a=Object(v.h)().id,c=Object(p.useState)(""),n=Object(s.a)(c,2),r=n[0],d=n[1];return Object(k.jsxs)(l.a,{as:"form",mb:6,rounded:"lg",shadow:"xl",onSubmit:function(e){e.preventDefault(),T.a.post("chat/membership/",{person:r,room:a}).then((function(e){t({title:"Added ".concat(r," to room"),status:"success",duration:1e3,isClosable:!0}),d("")})).catch((function(e){t({title:"Unable to ".concat(r," to room"),description:"Either username is wrong or person is already in room",status:"error",duration:1e3,isClosable:!0})}))},children:[Object(k.jsx)(_.a,{pb:0,color:Object(w.d)("gray.700","gray.600"),children:Object(k.jsx)("p",{pt:2,children:"Login"})}),Object(k.jsxs)(A.a,{columns:1,px:6,py:4,spacing:4,borderBottom:"solid 1px",borderColor:Object(w.d)("gray.200","gray.700"),children:[Object(k.jsxs)(i.a,{children:[Object(k.jsx)(D.a,{children:"Username"}),Object(k.jsx)(x.a,{mt:0,type:"text",placeholder:"Username",required:!0,value:r,onChange:function(e){return d(e.target.value)}})]}),Object(k.jsx)(o.a,{w:"full",bg:"blue.200",py:2,type:"submit",children:"Add to room"})]})]})};t.default=function(){var e,t=Object(v.h)().id,a=Object(I.c)((function(e){return e.user})).user,w=Object(U.a)(),N="ws://127.0.0.1:8000/ws/chat/".concat(t,"/?token=").concat(JSON.parse(localStorage.getItem("user")).token),z=Object(p.useState)(N),_=Object(s.a)(z,2),A=_[0],D=_[1],M=Object(p.useState)([]),G=Object(s.a)(M,2),L=G[0],W=G[1],P=Object(p.useState)({}),Y=Object(s.a)(P,2),q=Y[0],B=Y[1],H=C()(A),K=H.sendMessage,Q=H.lastMessage,V=H.readyState;Object(p.useEffect)((function(){D("ws://127.0.0.1:8000/ws/chat/".concat(t,"/?token=").concat(JSON.parse(localStorage.getItem("user")).token)),T.a.get("chat/messages/?room=".concat(t)).then((function(e){W((function(t){return[].concat(Object(n.a)(e.data),Object(n.a)(t))}))})).catch((function(e){return console.log(e)})),W([]),document.title="".concat(t).toUpperCase()}),[t]),Object(p.useEffect)((function(){Q&&(W((function(e){return e.concat(JSON.parse(Q.data))})),JSON.parse(Q.data).user===a.username?w({title:"message sent",status:"success",duration:1e3,isClosable:!0}):w({title:"message from ".concat(JSON.parse(Q.data).user),description:"".concat(JSON.parse(Q.data).message),status:"info",duration:2e3,isClosable:!0}))}),[Q]),Object(p.useEffect)((function(){T.a.get("chat/room/".concat(t)).then((function(e){B(e.data)})).catch((function(){}))}),[t]);var X=Object(p.useCallback)((function(e){e.preventDefault(),K(JSON.stringify({message:e.target.message.value})),e.target.message.value=""}),[K]),Z=(e={},Object(c.a)(e,y.ReadyState.CONNECTING,"Connecting"),Object(c.a)(e,y.ReadyState.OPEN,"Open"),Object(c.a)(e,y.ReadyState.CLOSING,"Closing"),Object(c.a)(e,y.ReadyState.CLOSED,"Closed"),Object(c.a)(e,y.ReadyState.UNINSTANTIATED,"Uninstantiated"),e)[V];return Object(k.jsxs)(r.b,{direction:"column",mt:1,children:["Open"===Z?Object(k.jsxs)(k.Fragment,{children:[" ",Object(k.jsxs)(i.a,{bg:"Highlight",p:5,borderRadius:"20",children:[Object(k.jsx)(o.a,{leftIcon:Object(k.jsx)(J.a,{}),as:S.b,to:"/"}),Object(k.jsx)(l.a,{p:"2",ml:[1,2,4],children:Object(k.jsx)(d.a,{size:"md",children:t.replace(/_/g," ")})}),Object(k.jsx)(j.a,{}),Object(k.jsxs)(r.b,{direction:"row",mr:4,display:{base:"none",lg:"flex"},children:[Object(k.jsx)(b.a,{children:q.total_members&&Object(k.jsx)(k.Fragment,{children:"Members:".concat(q.total_members," ")})}),Object(k.jsx)(b.a,{pr:4,children:q.public&&Object(k.jsxs)(k.Fragment,{children:[" Group Type: ",q.public?"Public":"private"]})}),Object(k.jsxs)(u.a,{size:"lg",colorScheme:"Open"===Z?"green":"red",borderRadius:"full",children:[Object(k.jsx)(O.a,{bg:"Open"===Z?"green":"red",size:"xs",name:"o",ml:-1,mr:2}),Object(k.jsx)(u.b,{children:Z})]})]}),"Closed"===Z&&w({title:"You Don't have access or no room with name ".concat(t.replace(/_/g," ")),status:"error",duration:9e3,isClosable:!0}),q.admin===a.username&&Object(k.jsx)(l.a,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(m.b,{as:o.a,rightIcon:Object(k.jsx)(R.a,{}),children:"Add User"}),Object(k.jsx)(m.c,{children:Object(k.jsx)(F,{roomId:q.id})})]})})]}),Object(k.jsx)("div",{children:Object(k.jsx)(l.a,{overflowY:"scroll",height:["70vh","80vh"],mb:"20",children:L.map((function(e,t){return Object(k.jsx)(r.b,{children:Object(k.jsx)(E,{data:e,id:t})},t)}))})}),Object(k.jsx)(h.a.form,{onSubmit:X,bottom:[0,0,0,4],position:"fixed",alignSelf:"center",children:Object(k.jsxs)(g.a,{size:"md",children:[Object(k.jsx)(x.a,{pr:"4.5rem",type:"text",variant:"filled",height:"20",minWidth:["sm","md",550,800,800],placeholder:"Enter Message",name:"message"}),Object(k.jsx)(f.a,{width:"7rem",height:"4.5rem",children:Object(k.jsx)(o.a,{size:"lg",type:"submit",my:"auto",mx:"auto",children:"send"})})]})})]}):Object(k.jsx)(k.Fragment,{}),"Closed"===Z&&Object(k.jsx)(b.a,{children:"Try creating or joining different room"})]})}}}]);
//# sourceMappingURL=8.3aeb7e4c.chunk.js.map