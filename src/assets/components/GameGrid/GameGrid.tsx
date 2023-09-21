import useGames from "../../hooks/useGames";
import { Text, SimpleGrid, Box } from "@chakra-ui/react";
import GameCard from "./GameCard/GameCard";
import { Genre } from "../../hooks/useGenres";
import GameCardSkeleton from "./GameCardSkeleton/GameCardSkeleton";

interface GameGridProps {
  selectedGenre:Genre | null
}
const GameGrid = ({selectedGenre}:GameGridProps) => {
  const { error, data:games, isLoading } = useGames(selectedGenre);
  const skeletonNumber = [0,1,2,3,4,5,6,7,8,9,10]


  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacingX="20px"
        spacingY="20px"
        >
        {isLoading && skeletonNumber.map( skeleton => <GameCardSkeleton></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
