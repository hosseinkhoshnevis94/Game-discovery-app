import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenresSkeleton from "./GenresSkeleton/GenresSkeleton";
import useCropImage from "../../hooks/useCropImage";
import useGameStore from "../../../store";



const GenreList = () => {
  const { data: genres, isLoading } = useGenres();
  const selectedGenreId = useGameStore(s => s.gameQuery.genreId)
  const  setSelectedGenreId = useGameStore(s => s.setGenreId)

  if (isLoading) return <GenresSkeleton></GenresSkeleton>;
  return (
    <>
      <Heading
        paddingLeft={"30px"}
        paddingBottom={"20px"}
        fontSize={"26px"}
        fontWeight={"500"}
      >
        Genres
      </Heading>
      <List paddingLeft={"20px"}>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingLeft={"5px"}>
            <HStack  width={"100%"}>
              <Button
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                padding={"5px"}
                background={
                  genre.id == selectedGenreId && "#25DCDF" 
                }
                background={
                  genre.id == selectedGenreId && "linear-gradient(to right, #25DCDF 12%, #B736C3 100%)" 
                }
                webkit-background-clip={
                  genre.id == selectedGenreId && "text"
                }
                webkit-text-fill-color={
                  genre.id == selectedGenreId && "transparent"
                }
                onClick={() => {
                  setSelectedGenreId(genre.id);
                }}
                variant="link"
              >
                <Image
                  boxSize="50px"
                  borderRadius={"6px"}
                  src={useCropImage(genre.image_background)}
                ></Image>
                <Text paddingLeft={"15px"}>{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
