"use strict";(self.webpackChunkthecocoapp=self.webpackChunkthecocoapp||[]).push([[721],{7306:(e,t,r)=>{r.d(t,{A:()=>a});const n="http://thecocoapp.com:8080/api/v1/",a={loginGenerateOtp:"".concat(n,"auth/login/email-with-pin"),loginVerifyOtp:"".concat(n,"auth/login/verify-otp"),signupGenerateOtp:"".concat(n,"auth/signup/generate-otp"),signupVerifiedEmail:"".concat(n,"auth/signup-with-verfied-email-pin"),signupVerifyOtp:"".concat(n,"auth/signup/verify-otp"),setPin:"".concat(n,"auth/send-otp-for-set-pin"),setPinChange:"".concat(n,"auth/verify-otp-for-pin-change"),resetPin:"".concat(n,"auth/reset-pin-password"),createChild:"".concat(n,"child/create"),getSchool:"".concat(n,"school/get-all-schools"),getAllChild:"".concat(n,"child/get-all-childs"),switchChild:"".concat(n,"child/switch-to-active-child"),allModules:"".concat(n,"dashboard/get-all-modules"),getLeason:"".concat(n,"dashboard/get-lessons"),getQuestions:"".concat(n,"dashboard/get-questions"),attemptQuestions:"".concat(n,"questions/attempt-questions")}},6721:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(5043),a=r(4535),o=r(6446),i=r(611),s=r(9252),l=r(8903),c=r(5865),d=r(1906),u=r(5397),p=r(835),h=r(2030),g=r(423),m=r(7306),b=r(6213),f=(r(3768),r(579));const x={flexBox:{display:"flex",justifyContent:"space-between",alignItem:"center"},gridBox:{display:"grid",gap:"16px"},logoBox:{height:"-webkit-fill-available",alignItems:"end",display:"grid",justifyContent:"start"},CombineBox:{display:"grid",padding:"20px",gap:"25px",maxWidth:"700px"},buttonHandle:{display:"flex",justifyContent:"space-between",gap:"8px",alignItems:"center"},manageBoxHeight:{justifyContent:"center",alignItems:"center",height:"calc(100vh - 238px)",display:"grid",overflow:"auto","@media(max-width:767px)":{height:"calc(100vh - 285px)"}}},v=(0,a.Ay)(o.A)((e=>{let{theme:t}=e;return{padding:"60px 0px 0 0px",height:"100vh",overflow:"auto",alignItems:"end",justifyContent:"space-between",alignContent:"space-between"}})),A=(0,a.Ay)(o.A)((e=>{let{theme:t}=e;return{padding:"45px",borderTop:"2px solid #D8D8D8",position:"fixed",bottom:"0",width:"-webkit-fill-available","@media(max-width:767px)":{padding:"22px"},"@media(max-width:1000px)":{padding:"30px"}}})),y=(0,a.Ay)("img")((e=>{let{theme:t}=e;return{width:"80px",height:"80px"}})),w=(0,a.Ay)(i.A)((e=>{let{progressColor:t}=e;return{width:"-webkit-fill-available",height:"10px",backgroundColor:"rgba(216, 216, 218, 1)",borderRadius:"4px","& .MuiLinearProgress-bar":{backgroundColor:"#FE8A36",borderRadius:"4px"}}}));const C=function(){var e,t;const r=(0,p.Zp)(),[a,i]=(0,n.useState)(1),[C,j]=(0,n.useState)(""),[k,S]=(0,n.useState)(""),[B,I]=(0,n.useState)(!1),[F,P]=(0,n.useState)({}),q=(0,p.zy)(),[D,_]=(0,n.useState)([]),R=(0,h.jh)(10);console.log(D,"quetionsData");const[E,L]=(0,n.useState)(D.length);(0,n.useEffect)((()=>{M()}),[]);const M=async()=>{const e=localStorage.getItem("token");try{var t,r;const n=await(0,b.A)({method:"GET",url:"".concat(m.A.getQuestions,"/").concat(null===q||void 0===q||null===(t=q.state)||void 0===t?void 0:t.level_id,"/").concat(null===q||void 0===q||null===(r=q.state)||void 0===r?void 0:r.module_id),headers:{token:e}});200===n.status&&(_(n.data.result.quesitons),L(n.data.result.quesitons.length))}catch(n){console.log(n,"error")}};return(0,f.jsxs)(v,{children:[(0,f.jsx)(s.A,{maxWidth:"lg",children:(0,f.jsxs)(l.Ay,{container:!0,spacing:3,children:[(0,f.jsx)(l.Ay,{item:!0,xs:12,sx:{alignItems:"center",display:"grid"},children:(0,f.jsxs)(o.A,{sx:{width:"100%",textAlign:"center",display:"flex",gap:"10px",alignItems:"center"},children:[(0,f.jsx)(g.WQq,{color:"#FE8A36",onClick:()=>{r("/dashboard")},cursor:"pointer"}),(0,f.jsx)(w,{variant:"determinate",value:(a-1)/(E-1)*100||1}),(0,f.jsxs)(c.A,{variant:"body2",color:"#FE8A36",children:[a,"/",E]})]})}),(0,f.jsx)(l.Ay,{item:!0,xs:12,children:(0,f.jsx)(o.A,{sx:x.manageBoxHeight,children:(0,f.jsxs)(o.A,{sx:x.CombineBox,children:[(0,f.jsx)(o.A,{sx:{marginBottom:"20px"},children:(0,f.jsx)(c.A,{variant:"h3",children:(null===(e=D[a-1])||void 0===e?void 0:e.name)||"--"})}),null===(t=D[a-1])||void 0===t?void 0:t.options.map(((e,t)=>(0,f.jsxs)(o.A,{sx:{display:"flex",gap:"8px",padding:"12px",borderRadius:"8px",border:"1px solid #D8D8D8",cursor:"pointer",background:C===t?"#E6F8FE":"#fff"},onClick:()=>{var e;j(t),(async e=>{const{question_id:t,answer:r}=e,n=localStorage.getItem("token");try{var o,i;const e=await(0,b.A)({method:"POST",url:"".concat(m.A.attemptQuestions),headers:{token:n},data:{question_no:a,question_id:t,module_id:null===q||void 0===q||null===(o=q.state)||void 0===o?void 0:o.module_id,level_id:null===q||void 0===q||null===(i=q.state)||void 0===i?void 0:i.level_id,answer:r,demo:!1}});200===e.status&&(S(e.data.result.correctAnswerStatus),P(e.data.result))}catch(s){console.log(s,"error")}})({question_id:null===(e=D[a-1])||void 0===e?void 0:e._id,answer:R[t]})},children:[(0,f.jsxs)(c.A,{variant:"h4",children:[R[t],"."]}),(0,f.jsx)(c.A,{variant:"h4",children:e.value})]})))]})})})]})}),(0,f.jsx)(A,{style:!0===k?{background:"#D7FFB8",marginTop:"55px",border:"none"}:!1===k?{background:"#FFCFCF",marginTop:"65px",border:"none"}:{background:"#ffff"},children:(0,f.jsx)(s.A,{children:(0,f.jsx)(l.Ay,{spacing:4,children:(0,f.jsx)(l.Ay,{item:!0,xs:12,children:(0,f.jsxs)(o.A,{sx:x.buttonHandle,children:[!0===k?(0,f.jsxs)(o.A,{sx:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,f.jsx)(y,{src:"images/correct.png",alt:""}),(0,f.jsx)(c.A,{variant:"h4",color:"#58CC02",children:"Great Job"})]}):!1===k?(0,f.jsxs)(o.A,{sx:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,f.jsx)(y,{src:"images/wrong.png",alt:""}),(0,f.jsxs)(o.A,{children:[(0,f.jsx)(c.A,{variant:"h4",color:"#FF4B4B",fontWeight:600,children:"Try next time"}),(0,f.jsxs)(c.A,{variant:"h4",color:"#FF4B4B",marginBottom:"8px",marginTop:"12px",children:["Correct Answer: ",F.right_answer||"--"]}),(0,f.jsx)(c.A,{variant:"h4",color:"#FF4B4B",children:F.desc||"--"})]})]}):(0,f.jsx)(o.A,{}),(0,f.jsx)(d.A,{style:!0===k?{background:"#58CC02"}:!1===k?{background:"#FF4B4B"}:{background:"#FE8A36"},variant:"contained",onClick:()=>{""===C?I(!0):(j(""),S(""),"SCORE_BOARD"===F.nextScreen?r("/complete",{state:{totalPoints:F.totalPoints,levelNo:F.levelNo}}):i(F.nextQuestionNo))},children:"Continue"})]})})})})}),(0,f.jsx)(u.A,{ContentProps:{sx:{background:"rgba(20, 23, 25, 1)"}},sx:{width:"-webkit-fill-available !important",marginBottom:"140px"},open:B,autoHideDuration:6e3,onClose:(e,t)=>{I(!1)},message:"Select an option before checking !",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})}},611:(e,t,r)=>{r.d(t,{A:()=>H});var n=r(7528),a=r(8587),o=r(8168),i=r(5043),s=r(8387),l=r(8606),c=r(3290),d=r(7266),u=r(875),p=r(6803),h=r(4535),g=r(2876),m=r(7056),b=r(2400);function f(e){return(0,b.Ay)("MuiLinearProgress",e)}(0,m.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var x,v,A,y,w,C,j=r(579);const k=["className","color","value","valueBuffer","variant"];let S,B,I,F,P,q;const D=(0,c.i7)(S||(S=x||(x=(0,n.A)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),_=(0,c.i7)(B||(B=v||(v=(0,n.A)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),R=(0,c.i7)(I||(I=A||(A=(0,n.A)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),E=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?(0,d.a)(e.palette[t].main,.62):(0,d.e$)(e.palette[t].main,.5),L=(0,h.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["color".concat((0,p.A)(r.color))],t[r.variant]]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:E(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),M=(0,h.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t["dashedColor".concat((0,p.A)(r.color))]]}})((e=>{let{ownerState:t,theme:r}=e;const n=E(r,t.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.AH)(F||(F=y||(y=(0,n.A)(["\n    animation: "," 3s infinite linear;\n  "]))),R)),O=(0,h.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t["barColor".concat((0,p.A)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(e=>{let{ownerState:t}=e;return("indeterminate"===t.variant||"query"===t.variant)&&(0,c.AH)(P||(P=w||(w=(0,n.A)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),D)})),N=(0,h.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t["barColor".concat((0,p.A)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:E(r,t.color),transition:"transform .".concat(4,"s linear")})}),(e=>{let{ownerState:t}=e;return("indeterminate"===t.variant||"query"===t.variant)&&(0,c.AH)(q||(q=C||(C=(0,n.A)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),_)})),H=i.forwardRef((function(e,t){const r=(0,g.A)({props:e,name:"MuiLinearProgress"}),{className:n,color:i="primary",value:c,valueBuffer:d,variant:h="indeterminate"}=r,m=(0,a.A)(r,k),b=(0,o.A)({},r,{color:i,variant:h}),x=(e=>{const{classes:t,variant:r,color:n}=e,a={root:["root","color".concat((0,p.A)(n)),r],dashed:["dashed","dashedColor".concat((0,p.A)(n))],bar1:["bar","barColor".concat((0,p.A)(n)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat((0,p.A)(n)),"buffer"===r&&"color".concat((0,p.A)(n)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.A)(a,f,t)})(b),v=(0,u.I)(),A={},y={bar1:{},bar2:{}};if("determinate"===h||"buffer"===h)if(void 0!==c){A["aria-valuenow"]=Math.round(c),A["aria-valuemin"]=0,A["aria-valuemax"]=100;let e=c-100;v&&(e=-e),y.bar1.transform="translateX(".concat(e,"%)")}else 0;if("buffer"===h)if(void 0!==d){let e=(d||0)-100;v&&(e=-e),y.bar2.transform="translateX(".concat(e,"%)")}else 0;return(0,j.jsxs)(L,(0,o.A)({className:(0,s.A)(x.root,n),ownerState:b,role:"progressbar"},A,{ref:t},m,{children:["buffer"===h?(0,j.jsx)(M,{className:x.dashed,ownerState:b}):null,(0,j.jsx)(O,{className:x.bar1,ownerState:b,style:y.bar1}),"determinate"===h?null:(0,j.jsx)(N,{className:x.bar2,ownerState:b,style:y.bar2})]}))}))}}]);
//# sourceMappingURL=721.97d1ac6b.chunk.js.map