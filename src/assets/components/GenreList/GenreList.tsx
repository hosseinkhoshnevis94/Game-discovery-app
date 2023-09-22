import { Button, HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import GenresSkeleton from "./GenresSkeleton/GenresSkeleton";
import useCropImage from "../../hooks/useCropImage";

interface GenreListProps{
  onSelect: (genre:Genre) => void,
  selectedGenre:Genre | null
}

const GenreList = ({onSelect,selectedGenre}:GenreListProps) => {
  const { data: genres, isLoading } = useGenres();

   

  if(isLoading) return( <GenresSkeleton></GenresSkeleton> )
  return  (
    <>
    <Heading  paddingLeft={'30px'} paddingBottom={'20px'} fontSize={'26px'} fontWeight={'500'}>Genres</Heading>
    <List paddingLeft={'20px'}>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingLeft={"5px"} >
          <HStack paddingY={"15px"}width={'100%'} >
            <Button display={'flex'} justifyContent={'flex-start'} width={'100%'} padding={'5px'} border={genre.id==selectedGenre?.id ? '1px solid #49ff18' : '0px'}  onClick={()=>{onSelect(genre)}} variant='link'>
            <Image
              boxSize="50px"
              borderRadius={"6px"}
              src={useCropImage(genre.image_background)}
            ></Image>
            <Text paddingLeft={'15px'}>{genre.name}</Text>
               
               </Button>
          </HStack>
        </ListItem>
      ))
      }
    </List>
    </>
    )
};

export default GenreList;
