import { HStack, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      {isRouteErrorResponse(error) && (
        <>
          <HStack
            display={"flex"}
            width={"100%"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Text fontSize={"40px"} fontWeight={"500"}>
              OOOps!
            </Text>
            <Text fontSize={"30px"}>This page doesnt exist!</Text>
            <HStack
              display={"flex"}
              fontSize={"22px"}
              color={"cyan"}
              width={"100%"}
              marginTop={"40px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AiFillHome></AiFillHome>
              <Link to={"/"}>To HomePage</Link>
            </HStack>
          </HStack>
        </>
      )}
    </>
  );
};

export default ErrorPage;
