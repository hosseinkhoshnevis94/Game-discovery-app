import { Heading } from "@chakra-ui/react";
import useGameStore from "../../../store";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameStore(s=>s.gameQuery.genreId)
  const genre = useGenre(genreId)
  
  const platformId = useGameStore(s=>s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } games`;
  return (
    <Heading
      display={{ base: "none", md: "inline-block" }}
      fontSize={"24px"}
      fontWeight={"400"}
    >
      {genre?.id !== null || platform?.id !== null && heading}
    </Heading>
  );
};

export default GameHeading;
