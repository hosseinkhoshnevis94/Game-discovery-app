import useTrailer from "../../hooks/useTrailer";
import { AspectRatio, Box, Text } from "@chakra-ui/react";

interface Props {
  gameId?: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  const src = data?.results[0];
  if (isLoading) return null;
  if (error) throw error;
  return src ? (
    <AspectRatio maxW="100%" ratio={2}>
      <video controls poster={src.preview} src={src?.data[480]}></video>
    </AspectRatio>
  ) : (
    <Box
      border={"1px solid"}
      borderColor={"cyan.700"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Text>Sorry! Video is not Available</Text>{" "}
    </Box>
  );
};

export default GameTrailer;
