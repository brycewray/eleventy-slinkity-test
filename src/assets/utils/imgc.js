/*
This shortcode takes the following form...
  {% imgcHero url, alt, width, height, tmpl %}
...with url in the form of (note NO leading or ending slash):
  filename.ext
...and 'temp[late]' optional in body copy. The template is used to specify
hero images on post pages ('posts'). Without this parameter, the `switch`
statement below defaults to body copy-style image-handling.
The `animate-fade` CSS class is from the Tailwind CSS config file.
*/

const md5 = require('md5')
const respSizes = [ 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500 ]
var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
var LQIPholder = 'f_auto,q_1,w_20/' // note ending slash
var xFmPart1 = 'f_auto,q_auto:eco,w_'
var xFmPart2 = ',x_0,z_1/' // note ending slash

module.exports = (url, alt, width, height, tmpl) => {
  var imgBmd5 = md5(url)

  if (!tmpl) tmpl == "none"

  switch(tmpl) {
    /* === 'index'case used with home page when it had a hero image (pre-Jan. 2021)
    case 'index':
      divClass = `h-full`
      imgClass = `nScrHidden object-cover object-center h-full w-full containedImage animate-fade`
      nscClass = `imgCover hero`
      dataSzes = `100vw`
      break
    */
    case 'posts':
      divClass = `relative imgB-${imgBmd5}`
      imgClass = `nScrHidden w-full h-auto animate-fade`
      nscClass = `w-full h-auto`
      dataSzes = `(min-width: 1024px) 100vw, 50vw`
      break
    default:
      divClass = `relative imgB-${imgBmd5}`
      imgClass = `w-full h-auto lazy`
      nscClass = `w-full h-auto`
      dataSzes = `(min-width: 1024px) 100vw, 50vw`
  }

  var stringtoRet = ``
  var arrayFromLoop = []

  stringtoRet = `
  <style nonce="DhcnhD3khTMePgXw">.imgB-${imgBmd5} {background-image: url(${cloudiBase + LQIPholder + url})}</style>
  <div class="${divClass} bg-center bg-no-repeat bg-cover">
  <noscript>
    <img class="${nscClass}" src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + url}" aspect-ratio="${width} / ${height}" alt="${alt}" />
  </noscript>
  <img class="${imgClass}" ${tmpl != 'posts' ? `data-` : ``}src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + url}" ${tmpl != 'posts' ? `data-` : ``}srcset="`
    respSizes.forEach(size => {
      if (size <= width) {
        arrayFromLoop.push(`${cloudiBase + xFmPart1 + size + xFmPart2 + url} ${size}w`)
      }
    })
    stringtoRet += arrayFromLoop.join(', ')
    // h/t https://stackoverflow.com/questions/2047491/how-to-remove-last-comma
    stringtoRet += `" aspect-ratio="${width} / ${height}" alt="${alt}" width="${width}" height="${height}"`
    if (tmpl !== "posts") {
      stringtoRet += ` loading="lazy"` // not good for above-the-fold images
    }
    stringtoRet +=` sizes="${dataSzes}" />
  </div>`

  return stringtoRet
}
