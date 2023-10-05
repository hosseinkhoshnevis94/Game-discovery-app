import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText/ExpandableText";
import GameDiscription from "../components/GameDiscription/GameDiscription";

const GamePage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  console.log(game);
  if (isLoading) return <Spinner></Spinner>;
  // if(error || !game) throw error

  return (
    <Box  padding={'20px 60px'}>
      <Heading as={'h2'} fontSize={'40px'}  fontWeight={'600'} paddingY={'40px'}>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameDiscription game={game}></GameDiscription>
    </Box>
  );
};

export default GamePage;
