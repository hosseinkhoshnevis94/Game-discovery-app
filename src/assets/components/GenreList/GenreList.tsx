import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenresSkeleton from "./GenresSkeleton/GenresSkeleton";
import useCropImage from "../../hooks/useCropImage";

const GenreList = () => {
  const { data: genres, isLoading,error } = useGenres();
   

  if(isLoading) return( <GenresSkeleton></GenresSkeleton> )
  if(error!=='canceled') return( 
    <HStack paddingTop={'50vh'} height={'100%'} align={'flex-start'} justifyContent={'center'}>
  <Text>Try again!</Text> 
    </HStack>
  )
  return  (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingLeft={"5px"}>
          <HStack paddingY={"5px"}>
            <Image
              boxSize="50px"
              borderRadius={"6px"}
              src={useCropImage(genre.image_background)}
            ></Image>
            <Text> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))
      }
    </List>
    )
};

export default GenreList;
