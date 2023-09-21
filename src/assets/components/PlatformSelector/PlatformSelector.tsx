import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button}>Platforms</MenuButton>
      <MenuList>
        {error ? (
          <Text>Try agian!</Text>
        ) : (
          platforms.map((p) => <MenuItem key={p.id}>{p.name}</MenuItem>)
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
