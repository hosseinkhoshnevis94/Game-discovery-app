import React from "react";
import DiscriptionCard from "./DiscriptionCard/DiscriptionCard";
import { Game } from "../../hooks/useGames";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Score from "../Score/Score";

interface Props {
  game?: Game;
}

const GameDiscription = ({ game }: Props) => {
  return (
    <SimpleGrid rowGap={'28px'} columnGap={'30px'} columns={2} s paddingTop={'125px'}>
      <DiscriptionCard heading="Platforms">
        {game?.parent_platforms.map((p) => (
          <Text>{p.platform.name}</Text>
        ))}
      </DiscriptionCard>
      <DiscriptionCard heading="Score">
        <Score score={game?.rating}></Score>
      </DiscriptionCard>
      <DiscriptionCard heading="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DiscriptionCard>
      <DiscriptionCard heading="Publisher">
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DiscriptionCard>
    </SimpleGrid>
  );
};

export default GameDiscription;
