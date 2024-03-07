import { Badge, Card, Divider, Flex, Heading, Table, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'

const CustomerPage = () => {
    return (
        <Flex flexDir='column' gap={4}>
            <Heading fontSize='24px'>Visualizando Fulano</Heading>
            <Flex gap={4}>
                <Card p={4} w='100%'>
                    <Text fontSize='sm' fontWeight='bold' mb={2}>Histórico de compras</Text>
                    <Table size='sm'>
                        <Tr>
                            <Td w='20%'>#123456</Td>
                            <Td>24 Jan, 2023</Td>
                            <Td><Badge colorScheme='green'>PAGO</Badge></Td>
                            <Td><Badge colorScheme='green'>ENTREGA CONCLUÍDA</Badge></Td>
                            <Td textAlign='end'>R$ 210,00</Td>
                        </Tr>
                    </Table>
                </Card>
                <Card p={4} w='350px'>
                    <Text fontSize='sm' fontWeight='bold'>Dados pessoais</Text>
                    <Text fontSize='sm'>Fulano de tal bezerra</Text>
                    <Text fontSize='sm'>123.456.789-10</Text>
                    <Divider my={2} />
                    <Text fontSize='sm' fontWeight='bold'>E-mail</Text>
                    <Text fontSize='sm'>fulano.de-tal@email.com</Text>
                    <Divider my={2} />
                    <Text fontSize='sm' fontWeight='bold'>Telefone</Text>
                    <Text fontSize='sm'>(99) 99999-9999</Text>
                    <Divider my={2} />
                    <Text fontSize='sm' fontWeight='bold' mb={2}>Situação</Text>
                    <Badge colorScheme='green' w='44px'>ATIVO</Badge>
                </Card>
            </Flex>
        </Flex>
    )
}

export default CustomerPage