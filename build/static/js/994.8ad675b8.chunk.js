"use strict";(self.webpackChunkacademix=self.webpackChunkacademix||[]).push([[994],{3994:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var i=r(4165),n=r(5861),a=r(9439),o=r(2791),l=r(1889),s=r(890),c=r(4554),d=r(7391),u=r(3466),h=r(3400),p=r(533),g=r(4721),f=r(7194),v=r(6616),m=r(5206),x=(r(5462),r(4096)),w=r(9278),b=r(654),Z=r(4596),S=r(7689),j=r(184);function C(){var e=o.useContext(w.V).setUser,t=(0,S.s0)(),r=o.useState(!1),C=(0,a.Z)(r,2),y=C[0],A=C[1],k=o.useState(),I=(0,a.Z)(k,2),R=I[0],P=I[1],L=o.useState(),D=(0,a.Z)(L,2),V=D[0],W=D[1];o.useEffect((function(){if(localStorage.getItem("token"))return t("/")}),[]);var N=function(e,t){"email"===t&&P(e.target.value),"password"===t&&W(e.target.value)},M=function(){var r=(0,n.Z)((0,i.Z)().mark((function r(n){var a,o,l;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),a={email:R,password:V},o=m.Am.loading("Loggin in..."),r.prev=3,r.next=6,x.Z.post("/login",JSON.stringify(a),{headers:{"Content-Type":"application/json"}});case 6:return l=r.sent,localStorage.setItem("token",l.data.data.token),localStorage.setItem("expiresIn",(new Date).getUTCHours()+1),e(JSON.stringify(l.data.data.user)),localStorage.setItem("user",JSON.stringify(l.data.data.user)),m.Am.update(o,{render:l.data.message,type:"success",isLoading:!1,autoClose:2e3}),t("/"),r.abrupt("return",void setTimeout((function(){localStorage.clear("token")}),86400));case 16:if(r.prev=16,r.t0=r.catch(3),"timeout of 10000ms exceeded"!==r.t0.message){r.next=22;break}return r.abrupt("return",m.Am.update(o,{render:"Request timeout",type:"error",isLoading:!1,autoClose:2e3}));case 22:"Request failed with status code 400"===r.t0.message?m.Am.update(o,{render:r.t0.response.data.message,type:"error",isLoading:!1,autoClose:2e3}):m.Am.update(o,{render:r.t0.message,type:"error",isLoading:!1,autoClose:2e3});case 23:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e){return r.apply(this,arguments)}}();return(0,j.jsxs)(l.ZP,{container:!0,component:"main",sx:{px:4,height:"100vh",backgroundImage:"url(".concat(Z,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center",alignItems:"center",justifyContent:"flex-start"},children:[(0,j.jsxs)(l.ZP,{md:5,maxWidth:"500px",sx:{p:5,display:"flex",flexDirection:"column",background:"white",borderRadius:"0px 0px 0px 50px"},children:[(0,j.jsx)(s.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,j.jsxs)(c.Z,{component:"form",noValidate:!0,onSubmit:M,sx:{mt:1},children:[(0,j.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(d.Z,{variant:"standard",required:!0,fullWidth:!0,id:"email",onChange:function(e){return N(e,"email")},label:"Email",name:"email",autoComplete:"email"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(d.Z,{variant:"standard",required:!0,fullWidth:!0,onChange:function(e){return N(e,"password")},name:"password",label:"Password",type:y?"text":"password",id:"password",autoComplete:"new-password",InputProps:{endAdornment:(0,j.jsx)(u.Z,{position:"end",children:(0,j.jsx)(h.Z,{"aria-label":"toggle password visibility",onClick:function(){return A((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},children:y?(0,j.jsx)(f.Z,{}):(0,j.jsx)(v.Z,{})})})}})})]}),(0,j.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",sx:{mt:1},children:(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(p.Z,{href:"/forgot-password",variant:"body2",children:"Forgot Password?"})})}),(0,j.jsx)(b.aF,{}),(0,j.jsx)(g.Z,{children:(0,j.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),(0,j.jsx)(l.ZP,{container:!0,justifyContent:"center",children:(0,j.jsxs)(l.ZP,{item:!0,textAlign:"center",pb:2,children:["Already have an account?"," ",(0,j.jsx)(p.Z,{href:"/signup",variant:"body2",children:"Sign up for one!"})]})})]})]}),(0,j.jsx)(m.Ix,{})]})}},4096:function(e,t,r){var i=r(1243).Z.create({baseURL:"https://academix-api.onrender.com/api/v1",timeout:1e4,headers:{Authorization:localStorage.getItem("token")}});t.Z=i},4721:function(e,t,r){var i=r(3366),n=r(7462),a=r(2791),o=r(8182),l=r(4419),s=r(2065),c=r(7630),d=r(1046),u=r(133),h=r(184),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),v=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDivider"}),a=r.absolute,s=void 0!==a&&a,c=r.children,v=r.className,m=r.component,x=void 0===m?c?"div":"hr":m,w=r.flexItem,b=void 0!==w&&w,Z=r.light,S=void 0!==Z&&Z,j=r.orientation,C=void 0===j?"horizontal":j,y=r.role,A=void 0===y?"hr"!==x?"separator":void 0:y,k=r.textAlign,I=void 0===k?"center":k,R=r.variant,P=void 0===R?"fullWidth":R,L=(0,i.Z)(r,p),D=(0,n.Z)({},r,{absolute:s,component:x,flexItem:b,light:S,orientation:C,role:A,textAlign:I,variant:P}),V=function(e){var t=e.absolute,r=e.children,i=e.classes,n=e.flexItem,a=e.light,o=e.orientation,s=e.textAlign,c={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(c,u.V,i)}(D);return(0,h.jsx)(g,(0,n.Z)({as:x,className:(0,o.Z)(V.root,v),role:A,ref:t,ownerState:D},L,{children:c?(0,h.jsx)(f,{className:V.wrapper,ownerState:D,children:c}):null}))}));t.Z=v},133:function(e,t,r){r.d(t,{V:function(){return a}});var i=r(5878),n=r(1217);function a(e){return(0,n.Z)("MuiDivider",e)}var o=(0,i.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o}}]);
//# sourceMappingURL=994.8ad675b8.chunk.js.map