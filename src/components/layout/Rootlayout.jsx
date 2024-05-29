import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Box, Grid, Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Rootlayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2}>
              <Sidebar/>
            </Grid>
            <Grid item xs={10}>
              <Outlet/>
            </Grid>
          </Grid>
      </Box>

    </>
  )
}

export default Rootlayout
