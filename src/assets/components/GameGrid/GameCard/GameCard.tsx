import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../../../hooks/useGames";
import PlatformIconList from "./PlatformIconList/PlatformIconList";
import Score from "./Score/Score";
import useCropImage from "../../../hooks/useCropImage";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <>
      <Card borderRadius={"10px"} overflow={"hidden"}>
        <Image src={useCropImage(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent='space-between'>
            <Heading>{game.name}</Heading>
            <Score score={game.rating}></Score>
          </HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
