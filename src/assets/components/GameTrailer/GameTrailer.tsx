import React from "react";
import useTrailer from "../../hooks/useTrailer";
import { AspectRatio, Box } from "@chakra-ui/react";

interface Props {
  gameId?: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return null;
 const src = data?.results[0]

  return  src ? (

    <AspectRatio maxW='100%' ratio={2}>
    <video
    controls
    poster={src.preview}
    src={src?.data[480]}
    ></video>
</AspectRatio>

  ) : null
};

export default GameTrailer;
