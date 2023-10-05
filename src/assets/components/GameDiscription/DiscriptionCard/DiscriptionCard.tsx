import { Box, Heading, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    heading:string,
    children: ReactNode | ReactNode[]
}

const DiscriptionCard = ({heading,children}:Props) => {
  return (
    <Box padding={'10px 30px'}>
    <Text borderBottom={"1px solid "} borderColor={'cyan.700'} marginBottom={'15px'} color={'cyan.500'} as={'dt'} fontSize={'24px'} >{heading}</Text>
    <dd>
    {children}
    </dd>
    </Box>
  )
}

export default DiscriptionCard