import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useRef } from "react";

interface SearchinputProps{
    onSearch: (searchInput:string | null) => void
}

export const SearchInput = ({onSearch}:SearchinputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <Stack spacing={4} width={"40%"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchInputRef.current) {
            onSearch(searchInputRef?.current.value)
          }
        }}
      >
        <InputGroup>
          <Input ref={searchInputRef}  placeholder="Search Somthing..." />
          <InputRightElement>
            <FiSearch></FiSearch>
          </InputRightElement>
        </InputGroup>
      </form>
    </Stack>
  );
};
