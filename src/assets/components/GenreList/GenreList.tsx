import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import GenresSkeleton from "./GenresSkeleton/GenresSkeleton";
import useCropImage from "../../hooks/useCropImage";
import useGames from "../../hooks/useGames";

interface GenreListProps{
  onSelect: (genre:Genre) => void,
  selectedGenre:Genre | null
}

const GenreList = ({onSelect,selectedGenre}:GenreListProps) => {
  const { data: genres, isLoading } = useGenres();

   

  if(isLoading) return( <GenresSkeleton></GenresSkeleton> )
  // if(error!=='canceled') return( 
  //   <HStack paddingTop={'50vh'} height={'100%'} align={'flex-start'} justifyContent={'center'}>
  // <Text>Try again!</Text> 
  //   </HStack>
  // )
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
            <Button color={genre.id==selectedGenre?.id ? 'red' : 'white'} onClick={()=>{onSelect(genre)}} variant='link'> {genre.name}</Button>
          </HStack>
        </ListItem>
      ))
      }
    </List>
    )
};

export default GenreList;
