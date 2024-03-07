import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card
      width="250px"
      borderRadius={10}
      overflow="hidden"
      boxShadow="15px 15px 15px rgba(0,0,0,.1)"
    >
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
