import {  HStack ,Image,Text} from '@chakra-ui/react'
import logo from '../../../../public/images/logo.png'
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch'
const NavBar = () => {
  return (
    <>
    <HStack paddingX={'15px'} borderBottom={'1px solid #efefef'} height={"100%"} display={'flex'}  justifyContent={'space-between'}  alignItems={'center'}>
        <Image src={logo} boxSize={'60px'}></Image>
        <Text as={'h3'} fontSize={'28px'}>Game Discovery app</Text>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
    </>
  )
}

export default NavBar 