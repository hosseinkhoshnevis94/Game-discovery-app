import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../../App";

interface p {
  header: GameQuery;
}

const GameHeading = ({ header }: p) => {
  const heading = `${header?.selectedPlatform?.name || ""} ${
    header?.selectedGenre?.name || ""
  } games`;
  const filters = Object.keys(header).length;

  return <Heading display={{base:'none',md:'inline-block'}} fontSize={'24px'} fontWeight={'400'} >{filters !== 0 && heading}</Heading>;
};

export default GameHeading;
