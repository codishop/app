import { Badge, Button, Flex, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import SimpleTableComponent from '../../components/common/simple-table.component'
import React from 'react'

const CustomersPage = () => {
    const tableHeaders = ['Nome', 'Email', 'Criação', 'Situação',]

    return (
        <Flex flex={1} flexDir='column'>
            <Flex w='100%' justifyContent='space-between' mb={4}>
                <Heading fontSize='20px'>Clientes</Heading>
            </Flex>
            <SimpleTableComponent headers={tableHeaders}>
                <Tr>
                    <Td w='20%'>Fulano de tal</Td>
                    <Td>fulano.de-tal@email.com</Td>
                    <Td>24 Jan, 2023</Td>
                    <Td><Badge colorScheme='green'>ATIVO</Badge></Td>
                </Tr>
            </SimpleTableComponent>
        </Flex >
    )
}

export default CustomersPage