import {  Box, HStack ,Text} from '@chakra-ui/react'
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch'
import { SearchInput } from '../SearchInput/SearchInput'
import styles from './NavBar.module.css'
interface NavBarProps{
  onSearch: (s:string|null) => void
}
const NavBar = ({onSearch}:NavBarProps) => {
  return (
    <Box marginTop={'55px'}  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'stretch'} height={'100%'} width={'100%'}>
    <HStack  width={'100%'}  display={'flex'}  justifyContent={'center'}  alignItems={'center'}>
        {/* <Image src={logo} boxSize={'60px'}></Image> */}
        <Text className={styles.header} as={'h3'} fontWeight={'800'} fontSize={{base:'30px',md:'38px'}}>Game Discovery app</Text>
    </HStack>
    <HStack paddingX={'15px'} width={'100%'}  paddingBottom={'25px'} paddingTop={{base:'35px',md:'0px'}}  display={'flex'}  justifyContent={'space-between'}  alignItems={'center'}>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
    </Box>
  )
}

export default NavBar 