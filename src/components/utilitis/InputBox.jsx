import { TextField } from '@mui/material'
import React from 'react'

const InputBox = ({variant, placeholder, styling}) => {
  return (
   <TextField fullWidth id="outlined-basic" label={placeholder} variant={variant} className={styling}/>
  )
}

export default InputBox
