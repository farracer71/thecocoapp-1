import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Page from "src/component/Page";
import ApiConfig from "src/config/APICongig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import moment from "moment";



const styles = {
  otpFormControl: {
    "& input": {
      color: "#0B1426",
      width: "48px !important",
      height: "48px !important",
      marginRight: "10px !important",
      border: "1px solid #D8D8D8",
      borderRadius: "8px",
      "@media(max-width:460px)": {
        width: "45px !important",
        height: "45px !important",
        marginRight: "7px !important",
      },
    },
  },
};
function Verify(props) {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);
  const [otp, setOTP] = useState("");
  const [otpError, setOTPError] = useState(false);
  const email = window.sessionStorage.getItem("email");
  const minute = auth.timeLeft?.minutes?.toString();
  const second = auth.timeLeft?.seconds?.toString();
  const navigate = useNavigate();
  const formInitialSchema = isRememberMe
    ? {
        email: "",
      }
    : {
        email: window.sessionStorage.getItem("email") || "",
      };

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(ApiConfig.login, {
        email: values.email,
        password: values.password,
      });

      if (res.status === 200) {
        // Handle successful login
      }
    } catch (error) {
      console.log("ERROR", error.response);
      setIsLoading(false);
    }
  };
    const reSendOTPHandle = async (values) => {
      try {
        setIsLoading(true);
        const res = await axios({
          method: "PUT",
          url: ApiConfig.resendOTP,
          data: {
            email: sessionStorage.getItem("email"),
          },
        });
        if (res.data.responseCode === 200) {
          //   "OTP resent successfully, Please check your email."
          setIsLoading(false);
          auth.setEndtime(moment().add(3, "m").unix());
        } else {
        }
      } catch (error) {}
    };
  const errorHnadling = () => {
    console.log("otpError");
    if (otp.length < 6) {
      setOTPError(true);
    } else {
      setOTPError(false);
    }
  };
  return (
    <Page title="Verify">
      <Box sx={{ display: "grid", gap: "13px", textAlign: "center" }}>
        <Typography variant="h1" color={"rgba(67, 69, 71, 1)"} mt={1}>
          Verification
        </Typography>
        <Typography variant="h4" color={"rgba(67, 69, 71, 1)"}>
          You will get OTP via email
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={formInitialSchema}
          validationSchema={yup.object().shape({
            email: yup.string().required("Please enter your email address."),
          })}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid sx={{ margin: "13px 0" }}>
                <Box>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.otp && errors.otp)}
                    sx={styles.otpFormControl}
                  >
                    <OTPInput
                      value={otp}
                      inputVariant="standard"
                      autoComplete="off"
                      onChange={(otpValue) => {
                        setOTP(otpValue);
                        // Custom validation logic when input changes
                        if (
                          otpValue.length !== 4 ||
                          !/^[0-9]+$/.test(otpValue)
                        ) {
                          // setOTPError(true);
                        } else {
                          setOTPError(false);
                        }
                      }}
                      name="otp"
                      id="inputID"
                      error={otpError}
                      onInput={() => {
                        if (otp.length < 3) {
                          setOTPError(false);
                        }
                      }}
                      onBlur={() => {
                        errorHnadling();
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        gap: "15px",
                      }}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                    />
                  </FormControl>
                </Box>
                <Box sty>
                  <Typography error>
                    {otpError && "All OTP field are required"}
                  </Typography>
                  {auth.timeLeft?.minutes > 0 || auth.timeLeft?.seconds > 0 ? (
                    <>
                      <Box>
                        <Typography
                          variant="body1"
                          style={{
                            color: "#434547",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "24px",
                            marginRight: "10px",
                          }}
                        >
                          {minute.length > 1 ? minute : "0" + minute}:
                          {second.length > 1 ? second : "0" + second}
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    <></>
                  )}
                </Box>
              </Grid>

              <Grid>
                <Box sx={{ marginTop: "26px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    fullWidth
                    style={{ maxWidth: "370px" }}
                  >
                    Verify
                    {isLoading && <ButtonCircularProgress />}
                  </Button>
                </Box>
                {auth.timeLeft?.minutes > 0 && auth.timeLeft?.seconds < 0 && (
                  <Box
                    sx={{
                      display: "grid",
                      justifyContent: "center",
                      mt: "13px",
                    }}
                  >
                    <Typography variant="body1" color={"rgba(60, 60, 60, 1)"}>
                      Didn’t got OTP?
                      <span
                        style={{
                          color: "rgba(0, 186, 242, 1)",
                          cursor: "pointer",
                        }}
                        // fullWidth
                        onClick={() => {
                          reSendOTPHandle();
                        }}
                      >
                        &nbsp;Sign up
                      </span>
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Page>
  );
}

export default Verify;
