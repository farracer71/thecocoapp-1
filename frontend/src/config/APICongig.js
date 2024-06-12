
//Live URL
// const url = "https://";

//Local URL
const url = "http://localhost:8080/api/v1/";

const ApiConfig = {
  loginGenerateOtp: `${url}auth/login/generate-otp`,
  signupGenerateOtp: `${url}auth/signup/generate-otp`,
  signupVerifiedEmail: `${url}auth/signup-with-verfied-email`,
  loginVerifyOtp: `${url}auth/login/verify-otp`,
  signupVerifyOtp: `${url}auth/signup/verify-otp`,
};
export default ApiConfig;
