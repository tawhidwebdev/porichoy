import { TextField } from '@mui/material'
import React from 'react'

const InputBox = ({id, name, type, value, placeholder, variant, styling, onChange}) => {
  return (
   <TextField fullWidth id={id} name={name} type={type} value={value} label={placeholder} variant={variant} className={styling} onChange={onChange}/>
  )
}

export default InputBox
