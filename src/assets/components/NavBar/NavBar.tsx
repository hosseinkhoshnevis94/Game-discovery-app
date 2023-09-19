import {  HStack ,Image,Text} from '@chakra-ui/react'
import logo from '../../../../public/images/logo.png'
const NavBar = () => {
  return (
    <>
    <HStack height={"100%"} display={'flex'}  justifyContent={'flex-start'}  alignItems={'center'}>
        <Image src={logo} boxSize={'60px'}></Image>
        <Text>Game Discovery app</Text>
    </HStack>
    </>
  )
}

export default NavBar