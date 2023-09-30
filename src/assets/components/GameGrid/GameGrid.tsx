import React from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard/GameCard";
import GameCardSkeleton from "./GameCardSkeleton/GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletonNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacingX="20px"
        spacingY="20px"
        paddingTop={"30px"}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCard key={game.id} game={game}></GameCard>
            ))}
          </React.Fragment>
        ))}
        {isLoading &&
          skeletonNumber.map(() => <GameCardSkeleton></GameCardSkeleton>)}
      </SimpleGrid>
     {hasNextPage && <Button
        size={"lg"}
        isLoading={isFetchingNextPage}
        marginLeft="50%"
        marginTop="40px"
        loadingText='Loading'
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='start'
        onClick={() => fetchNextPage()}
      >
        more...
      </Button>}
    </Box>
  );
};

export default GameGrid;
