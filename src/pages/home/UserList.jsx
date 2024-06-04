import React from 'react'
import './home.css'
import { Avatar, Box, Button } from '@mui/material'
import ProfilePhotos from '../../assets/images/home/profile_photos.jpg'

const UserList = () => {
  return (
    <>
      <Box height={427}
           width={462}
           borderRadius={8}
           padding={3}
           boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.30)"}
           sx={{ }}>
           <h3 className='card__heading'>User List</h3>
          <Box marginTop={2}
               display={'flex'}
               flexWrap={'wrap'}
               rowGap={4}
               sx={{overflowY:"scroll", height:"350px", scrollbarWidth:"none"}}
               
               >
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}>
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar sx={{width:"70px", height:"70px"}} alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'space-between'}
                 width={"100%"}
                 padding={"10px 5px"}
                 borderRadius={2}
                 bgcolor={"#a4afbf"}
                 sx={{cursor:"pointer"}}
                 >
              <Box display={'flex'}
                   alignItems={'center'}
                   columnGap={2}>
                <picture>
                  <Avatar alt="Cindy Baker" src={ProfilePhotos} />
                </picture>
                <Box>
                  <h4 className='profile__name'>Friends Reunion</h4>
                  <span className='profile__bio'>Hi Guys, Wassup!</span>
                </Box>
              </Box>
              
              <Box marginLeft={7}>
                <Button style={{backgroundColor:"#5F35F5", color:"#fff", fontSize:"20px", fontWeight:"600"}} variant="contained" href="#contained-buttons">
                  Accept
                </Button>
              </Box>
            </Box>
          </Box>
      </Box>
    </>
  )
}

export default UserList
