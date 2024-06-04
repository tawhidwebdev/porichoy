import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import "./auth.css"
import Images from '../../components/utilitis/Images'
import GoogleImage from '../../assets/images/login/google.png'
import LoginImage from '../../assets/images/login/login_img.jpg'
import InputBox from '../../components/utilitis/InputBox'
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginHeading = styled(Typography)({
  color: "#03014C",
  fontSize: "33px",
  marginBottom: "30px"
})

const Login = () => {

  const initialValues = {
    email: '',
    password:'',
  }
  const formik = useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Please enter your email')
          .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Is not in correct format'),
        password: Yup.string()
          .required("Please enter your password")
          .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                    "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
      }),
    onSubmit: values => {
      console.log(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} style={{}}>
            <Grid item xs={6} style={{display:"flex", alignItems:"center", justifyContent:'center', flexDirection:'column'}}>              
                <div style={{padding:"20px", borderRadius:"16px"}}>
                  <LoginHeading variant="h4">
                    Login to your account!
                  </LoginHeading>
                  <Images source={GoogleImage} alt="Not Found" styling="loginwithgoogle" />
                    <form onSubmit={formik.handleSubmit}>
                      <div className='inputbox' style={{marginTop:"33px", display:"flex", flexDirection:"column", rowGap:"60px" }}>
                        <div>

                          <InputBox 
                                  id="email"
                                  name="email"
                                  type="email"
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                  variant="standard"
                                  placeholder="Email Addres"
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                          ) : null}
                        </div>
                        <div>
                          <InputBox
                                  id="password"
                                  name="password"
                                  type="password"
                                  onChange={formik.handleChange}
                                  value={formik.values.password}
                                  variant="standard"
                                  placeholder="Password"
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='login_btn'>
                        <Button  type="submit" style={{padding:"25px 10px", fontSize:"20px", backgroundColor:"#5F35F5"}} fullWidth variant="contained">
                          Login to Continue
                        </Button>
                      </div>          
                    </form>
                  <p className='sing_up'>Don’t have an account ? <a href="/registration">Sign up</a></p>
                </div>
            </Grid>
            <Grid item xs={6} style={{backgroundColor: "blue"}}>
              <div style={{width:"100%", height:"100vh"}}>
                <Images source={LoginImage} alt="NOt Found" styling="loginimg" />
              </div>
            </Grid>
          </Grid>
      </Box>
    </>
  )
}

export default Login
