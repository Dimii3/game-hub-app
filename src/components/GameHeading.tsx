import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading
      fontSize="5xl"
      textAlign={"left"}
      marginBottom={4}
      paddingLeft={2}
      as="h1"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
