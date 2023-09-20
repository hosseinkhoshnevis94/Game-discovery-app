import { Card, CardBody, CardHeader, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card borderRadius="10px" overflow="hidden">
        <CardHeader>
            <Skeleton startColor='red.500' endColor='yellow.300' height='250px'></Skeleton>
        </CardHeader>
        <CardBody>
            <SkeletonText startColor='red.500' endColor='yellow.300'></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton