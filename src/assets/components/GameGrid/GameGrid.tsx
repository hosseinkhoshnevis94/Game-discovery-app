import useGames from "../../hooks/useGames";
import { Text, SimpleGrid, Box } from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacingX="20px"
        spacingY="20px"
      >
        {games.map(game => (
          <GameCard game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
