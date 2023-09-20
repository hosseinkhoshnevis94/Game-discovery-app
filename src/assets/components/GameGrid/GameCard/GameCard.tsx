import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../../../hooks/useGames";
import PlatformIconList from "./PlatformIconList/PlatformIconList";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <>
      <Card borderRadius={"10px"} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading>{game.name}</Heading>
         <PlatformIconList platforms={game.platforms.map(({platform}) => platform)}></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
