import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}
const Score = ({ score }: ScoreProps) => {
    const color = score > 4 ? 'green' : score > 3 ? "Yellow" :'red'
  return (
    <>
      <Badge colorScheme={color}>{score}</Badge>
    </>
  );
};

export default Score;
