import React from 'react'
import {Image, Placeholder, Transformation, CloudinaryContext} from 'cloudinary-react'

export default function ImgcReact({
  src, 
  alt='Image ALT'
}) {
  render: 'lazy'
  return (
    <CloudinaryContext cloudName="brycewray-com">
      <Image 
        dpr="auto" 
        responsive 
        responsiveUseBreakpoints="true" 
        width="auto" 
        loading="lazy" 
        publicId={src} 
        alt={alt}
      >
        <Placeholder />
        <Transformation 
          quality="auto" 
          fetchFormat="auto"
         />
      </Image>
    </CloudinaryContext>
  )
}