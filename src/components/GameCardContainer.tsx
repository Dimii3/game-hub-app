import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      boxShadow="15px 15px 15px rgba(0,0,0,.1)"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
