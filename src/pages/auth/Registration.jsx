import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import "./auth.css"
import Images from '../../components/utilitis/Images'
import RegistrationImage from '../../assets/images/registration/registration__img.jpg'
import InputBox from '../../components/utilitis/InputBox'
import Button from '@mui/material/Button';


const RegistrationHeading = styled(Typography)({
  color: "#03014C",
  fontSize: "33px",
  marginBottom: "13px",
  fontWeight:"700px"
})

const Registration = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} style={{}}>
            <Grid item xs={6} style={{display:"flex", alignItems:"center", justifyContent:'center', flexDirection:'column'}}>
              <div style={{ padding:"20px", borderRadius:"16px"}} >
                <RegistrationHeading variant="h4">
                  Get started with easily register
                </RegistrationHeading>
                <p style={{color:"#11175D", fontSize:"20px", opacity:"0.5",}}>Free register and you can enjoy it</p>               
                <div className='inputbox' style={{marginTop:"60px", display:"flex", flexDirection:"column", rowGap:"55px", }} >
                  <InputBox variant="outlined" placeholder="Email Address"/>
                  <InputBox variant="outlined" placeholder="Full name"/>
                  <InputBox variant="outlined" placeholder="Password"/>
                </div>
                <div className='singup_btn'>
                  <Button style={{padding:"25px 10px", fontSize:"20px", backgroundColor:"#5F35F5", borderRadius:"86px"}} fullWidth variant="contained" href="#">
                    Sign up
                  </Button>
                </div>
                <p className='sing_in'>Already have an account ? <a href="/">Sign in</a></p>
              </div>
            </Grid>
            <Grid item xs={6} style={{}}>
              <div style={{width:"100%", height:"100vh"}}>
                <Images source={RegistrationImage} alt="NOt Found" styling="loginimg" />
              </div>
            </Grid>
          </Grid>
      </Box>
    </>
  )
}

export default Registration
