import { Grid, GridItem, Show, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid/GameGrid'
import GameHeading from '../components/GameHeading/GameHeading'
import GenreList from '../components/GenreList/GenreList'
import PlatformSelector from '../components/PlatformSelector/PlatformSelector'
import SortSelector from '../components/SortSelector/SortSelector'

const HomePage = () => {
  return (
    <>
         <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"nav main"`,
        }}
        gridTemplateRows={"200px 1fr"}
        gridTemplateColumns={{base:"1fr",lg:"1fr 5fr"}}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <Show above="lg">
          <GridItem paddingTop={"50px"} pl="2" area={"nav"}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem
          pl="2"
          paddingX={"15px"}
          paddingY={"50px"}
          paddingBottom={"150px"}
          area={"main"}
        >
          <HStack
            paddingBottom={"25px"}
            borderBottom={"1px solid #c9c6c6"}
            marginBottom={"15px"}
            display={"flex"}
            align={"center"}
            justifyContent={"space-between"}
          >
            <GameHeading ></GameHeading>
            <HStack paddingLeft={"30px"} paddingTop={"5px"}>
              <PlatformSelector></PlatformSelector>
              <SortSelector></SortSelector>
            </HStack>
          </HStack>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage