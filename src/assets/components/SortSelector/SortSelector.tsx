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

interface SoreSelectorProps{
    onSelect: (selectedSort:string|null) => void,
    selectedSort:string | null
}

const SortSelector = ({ onSelect,selectedSort }:SoreSelectorProps) => {
    const [isOpen,setIsOpen] = useState(false)
    const sortOrder =[
        {value:"",label:"Relevance"},
        {value:"-added",label:"Date added"},
        {value:"name",label:"Name"},
        {value:"-released",label:"Release date"},
        {value:"-metacritic",label:"Popularity"},
        {value:"-rating",label:"Average rating"},
    ]

    const selectedSortName = sortOrder.find(item => item.value==selectedSort)
  return (
    <Menu>
      <MenuButton
        as={Button}
        onClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        rightIcon={isOpen == true ? <BsChevronUp /> : <BsChevronDown />}
      >
       Sort By: {selectedSort===''||selectedSort==null ? 'Relevance' : selectedSortName?.label}
      </MenuButton>
      <MenuList>
       {sortOrder.map( item => 
         <MenuItem value={item.value} key={item.value} onClick={()=>onSelect(item.value)}>{item.label}</MenuItem>
         )}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
