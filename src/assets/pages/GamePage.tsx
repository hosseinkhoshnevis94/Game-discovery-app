import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText/ExpandableText";
import GameDiscription from "../components/GameDiscription/GameDiscription";
import GameTrailer from "../components/GameTrailer/GameTrailer";
import GameScreenShot from "../components/GameScreenShot/GameScreenShot";
import BackToTop from "../components/BackToTop/BackToTop";

const GamePage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if(error) throw error
  if (isLoading) return <Spinner></Spinner>;


  return (
    <SimpleGrid columnGap={'80px'} rowGap={{base:'20px',md:'150px'}} columns={{base:1,md:2}}  padding={{base:'10px',md:'100px 60px'}}>
      <Box>
      <Heading as={'h2'} fontSize={'40px'}  fontWeight={'600'}  paddingY={{base:'5px',md:"40px"}}>{game?.name}</Heading>
      <GameTrailer gameId={game?.id} ></GameTrailer>
      </Box>
      <GameDiscription game={game}></GameDiscription>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameScreenShot gameId={game?.id}></GameScreenShot>
      <BackToTop></BackToTop>
    </SimpleGrid>
  );
};

export default GamePage;
