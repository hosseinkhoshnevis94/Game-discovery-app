import { Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './assets/components/NavBar/NavBar'
import GameGrid from './assets/components/GameGrid/GameGrid'
import GenreList from './assets/components/GenreList/GenreList'
const App = () => {
  return (
    <>
    <Grid
  templateAreas={{
    base:`"header header"
    "main main"`,
    lg:`"header header"
    "nav main"`
  }}
  gridTemplateRows={'80px 1fr'}
  gridTemplateColumns={'1fr 5fr'}
  h='200px'
  gap='1'
  fontWeight='bold'
>
  <GridItem pl='2'  area={'header'}>
  <NavBar></NavBar>
  </GridItem>
  <Show above='lg'>
  <GridItem pl='2'  area={'nav'}>
    <GenreList></GenreList>
  </GridItem>
  </Show>
  <GridItem pl='2'  area={'main'}>
    <GameGrid></GameGrid>
  </GridItem>
</Grid>
    
    </>
  )
}

export default App