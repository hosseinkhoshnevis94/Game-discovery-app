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
interface PlatformSelectorProps {
onSelect:(P:Platform|null) => void,
selectedPlatform:Platform|null
}

const PlatformSelector = ({onSelect,selectedPlatform}:PlatformSelectorProps) => {
  const { data: platforms, error } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button}>{selectedPlatform ? `Platform: ${selectedPlatform.name}` : "Platform: All"}</MenuButton>
      <MenuList>
      <MenuItem onClick={()=>onSelect(null)}>All</MenuItem>
        {error ? (
          <Text>Try agian!</Text>
        ) : (
          platforms.map((platform) => <MenuItem onClick={()=>onSelect(platform)} key={platform.id}>{platform.name}</MenuItem>)
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
