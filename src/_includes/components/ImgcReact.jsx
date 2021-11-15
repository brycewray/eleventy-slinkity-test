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
        loading="lazy" 
        publicId={src} 
        alt={alt}
      >
        <Placeholder />
        <Transformation 
          quality="auto" 
          fetchFormat="auto" 
          width="auto" 
          crop="scale"
         />
      </Image>
    </CloudinaryContext>
  )
}