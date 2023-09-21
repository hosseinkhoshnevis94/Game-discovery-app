import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingLeft={'5px'}>
          <HStack paddingY={'5px'}>
            <Image boxSize='50px' borderRadius={'6px'} src={genre.image_background}></Image>
            <Text>{' '}{genre.name}</Text>
          </HStack>
          </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
