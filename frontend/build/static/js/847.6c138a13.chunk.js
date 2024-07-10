"use strict";(self.webpackChunkthecocoapp=self.webpackChunkthecocoapp||[]).push([[847],{7306:(e,t,a)=>{a.d(t,{A:()=>n});const i="http://thecocoapp.com:8080/api/v1/",n={loginGenerateOtp:"".concat(i,"auth/login/email-with-pin"),loginVerifyOtp:"".concat(i,"auth/login/verify-otp"),signupGenerateOtp:"".concat(i,"auth/signup/generate-otp"),signupVerifiedEmail:"".concat(i,"auth/signup-with-verfied-email-pin"),signupVerifyOtp:"".concat(i,"auth/signup/verify-otp"),setPin:"".concat(i,"auth/send-otp-for-set-pin"),setPinChange:"".concat(i,"auth/verify-otp-for-pin-change"),resetPin:"".concat(i,"auth/reset-pin-password"),createChild:"".concat(i,"child/create"),getSchool:"".concat(i,"school/get-all-schools"),getAllChild:"".concat(i,"child/get-all-childs"),switchChild:"".concat(i,"child/switch-to-active-child"),allModules:"".concat(i,"dashboard/get-all-modules"),getLeason:"".concat(i,"dashboard/get-lessons"),getQuestions:"".concat(i,"dashboard/get-questions"),attemptQuestions:"".concat(i,"questions/attempt-questions")}},6847:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(5043),n=a(4535),o=a(6446),s=a(611),l=a(9252),r=a(8903),d=a(5865),c=a(423),h=a(5394),x=a(6833),g=a(2030),p=a(835),u=a(7306),m=a(6213),b=(a(3768),a(579));const v={flexBox:{display:"flex",justifyContent:"space-between",alignItem:"center","@media(max-width:1000px)":{},"@media(max-width:767px)":{}},gridBox:{display:"grid",gap:"16px"},logoBox:{height:"-webkit-fill-available",alignItems:"end",display:"grid",justifyContent:"start"},CombineBox:{display:"grid",paddingBottom:"20px",alignItems:"flex-start",height:"calc(100vh - 130px)","@media(max-width:900px)":{height:"100%"}},buttonHandle:{display:"flex",justifyContent:"end",gap:"8px"}},j=(0,n.Ay)(o.A)((e=>{let{theme:t}=e;return{padding:"60px 0px 0 0px",height:"100vh",overflow:"auto",alignItems:"end",justifyContent:"space-between",alignContent:"space-between"}})),y=(0,n.Ay)(o.A)((e=>{let{theme:t}=e;return{padding:"10px 25px"}})),A=(0,n.Ay)("img")((e=>{let{theme:t}=e;return{width:"100%",maxHeight:"400px","@media(max-width:900px)":{maxHeight:"300px"}}})),f=(0,n.Ay)("img")((e=>{let{theme:t}=e;return{width:"60px",height:"60px"}})),w=(0,n.Ay)(s.A)((e=>{let{progressColor:t}=e;return{width:"-webkit-fill-available",height:"10px",backgroundColor:"rgba(216, 216, 218, 1)",borderRadius:"4px","& .MuiLinearProgress-bar":{backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"4px"}}}));const k=function(e){var t,a;const n=(0,p.Zp)(),[s,k]=(0,i.useState)(1),C=(0,p.zy)(),[B,I]=(0,i.useState)([]),[S,P]=(0,i.useState)(B.length);(0,i.useEffect)((()=>{_()}),[]);const _=async()=>{const e=localStorage.getItem("token");try{var t,a;const i=await(0,m.A)({method:"GET",url:"".concat(u.A.getLeason,"/").concat(null===C||void 0===C||null===(t=C.state)||void 0===t?void 0:t.level_id,"/").concat(null===C||void 0===C||null===(a=C.state)||void 0===a?void 0:a.module_id),headers:{token:e}});200===i.status&&(I(i.data.result),P(i.data.result.length))}catch(i){console.log(i,"error")}};return(0,b.jsxs)(j,{style:3===s?{background:"rgba(255, 246, 200, 1)"}:2===s?{background:"rgba(240, 220, 255, 1)"}:{background:"rgba(255, 220, 234, 1)"},children:[(0,b.jsx)(l.A,{maxWidth:"lg",children:(0,b.jsxs)(r.Ay,{container:!0,spacing:3,children:[(0,b.jsx)(r.Ay,{item:!0,xs:12,sm:12,md:8,children:(0,b.jsxs)(o.A,{sx:v.CombineBox,children:[(0,b.jsxs)(o.A,{sx:v.gridBox,children:[(0,b.jsxs)(o.A,{sx:v.flexBox,children:[(0,b.jsx)(c.WQq,{color:"rgba(0, 0, 0, 1)",onClick:()=>{n("/dashboard")},cursor:"pointer"}),(0,b.jsxs)(o.A,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[(0,b.jsx)(h.ulM,{cursor:"pointer",color:"rgba(0, 0, 0, 1)",onClick:()=>{var e,t;(0,g.Xm)((null===(e=B[s-1])||void 0===e?void 0:e.name)+". "+(null===(t=B[s-1])||void 0===t?void 0:t.description))}}),(0,b.jsx)(x.r$X,{color:"rgba(0, 0, 0, 1)"})]})]}),(0,b.jsxs)(o.A,{sx:{},children:[(0,b.jsx)(d.A,{variant:"h1",children:(null===(t=B[s-1])||void 0===t?void 0:t.name)||"--"}),(0,b.jsx)(d.A,{variant:"h4",sx:{marginTop:"14px"},children:(null===(a=B[s-1])||void 0===a?void 0:a.description)||"--"})]})]}),(0,b.jsx)(o.A,{sx:v.logoBox,children:(0,b.jsxs)(o.A,{sx:{display:"flex",alignItems:"start",gap:"15px"},children:[(0,b.jsx)(f,{alt:"#",src:"images/schoolLogo.png"}),(0,b.jsxs)(o.A,{children:[(0,b.jsx)(d.A,{variant:"body2",children:"Pravara Public School"}),(0,b.jsx)(d.A,{variant:"body2",children:"Pravaranagar"})]})]})})]})}),(0,b.jsx)(r.Ay,{item:!0,xs:12,sm:12,md:4,children:(0,b.jsx)(o.A,{sx:{background:"rgba(255, 255, 255, 1)"},children:(0,b.jsx)(A,{alt:"",src:"images/add.png"})})})]})}),(0,b.jsx)(y,{style:3===s?{background:"rgba(232, 215, 124, 1)"}:2===s?{background:"rgba(222, 179, 255, 1)"}:{background:"rgba(255, 179, 209, 1)"},children:(0,b.jsx)(l.A,{children:(0,b.jsxs)(r.Ay,{container:!0,children:[(0,b.jsx)(r.Ay,{item:!0,xs:8,sx:{alignItems:"center",display:"grid"},children:(0,b.jsxs)(o.A,{sx:{width:"100%",textAlign:"center",display:"flex",gap:"10px",alignItems:"center"},children:[(0,b.jsx)(w,{variant:"determinate",value:(s-1)/(S-1)*100}),(0,b.jsxs)(d.A,{variant:"body2",color:"#fff",children:[s,"/",S]})]})}),(0,b.jsx)(r.Ay,{item:!0,xs:4,children:(0,b.jsxs)(o.A,{sx:v.buttonHandle,children:[(0,b.jsx)(h.Ztw,{onClick:()=>{k((e=>e>1?e-1:1))},disabled:s<=1,color:"rgba(255, 255, 255, 1)",fontSize:"48px"}),(0,b.jsx)(h.fRr,{onClick:()=>{var e,t;0==S||(k((e=>e<S?e+1:S)),(0,g.Xm)("  "),s===S&&n("/take-quiz",{state:{module_id:null===C||void 0===C||null===(e=C.state)||void 0===e?void 0:e.level_id,level_id:null===C||void 0===C||null===(t=C.state)||void 0===t?void 0:t.module_id}}))},disabled:s>=S,color:"rgba(255, 255, 255, 1)",fontSize:"48px"})]})})]})})})]})}}}]);
//# sourceMappingURL=847.6c138a13.chunk.js.map