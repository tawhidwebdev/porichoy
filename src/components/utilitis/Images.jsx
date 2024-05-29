import React from 'react'

const Images = ({source, alt, styling}) => {
  return (
    <picture>
      <img src={source} alt={alt} className={styling} />
    </picture>
  )
}

export default Images
