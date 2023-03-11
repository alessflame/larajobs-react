import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function NotFoundSection({message}) {
  return (
    <Box mt={8}><Heading size="md">{message?message: ""}</Heading></Box>
  )
}

export default NotFoundSection