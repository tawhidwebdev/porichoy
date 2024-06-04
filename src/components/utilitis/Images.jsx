import React from 'react'

const Images = ({source, alt, styling, onClick}) => {
  return (
    <picture>
      <img src={source} alt={alt} className={styling} onClick={onClick} />
    </picture>
  )
}

export default Images
