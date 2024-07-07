
//Live URL
// const url = "http://thecocoapp.com:8080/api/v1/";

//Local URL
const url = "http://localhost:3500/api/v1/";

const ApiConfig = {
  loginGenerateOtp: `${url}auth/login/generate-otp`,
  loginVerifyOtp: `${url}auth/login/verify-otp`,

  signupGenerateOtp: `${url}auth/signup/generate-otp`,
  signupVerifiedEmail: `${url}auth/signup-with-verfied-email`,
  signupVerifyOtp: `${url}auth/signup/verify-otp`,

  createChild: `${url}child/create`,
  getSchool: `${url}school/get-all-schools`,

  //child
  getAllChild: `${url}child/get-all-childs`,
  switchChild: `${url}child/switch-to-active-child`,
  //modules
  allModules : `${url}dashboard/get-all-modules`,
  //leason
  getLeason: `${url}dashboard/get-lessons`,
  //questions
  getQuestions: `${url}dashboard/get-questions`,
  attemptQuestions: `${url}questions/attempt-questions`,
  
};
export default ApiConfig;
