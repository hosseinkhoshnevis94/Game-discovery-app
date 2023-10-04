import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image
} from "@chakra-ui/react";
import useCropImage from "../../../hooks/useCropImage";
import { Game } from "../../../hooks/useGames";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import Emoji from "./Emoji/Emoji";
import PlatformIconList from "./PlatformIconList/PlatformIconList";
import Score from "./Score/Score";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {

  return (
    <>
        <GameCardContainer>
          <Card boxShadow={'md'}  >
            <CardHeader padding={0}>
              <Image objectFit={'cover'} width={'100%'} src={useCropImage(game.background_image)}></Image>
            </CardHeader>
            <CardBody  >
              <HStack justifyContent="space-between">
                <Heading fontWeight={'500'} fontSize={"22px"}>{game.name}</Heading>
                <Score score={game.rating}></Score>
              </HStack>
              <HStack paddingY={'12px'} justifyContent={'space-between'}>
              <PlatformIconList
                platforms={game.parent_platforms.map(
                  ({ platform }) => platform
                  )}
                  ></PlatformIconList>
                  <Emoji rating={game.rating_top}></Emoji>
                  </HStack>
            </CardBody>
          </Card>
        </GameCardContainer>
    
    </>
  );
};

export default GameCard;
