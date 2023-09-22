import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./assets/components/NavBar/NavBar";
import GameGrid from "./assets/components/GameGrid/GameGrid";
import GenreList from "./assets/components/GenreList/GenreList";
import { Genre } from "./assets/hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./assets/components/PlatformSelector/PlatformSelector";
import { Platform } from "./assets/hooks/useGames";
import SortSelector from "./assets/components/SortSelector/SortSelector";

export interface GameQuery {
  selectedGenre:Genre|null,
  selectedPlatform:Platform|null,

}

const App = () => {
  const [gameQuery,setGamequery]=useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header header"
    "main main"`,
          lg: `"header header"
    "nav main"`,
        }}
        gridTemplateRows={"80px 1fr"}
        gridTemplateColumns={"1fr 5fr"}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" area={"nav"}>
            <GenreList
              selectedGenre={gameQuery.selectedGenre}
              onSelect={(selectedGenre) =>setGamequery({...gameQuery,selectedGenre})}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <HStack
            padding={"25px 0px"}
            borderBottom={"1px solid #efefef"}
            marginBottom={"15px"}
          >
            <PlatformSelector
              onSelect={(selectedPlatform) => setGamequery({...gameQuery,selectedPlatform})}
              selectedPlatform={gameQuery.selectedPlatform}
            ></PlatformSelector>
            <SortSelector></SortSelector>
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
