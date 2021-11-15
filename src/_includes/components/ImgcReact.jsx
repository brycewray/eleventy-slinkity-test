import React from 'react'

export default function ImgcReact({
  url, 
  alt='Image ALT',
  width,
  height,
  tmpl='none'
}) {
  render: 'static'

  var divClass = ''
  var imgClass = ''
  var nscClass = ''
  var dataSzes = ''

  var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
  var LQIPpholder = 'f_auto,q_1,w_20/' // note ending slash
  var xFmPart1 = 'f_auto,q_auto:eco,w_'
  var xFmPart2 = ',x_0,z_1/' // note ending slash
  const sz0300 = cloudiBase + xFmPart1 + "300" + xFmPart2 + url + " 300w"
  const sz0600 = cloudiBase + xFmPart1 + "600" + xFmPart2 + url + " 600w"
  const sz0900 = cloudiBase + xFmPart1 + "900" + xFmPart2 + url + " 900w"
  const sz1200 = cloudiBase + xFmPart1 + "1200" + xFmPart2 + url + " 1200w"
  const sz1500 = cloudiBase + xFmPart1 + "1500" + xFmPart2 + url + " 1500w"
  
  switch(tmpl) {
    /* === 'index' case used with home page when it had a hero image (pre-Jan. 2021)
    case 'index':
      divClass = `h-full`
      imgClass = `object-cover object-center h-full w-full containedImage animate-fade`
      nscClass = `imgCover hero`
      dataSzes = `100vw`
      break
    */
    case 'posts':
      divClass = `relative`
      imgClass = `w-full h-auto`
      nscClass = `w-full h-auto`
      dataSzes = `(min-width: 1024px) 100vw, 50vw`
      break
    default:
      divClass = `relative`
      imgClass = `w-full h-auto lazy`
      nscClass = `w-full h-auto`
      dataSzes = `(min-width: 1024px) 100vw, 50vw`
  }
  
  return (
    <>
    <div className={`${divClass} bg-center bg-no-repeat bg-cover`}>
      <img alt={alt} className={nscClass} src={sz0600} alt={alt} aspect-ratio={`${width} / ${height}`} srcSet={`${sz0300}, ${sz0600}, ${sz0900}, ${sz1200}, ${sz1500}`} width={width} height={height} loading="lazy" sizes={dataSzes} />
    </div>
    </>
  )
}