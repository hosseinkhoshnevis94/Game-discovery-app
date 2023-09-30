import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./assets/components/NavBar/NavBar";
import GameGrid from "./assets/components/GameGrid/GameGrid";
import GenreList from "./assets/components/GenreList/GenreList";
import { Genre } from "./assets/hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./assets/components/PlatformSelector/PlatformSelector";
import { Platform } from "./assets/hooks/useGames";
import SortSelector from "./assets/components/SortSelector/SortSelector";
import GameHeading from "./assets/components/GameHeading/GameHeading";

export interface GameQuery {
  selectedGenre:Genre|null,
  selectedPlatform:Platform|null,
  selectedSort:string | null,
  searchInput: string | null

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
        gridTemplateRows={"160px 1fr"}
        gridTemplateColumns={"1fr 5fr"}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <NavBar onSearch={(searchInput)=>setGamequery({...gameQuery,searchInput})}></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem paddingTop={'50px'} pl="2" area={"nav"}>
            <GenreList
              selectedGenre={gameQuery.selectedGenre}
              onSelect={(selectedGenre) =>setGamequery({...gameQuery,selectedGenre})}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem pl="2" paddingX={'15px'} paddingY={'50px'} paddingBottom={'150px'} area={"main"}>
          <HStack
            paddingBottom={"25px"}
            borderBottom={"1px solid #c9c6c6"}
            marginBottom={"15px"}
            display={'flex'}
            align={'center'}
            justifyContent={'space-between'}
          >
            <GameHeading header={gameQuery}></GameHeading>
            <HStack paddingLeft={'30px'} paddingTop={'5px'}>
            <PlatformSelector
              onSelect={(selectedPlatform) => setGamequery({...gameQuery,selectedPlatform})}
              selectedPlatform={gameQuery.selectedPlatform}
              ></PlatformSelector>
            <SortSelector selectedSort={gameQuery.selectedSort} onSelect={(selectedSort) => setGamequery({...gameQuery, selectedSort})}></SortSelector>
              </HStack>
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
