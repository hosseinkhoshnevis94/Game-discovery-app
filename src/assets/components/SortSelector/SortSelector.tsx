import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
} from "@chakra-ui/react";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { useState} from 'react'



const SortSelector = ({ onSelect }:any) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <Menu>
      <MenuButton
        as={Button}
        onClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        rightIcon={isOpen == true ? <BsChevronUp /> : <BsChevronDown />}
      >
"sort"
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelect(null)}>All</MenuItem>
        <MenuItem>"item"</MenuItem>
        <MenuItem>"item"</MenuItem>
        <MenuItem>"item"</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
