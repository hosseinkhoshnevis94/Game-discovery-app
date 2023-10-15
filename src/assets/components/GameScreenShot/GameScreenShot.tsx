import useScreenShot from "../../hooks/useScreenShot";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId?: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);
if (isLoading) return null
if( error) throw error
  return (
    <SimpleGrid height={'100px'}   spacing={'5px'} columns={{ base: 1, md: 2 }}>
      {data?.results.map((screenshot) => (
        <Image borderRadius={'5px'} src={screenshot.image} key={screenshot.id}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
