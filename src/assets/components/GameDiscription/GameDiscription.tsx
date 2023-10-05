import DiscriptionCard from "./DiscriptionCard/DiscriptionCard";
import { Game } from "../../hooks/useGames";
import {  SimpleGrid, Text } from "@chakra-ui/react";
import Score from "../Score/Score";

interface Props {
  game?: Game;
}

const GameDiscription = ({ game }: Props) => {
  return (
    <SimpleGrid rowGap={{base:'5px',md:'30px'}} columnGap={{base:'5px',md:'30px'}} columns={2}  paddingTop={'125px'}>
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
