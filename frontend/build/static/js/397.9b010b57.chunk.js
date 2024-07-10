"use strict";(self.webpackChunkthecocoapp=self.webpackChunkthecocoapp||[]).push([[397],{7306:(e,t,a)=>{a.d(t,{A:()=>o});const i="http://thecocoapp.com:8080/api/v1/",o={loginGenerateOtp:"".concat(i,"auth/login/email-with-pin"),loginVerifyOtp:"".concat(i,"auth/login/verify-otp"),signupGenerateOtp:"".concat(i,"auth/signup/generate-otp"),signupVerifiedEmail:"".concat(i,"auth/signup-with-verfied-email-pin"),signupVerifyOtp:"".concat(i,"auth/signup/verify-otp"),setPin:"".concat(i,"auth/send-otp-for-set-pin"),setPinChange:"".concat(i,"auth/verify-otp-for-pin-change"),resetPin:"".concat(i,"auth/reset-pin-password"),createChild:"".concat(i,"child/create"),getSchool:"".concat(i,"school/get-all-schools"),getAllChild:"".concat(i,"child/get-all-childs"),switchChild:"".concat(i,"child/switch-to-active-child"),allModules:"".concat(i,"dashboard/get-all-modules"),getLeason:"".concat(i,"dashboard/get-lessons"),getQuestions:"".concat(i,"dashboard/get-questions"),attemptQuestions:"".concat(i,"questions/attempt-questions")}},7778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var i=a(5043),o=a(6446),n=a(5865),s=a(8903),l=a(9840),r=a(1673),c=a(3193),d=a(1906),p=a(3516),m=a(899),g=a(5666),h=a(7306),u=a(6213),x=a(835),v=a(9416),y=a(3768),A=a(4942),j=a(6178),f=a.n(j),b=a(5237),S=a.n(b),C=a(579);const R={otpFormControl:{"& input":{color:"#0B1426",width:"48px !important",height:"48px !important",marginRight:"10px !important",border:"1px solid #D8D8D8",borderRadius:"8px","@media(max-width:460px)":{width:"45px !important",height:"45px !important",marginRight:"7px !important"}}}};const w=function(e){const[t,a]=(0,i.useState)(!1),j=(0,x.Zp)(),b=(0,i.useContext)(A.c),w=localStorage.getItem("emailReset")?{otp:""}:{email:""},P=async()=>{const e=h.A.setPin;try{const t=await u.A.post(e,{email:localStorage.getItem("emailReset")});200===t.status&&(y.Ay.success(t.data.message),a(!1),b.setEndTime(f()().add(3,"m").unix()))}catch(o){var t,i;y.Ay.error((null===o||void 0===o||null===(t=o.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||"Something went wrong please try again later"),a(!1)}};return(0,C.jsx)(g.A,{title:"ResetPin",children:(0,C.jsxs)(o.A,{sx:{display:"grid",gap:"13px",textAlign:"center"},children:[(0,C.jsx)(n.A,{variant:"h1",color:"rgba(67, 69, 71, 1)",mt:1,children:"Reset PIN"}),(0,C.jsxs)(n.A,{variant:"h4",color:"rgba(67, 69, 71, 1)",children:["Forgot your PIN?",(0,C.jsx)("br",{}),"Reset it now to restore your access."]}),(0,C.jsx)(p.l1,{onSubmit:async e=>{a(!0);const t=localStorage.getItem("emailReset")?h.A.setPinChange:h.A.setPin,i=localStorage.getItem("emailReset")?{email:localStorage.getItem("emailReset"),otp:e.otp}:{email:e.email};try{const o=await u.A.post(t,i);200===o.status&&(localStorage.getItem("emailReset")?(j("/reset-pin-set",{state:{token:o.data.token}}),b.setEndTime(f()().add(0,"m").unix()),localStorage.removeItem("emailReset")):(localStorage.setItem("emailReset",e.email),b.setEndTime(f()().add(3,"m").unix())),y.Ay.success(o.data.message),a(!1))}catch(s){var o,n;y.Ay.error((null===s||void 0===s||null===(o=s.response)||void 0===o||null===(n=o.data)||void 0===n?void 0:n.message)||"Something went wrong please try again later"),a(!1)}},initialValues:w,validationSchema:m.Ik().shape(localStorage.getItem("emailReset")?{otp:m.Yj().length(4,"OTP must be 4 digits").required("Please enter your OTP.")}:{email:m.Yj().required("Please enter your email address.")}),children:e=>{var a,i,m,g,h,u;let{errors:x,handleBlur:y,handleChange:A,handleSubmit:f,touched:w,values:I,setFieldValue:T}=e;return(0,C.jsxs)(p.lV,{onSubmit:f,children:[(0,C.jsxs)(s.Ay,{sx:{margin:"13px 0"},children:[(0,C.jsx)(l.A,{disabled:localStorage.getItem("emailReset"),placeholder:"Email ID",type:"email",variant:"outlined",fullWidth:!0,size:"small",inputProps:{maxLength:256},value:I.email,name:"email",error:Boolean(w.email&&x.email),onBlur:y,onChange:A,SX:{padding:"8px 13px"}}),(0,C.jsx)(r.A,{error:!0,children:w.email&&x.email})]}),localStorage.getItem("emailReset")?(0,C.jsx)(s.Ay,{sx:{margin:"13px 0",textAlign:"start"},children:(0,C.jsxs)(o.A,{children:[(0,C.jsx)(n.A,{variant:"body1",color:"rgba(67, 69, 71, 1)",sx:{marginBottom:"13px"},children:"Enter your 4-digit otp"}),(0,C.jsx)(c.A,{fullWidth:!0,error:Boolean(w.pin&&x.pin),sx:R.otpFormControl,children:(0,C.jsx)(S(),{value:I.otp,inputVariant:"standard",autoComplete:"off",onChange:e=>{T("otp",e)},name:"otp",id:"inputID",style:{display:"flex",justifyContent:"start",width:"100%",gap:"15px"},OTPLength:4,otpType:"number"})}),w.otp&&x.otp&&(0,C.jsx)(r.A,{error:!0,children:x.otp})]})}):"",(0,C.jsxs)(s.Ay,{children:[(0,C.jsx)(o.A,{sx:{marginTop:"26px"},children:(0,C.jsxs)(d.A,{type:"submit",variant:"contained",disabled:t,fullWidth:!0,children:["Submit",t&&(0,C.jsx)(v.A,{})]})}),(0,C.jsx)(o.A,{sx:{mt:"13px"},children:(null===(a=b.timeLeft)||void 0===a?void 0:a.minutes)>0||(null===(i=b.timeLeft)||void 0===i?void 0:i.seconds)>0?(0,C.jsxs)(n.A,{variant:"h3",style:{color:"rgba(60, 60, 60, 1)",fontSize:"18px",fontStyle:"normal",fontWeight:"500",lineHeight:"24px"},children:["Resend OTP in \xa0",null===(m=b.timeLeft)||void 0===m||null===(g=m.minutes)||void 0===g?void 0:g.toString().padStart(2,"0"),":",null===(h=b.timeLeft)||void 0===h||null===(u=h.seconds)||void 0===u?void 0:u.toString().padStart(2,"0"),"\xa0s"]}):(0,C.jsx)(o.A,{sx:{display:"grid",justifyContent:"center",mt:"13px"},children:(0,C.jsxs)(n.A,{variant:"body1",color:"rgba(60, 60, 60, 1)",children:["Didn\u2019t get OTP?",(0,C.jsx)("span",{style:{color:"rgba(0, 186, 242, 1)",cursor:"pointer"},onClick:P,children:"\xa0Resend OTP"})]})})}),(0,C.jsx)(o.A,{sx:{display:"grid",justifyContent:"center",mt:"20px"},children:(0,C.jsxs)(n.A,{variant:"body1",color:"rgba(60, 60, 60, 1)",children:["Have an account?",(0,C.jsx)("span",{onClick:()=>{j("/login")},style:{color:"rgba(0, 186, 242, 1)",cursor:"pointer"},children:"\xa0Log In"})]})})]})]})}})]})})}}}]);
//# sourceMappingURL=397.9b010b57.chunk.js.map