import React, { useState } from "react";
import {
  Box,
  Button,
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

function Login(props) {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <Page title="Login">
      <Box sx={{ display: "grid", gap: "5px", textAlign: "center" }}>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h5">
          Welcome back! Login now to see<br/> where you left off
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
              <Grid>
                <TextField
                  placeholder="Please enter an email address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{ maxLength: 256 }}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email && errors.email)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <FormHelperText error>
                  {touched.email && errors.email}
                </FormHelperText>
              </Grid>

              <Grid>
                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    fullWidth
                    style={{ maxWidth: "370px" }}
                  >
                    Login
                    {/* {isLoading && <ButtonCircularProgress />} */}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                    mt: 1,
                  }}
                >
                  <Typography variant="body1" color="primary">
                    Don’t have an account?
                    <span onClick={() => {navigate("/sign-up");}}>&nbsp;Sign up</span>
                  </Typography>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Page>
  );
}

export default Login;
