import React from 'react'
import DashBoardLayout from '../../Layouts/DashBoard/DashBoardLayout'
// import FormJobAd from '../../Components/FormJobAd/FormJobAd'
import FormUpdateUser from '../../Components/FormUpdateUser/FormUpdateUser'
import { Flex, useColorModeValue } from '@chakra-ui/react'

function UpdateUserPage() {
  return (
    <>
    <DashBoardLayout children={<Flex height={"90vh"} mt={4} bg={useColorModeValue("white","blackAlpha.400")} justifyContent={"center"} alignItems={"center"}>
        <FormUpdateUser/>
    </Flex>} />
    
    </>
  )
}

export default UpdateUserPage