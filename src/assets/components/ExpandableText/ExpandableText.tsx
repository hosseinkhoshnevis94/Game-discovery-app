import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string | any;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Prop) => {
  const [expanded, setExpanded] = useState(false);
  const summaryText = children.substring(0, limit) + "...";

  return (
    <Text lineHeight={'32px'} textAlign={'justify'} fontSize={'20px'}>
      {expanded ? children : summaryText}
      <Button
        variant={expanded ? "outline" : "solid"}
        marginLeft={'8px'}
        colorScheme="cyan"
        size={"sm"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "less" : "more..."}
      </Button>
    </Text>
  );
};

export default ExpandableText;
