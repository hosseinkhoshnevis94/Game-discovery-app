
import noImage from '/images/no-image.jpg'

const useCropImage = (url:string) =>{
    if(url==null) return noImage
    const target = 'media/'
const  index = url.indexOf(target) + target.length
return url.slice(0,index)+'crop/600/400/'+url.slice(index)

}
export default useCropImage