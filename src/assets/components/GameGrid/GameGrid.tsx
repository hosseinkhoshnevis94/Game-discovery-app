import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard/GameCard";
import GameCardSkeleton from "./GameCardSkeleton/GameCardSkeleton";

interface GameGridProps {
  gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:GameGridProps) => {
  const { error, data:games, isLoading } = useGames(gameQuery);
  const skeletonNumber = [0,1,2,3,4,5,6,7,8,9,10]


  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacingX="20px"
        spacingY="20px"
        paddingTop={'30px'}
        >
        {isLoading && skeletonNumber.map( () => <GameCardSkeleton></GameCardSkeleton>)}
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
