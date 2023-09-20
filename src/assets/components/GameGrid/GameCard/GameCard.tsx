import { Card, CardBody, CardHeader, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import useGames, { Game } from "../../../hooks/useGames";
import PlatformIconList from "./PlatformIconList/PlatformIconList";
import Score from "./Score/Score";
import useCropImage from "../../../hooks/useCropImage";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  const {isLoading} = useGames()
  return (
    <>
    {isLoading ? <GameCardSkeleton></GameCardSkeleton> :
      <Card borderRadius="10px" overflow="hidden">
        <CardHeader>
        <Image src={useCropImage(game.background_image)}></Image>
        </CardHeader>
        <CardBody>
          <HStack justifyContent='space-between'>
            <Heading fontSize={"22px"}>{game.name}</Heading>
            <Score score={game.rating}></Score>
          </HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
            ></PlatformIconList>
        </CardBody>
      </Card>
          }
    </>
  );
};

export default GameCard;
