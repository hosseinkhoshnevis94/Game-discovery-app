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

  return <Heading marginTop={'15px'}>{filters !== 0 && heading}</Heading>;
};

export default GameHeading;
