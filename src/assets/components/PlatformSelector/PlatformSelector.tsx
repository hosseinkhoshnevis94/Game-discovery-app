import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/useGames";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import {useState} from 'react'


interface PlatformSelectorProps {
onSelect:(P:Platform|null) => void,
selectedPlatform:Platform|null
}

const PlatformSelector = ({onSelect,selectedPlatform}:PlatformSelectorProps) => {
  const[isOpen,setIsOpen] = useState(false)
  const { data: platforms, error } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} onClick={()=>setIsOpen(!isOpen)} isActive={isOpen} rightIcon={ isOpen==true ? <BsChevronUp /> : <BsChevronDown/>}>{selectedPlatform ? `Platform: ${selectedPlatform.name}` : "Platform: All"}</MenuButton>
      <MenuList>
      <MenuItem onClick={()=>onSelect(null)}>All</MenuItem>
        {error ? (
          <Text>Try agian!</Text>
        ) : (
          platforms.map((platform) => <MenuItem  onClick={()=>onSelect(platform)} key={platform.id}>{platform.name}</MenuItem>)
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
