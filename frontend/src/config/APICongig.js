
//Live URL
// const url = "https://";

//Local URL
const url = "http://localhost:8080/api/v1/";

const ApiConfig = {
  loginGenerateOtp: `${url}auth/login/generate-otp`,
  loginVerifyOtp: `${url}auth/login/verify-otp`,

  signupGenerateOtp: `${url}auth/signup/generate-otp`,
  signupVerifiedEmail: `${url}auth/signup-with-verfied-email`,
  signupVerifyOtp: `${url}auth/signup/verify-otp`,

  createChild: `${url}/child/create`,
};
export default ApiConfig;
