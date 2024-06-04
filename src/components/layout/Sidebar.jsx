import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import React from 'react'
import ProfileImg from '../../assets/images/sidebar/profile.png'
import "./layout.css"
import { MdHome } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {


  return (
    <>
      <Box sx={{width:"100%", height:"100vh", padding:"30px"}}>
        <Box sx={{width:"100%", height:"100vh", backgroundColor:"#5F35F5", borderRadius:"20px" }}>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <Box sx={{marginTop:"24px"}}>
              <Avatar
                alt="Remy Sharp"
                src={ProfileImg}
                sx={{ width:100, height:100, border:2, borderColor:'white' }}
              />
            </Box>
            <Box sx={{marginTop:"70px", display:"flex", flexDirection:"column", alignItems:"center", }}>
            <List style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"40px", fontSize:"40px"}}>
                <ListItem disablePadding>
                  <ListItemButton href="/home">
                    <ListItemIcon style={{color:"black"}}>
                      <MdHome />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="/message">
                    <ListItemIcon style={{color:"black"}}>
                      <AiOutlineMessage />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="/notification">
                    <ListItemIcon style={{color:"black"}}>
                      <IoMdNotificationsOutline />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="/settings">
                    <ListItemIcon style={{color:"black"}}>
                    <IoSettingsOutline />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box sx={{marginTop:"80px", fontSize:"40px", color:"black"}}>
              <IoIosLogOut />
            </Box>
          </Box>         
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
