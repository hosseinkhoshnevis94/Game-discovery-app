import { Box, Heading, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    heading:string,
    children: ReactNode | ReactNode[]
}

const DiscriptionCard = ({heading,children}:Props) => {
  return (
    <Box>
    <Text marginBottom={'15px'} color={'cyan.500'} as={'dt'} fontSize={'24px'} >{heading}</Text>
    <dd>
    {children}
    </dd>
    </Box>
  )
}

export default DiscriptionCard