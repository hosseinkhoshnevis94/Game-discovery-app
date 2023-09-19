import { Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './assets/components/NavBar/NavBar'
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
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.100' area={'header'}>
  <NavBar></NavBar>
  </GridItem>
  <Show above='lg'>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  </Show>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>

</Grid>
    
    </>
  )
}

export default App