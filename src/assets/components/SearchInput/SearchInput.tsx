import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useRef } from "react";
import useGameStore from "../../../store";
import { useNavigate } from "react-router-dom";


export const SearchInput = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  const setSearch = useGameStore(s=>s.setSearch)
  return (
    <Stack spacing={4} >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchInputRef.current) {
            setSearch(searchInputRef?.current.value);
            navigate('/')

          }
        }}
      >
        <InputGroup>
          <Input size={{base:'sm',md:'lg'}}  ref={searchInputRef}  placeholder="Search Somthing..." />
          <InputRightElement >
            <FiSearch ></FiSearch>
          </InputRightElement>
        </InputGroup>
      </form>
    </Stack>
  );
};
