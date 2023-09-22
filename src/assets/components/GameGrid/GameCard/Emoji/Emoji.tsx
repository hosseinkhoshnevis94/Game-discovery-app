import { Image, ImageProps } from '@chakra-ui/react'
import smile from '../../../../../../public/images/smile-emoji.png'
import sad from '../../../../../../public/images/sad-emoji.png'
import poker from '../../../../../../public/images/poker-emoji.png'
interface EmojiProps{
    rating:number
}

const Emoji = ({rating}:EmojiProps) => {
const emojies:{[key:number]: ImageProps }={
    3:{src:sad,alt:'weak'},
    4:{src:poker,alt:'normal'},
    5:{src:smile,alt:'great'}
}

console.log();


  return (
    <>
    <Image width={"20px"} {...emojies[rating]} ></Image>

    </>
  )
}

export default Emoji