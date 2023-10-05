import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import usePlatforms from "../../hooks/usePlatforms";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import useGameStore from "../../../store";
import usePlatform from "../../hooks/usePlatform";

const PlatformSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: platforms, error } = usePlatforms();
  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(platformId);


  return (
    <Menu>
      <MenuButton
        as={Button}
        onClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        rightIcon={isOpen == true ? <BsChevronUp /> : <BsChevronDown />}
      >
        {selectedPlatform
          ? `Platform: ${selectedPlatform.name}`
          : "Platform: All"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedPlatformId(null)}>All</MenuItem>
        {error ? (
          <Text>Try agian!</Text>
        ) : (
          platforms?.results.map((platform) => (
            <MenuItem
              onClick={() => setSelectedPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
