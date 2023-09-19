import { useColorMode,Switch ,HStack ,Text} from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch size={'lg'}  isChecked={colorMode=='dark'} onChange={toggleColorMode}></Switch> 
      <Text>{colorMode=='dark' ? 'Light' : "Dark"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
