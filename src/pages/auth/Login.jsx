import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import "./auth.css"
import Images from '../../components/utilitis/Images'
import GoogleImage from '../../assets/images/login/google.png'
import LoginImage from '../../assets/images/login/login_img.jpg'
import InputBox from '../../components/utilitis/InputBox'
import Button from '@mui/material/Button';


const LoginHeading = styled(Typography)({
  color: "#03014C",
  fontSize: "33px",
  marginBottom: "30px"
})

const Login = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} style={{}}>
            <Grid item xs={6} style={{display:"flex", alignItems:"center", justifyContent:'center', flexDirection:'column'}}>
              <div style={{ padding:"20px", borderRadius:"16px"}} >
                <LoginHeading variant="h4">
                  Login to your account!
                </LoginHeading>
                <Images source={GoogleImage} alt="Not Found" styling="loginwithgoogle" />                
                <div className='inputbox' style={{marginTop:"33px", display:"flex", flexDirection:"column", rowGap:"60px" }} >
                  <InputBox variant="standard" placeholder="Email Addres"/>
                  <InputBox variant="standard" placeholder="Password"/>
                </div>
                <div className='login_btn'>
                  <Button style={{padding:"25px 10px", fontSize:"20px"}} fullWidth variant="contained" href="#">
                    Login to Continue
                  </Button>
                </div>
                <p className='sing_up'>Don’t have an account ? <span>Sign up</span></p>
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
