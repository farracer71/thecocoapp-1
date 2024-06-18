(self.webpackChunkthecocoapp=self.webpackChunkthecocoapp||[]).push([[199],{7306:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const r="http://thecocoapp.com:8080/api/v1/",a={loginGenerateOtp:"".concat(r,"auth/login/generate-otp"),loginVerifyOtp:"".concat(r,"auth/login/verify-otp"),signupGenerateOtp:"".concat(r,"auth/signup/generate-otp"),signupVerifiedEmail:"".concat(r,"auth/signup-with-verfied-email"),signupVerifyOtp:"".concat(r,"auth/signup/verify-otp"),createChild:"".concat(r,"child/create"),getSchool:"".concat(r,"school/get-all-schools")}},7199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var r=n(5043),a=n(6446),o=n(5865),i=n(8903),l=n(3193),u=n(1906),s=n(3516),c=n(899),d=n(5666),p=n(7306),f=n(6213),h=n(835),m=n(5237),v=n.n(m),g=n(9416),y=n(4942),b=n(3768),x=n(6178),O=n.n(x),j=n(579);const A={otpFormControl:{"& input":{color:"#0B1426",width:"48px !important",height:"48px !important",marginRight:"10px !important",border:"1px solid #D8D8D8",borderRadius:"8px","@media(max-width:460px)":{width:"45px !important",height:"45px !important",marginRight:"7px !important"}}}};const T=function(e){const[t,n]=(0,r.useState)(!1),m=(0,h.zy)(),x=(0,r.useContext)(y.c),T=(0,h.Zp)(),C=async()=>{const e=p.A.loginGenerateOtp;try{var t,r;const a=await f.A.post(e,{email:(null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.email.email)||(null===m||void 0===m||null===(r=m.state)||void 0===r?void 0:r.email)});200===a.status&&(b.Ay.success(a.data.message),n(!1),x.setEndTime(O()().add(3,"m").unix()))}catch(a){b.Ay.error(a.response.data.message),n(!1)}};return(0,j.jsx)(d.A,{title:"Verify",children:(0,j.jsxs)(a.A,{sx:{display:"grid",gap:"13px",textAlign:"center"},children:[(0,j.jsx)(o.A,{variant:"h1",color:"rgba(67, 69, 71, 1)",mt:1,children:"Verification"}),(0,j.jsx)(o.A,{variant:"h4",color:"rgba(67, 69, 71, 1)",children:"You will get OTP via email"}),(0,j.jsx)(s.l1,{initialValues:{otp:""},validationSchema:c.Ik().shape({otp:c.Yj().length(4,"OTP must be 4 digits").required("Please enter your OTP.")}),onSubmit:async e=>{var t;n(!0);const r="login"===(null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.type)?p.A.loginVerifyOtp:p.A.signupVerifyOtp;try{var a,o;const t=await f.A.post(r,{email:(null===m||void 0===m||null===(a=m.state)||void 0===a?void 0:a.email.email)||(null===m||void 0===m||null===(o=m.state)||void 0===o?void 0:o.email),otp:e.otp});var i;if(200===t.status)"signUp"===(null===m||void 0===m||null===(i=m.state)||void 0===i?void 0:i.type)?T("/add-child"):T("/dashboard"),localStorage.setItem("token",t.data.token),b.Ay.success(t.data.message),n(!1)}catch(l){b.Ay.error(l.response.data.message),n(!1)}},children:e=>{var n,r,c,d,p,f;let{errors:h,handleBlur:m,handleChange:y,handleSubmit:b,touched:O,values:T,setFieldValue:w}=e;return(0,j.jsxs)(s.lV,{onSubmit:b,children:[(0,j.jsx)(i.Ay,{sx:{margin:"13px 0"},children:(0,j.jsxs)(a.A,{children:[(0,j.jsx)(l.A,{fullWidth:!0,error:Boolean(O.otp&&h.otp),sx:A.otpFormControl,children:(0,j.jsx)(v(),{value:T.otp,inputVariant:"standard",autoComplete:"off",onChange:e=>{w("otp",e)},name:"otp",id:"inputID",style:{display:"flex",justifyContent:"center",width:"100%",gap:"15px"},autoFocus:!0,OTPLength:4,otpType:"number"})}),O.otp&&h.otp&&(0,j.jsx)(o.A,{color:"error",children:h.otp})]})}),(0,j.jsxs)(i.Ay,{children:[(0,j.jsx)(a.A,{sx:{marginTop:"26px"},children:(0,j.jsxs)(u.A,{type:"submit",variant:"contained",disabled:t,fullWidth:!0,style:{maxWidth:"370px"},children:["Verify",t&&(0,j.jsx)(g.A,{})]})}),(0,j.jsx)(a.A,{sx:{mt:"13px"},children:(null===(n=x.timeLeft)||void 0===n?void 0:n.minutes)>0||(null===(r=x.timeLeft)||void 0===r?void 0:r.seconds)>0?(0,j.jsxs)(o.A,{variant:"h3",style:{color:"rgba(60, 60, 60, 1)",fontSize:"18px",fontStyle:"normal",fontWeight:"500",lineHeight:"24px"},children:["Resend OTP in \xa0",null===(c=x.timeLeft)||void 0===c||null===(d=c.minutes)||void 0===d?void 0:d.toString().padStart(2,"0"),":",null===(p=x.timeLeft)||void 0===p||null===(f=p.seconds)||void 0===f?void 0:f.toString().padStart(2,"0"),"\xa0s"]}):(0,j.jsx)(a.A,{sx:{display:"grid",justifyContent:"center",mt:"13px"},children:(0,j.jsxs)(o.A,{variant:"body1",color:"rgba(60, 60, 60, 1)",children:["Didn\u2019t get OTP?",(0,j.jsx)("span",{style:{color:"rgba(0, 186, 242, 1)",cursor:"pointer"},onClick:C,children:"\xa0Resend OTP"})]})})})]})]})}})]})})}},5237:(e,t,n)=>{var r;window,e.exports=(r=n(5043),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/otp-input-react/",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.r(t);var i=n(0),l=n.n(i);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e){var t=e.maxTime,n=e.onTimerComplete,r=e.timeInterval,a=e.onResendClick,o=Object(i.useRef)(),l=u(Object(i.useState)(t),2),s=l[0],c=l[1];return Object(i.useEffect)((function(){return o.current&&0===s?(clearTimeout(o.current),n&&n()):o.current=setTimeout((function(){c((function(e){return e-1}))}),r),function(){clearTimeout(o.current)}}),[n,s,r]),{handelResendClick:function(){a&&a(0===s),c(t)},remainingTime:s}};function c(e){var t=e.renderTime,n=e.renderButton,r=e.style,i=e.className,u=o(e,["renderTime","renderButton","style","className"]),c=s(u),d=c.remainingTime,p=c.handelResendClick;return l.a.createElement("div",{className:i||"","data-testid":"otp-resend-root",style:a({display:"flex",justifyContent:"space-between"},r)},t?t(d):l.a.createElement("span",null,d," sec"),n?n({disabled:0!==d,onClick:p,remainingTime:d}):l.a.createElement("button",{disabled:0!==d,onClick:p,type:"button"},"Resend OTP"))}c.defaultProps={maxTime:60,timeInterval:1e3,style:{}};var d=c,p={width:32,height:32,textAlign:"center",marginRight:20},f=l.a.memo((function(e){var t=e.focus,n=e.autoFocus,r=e.disabled,u=e.value,s=e.onInputFocus,c=e.index,d=e.secure,f=e.inputStyles,h=e.otpType,m=o(e,["focus","autoFocus","disabled","value","onInputFocus","index","secure","inputStyles","otpType"]),v=Object(i.useRef)(null),g=Object(i.useRef)(!1);Object(i.useEffect)((function(){n&&t&&v.current.focus()}),[]),Object(i.useEffect)((function(){g.current&&t&&v.current.focus(),g.current=!0}),[t]);var y="text";return d?y="password":"number"===h&&(y="tel"),l.a.createElement("input",Object.assign({style:a({},p,f),type:y,maxLength:"1",ref:v,disabled:r,onFocus:function(e){return s(c,e)},value:u||""},m))})),h=function(e){var t=e.autoFocus,n=e.value,r=e.otpType,a=e.onChange,o=e.OTPLength,l=u(Object(i.useState)(t?0:-1),2),s=l[0],c=l[1],d=function(){return n?n.toString().split(""):[]},p=function(e){var t=e.join("");a(t)},f=function(){!function(e){var t=Math.max(Math.min(o-1,e),0);c(t)}("next"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next")?s+1:s-1)},h=function(e){var t=u(e,1)[0],n=d();n[s]=t,p(n)},m=function(e){switch(r){case"number":return!(e.charCodeAt(0)>57||e.charCodeAt(0)<48);case"alpha":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<65);case"alphanumeric":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<48);default:return!0}};return{activeInput:s,getOtpValue:d,handleOnChange:function(e){m(e.target.value)&&(h(e.target.value),f("next"))},handleOnKeyDown:function(e){switch(e.key){case"Backspace":e.preventDefault(),h(""),f("prev");break;case"Delete":e.preventDefault(),h("");break;case"ArrowLeft":e.preventDefault(),f("prev");break;case"ArrowRight":e.preventDefault(),f("next")}},handelOnInput:function(e){e.target.value.length>1&&(e.preventDefault(),f("next"))},handleOnPaste:function(e,t){e.preventDefault();for(var n=d(),r=e.clipboardData.getData("text/plain").slice(0,o-s).split(""),a=0;a<o;++a)a>=s&&r.length>0&&(n[a]=r.shift());for(var i=[n.length],l=0,u=0;u<n.length;++u)m(n[u])&&(i[l]=n[u],l++);p(i)},onInputFocus:function(e,t){c(e),t.target.select()}}},m=function(e){var t=e.OTPLength,n=e.disabled,r=e.autoFocus,o=e.value,u=void 0===o?"":o,s=e.onChange,c=e.otpType,d=e.secure,p=e.className,m=e.inputClassName,v=e.inputStyles,g=e.style,y=e.placeholder,b=h({autoFocus:r,value:u,otpType:c,onChange:s,OTPLength:t}),x=b.activeInput,O=b.getOtpValue,j=b.handleOnChange,A=b.handleOnKeyDown,T=b.handelOnInput,C=b.handleOnPaste,w=b.onInputFocus,S=Object(i.useMemo)((function(){for(var e=O(),a=[],o=0;o<t;o++)a.push(l.a.createElement(f,{className:m,inputStyles:v,key:o,focus:x===o,value:e[o],onChange:j,onKeyDown:A,onInput:T,onPaste:C,onInputFocus:w,index:o,disabled:n,autoFocus:r,secure:d,"data-testid":"input",otpType:c,placeholder:y&&y[o]}));return a}),[O,t,m,v,x,j,A,T,C,w,n,r,d,c,y]);return l.a.createElement("div",{style:a({display:"flex"},g),className:"".concat(p),"data-testid":"otp-input-root"},S)};m.defaultProps={className:"",inputClassName:"",OTPLength:4,onChange:function(){},disabled:!1,secure:!1,autoFocus:!1,value:"",otpType:"any",inputStyles:{},style:{},placeholder:void 0};var v=m;n.d(t,"ResendOTP",(function(){return d})),n.d(t,"default",(function(){return v}))}]))}}]);
//# sourceMappingURL=199.49da00ff.chunk.js.map