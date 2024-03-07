import { Badge, Button, Flex, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import SimpleTableComponent from '../../components/common/simple-table.component'
import React from 'react'

const OrdersPage = () => {
    const tableHeaders = ['Pedido', 'Data', 'Método', 'Pagamento', 'Envio', 'Valor Total']

    return (
        <Flex flex={1} flexDir='column'>
            <Flex w='100%' justifyContent='space-between' mb={4}>
                <Heading>Pedidos</Heading>
            </Flex>

            <SimpleTableComponent headers={tableHeaders}>
                <Tr>
                    <Td w='20%'>#123456</Td>
                    <Td>24 Jan, 2023</Td>
                    <Td>Crédito - à vista</Td>
                    <Td><Badge colorScheme='green'>Concluído</Badge></Td>
                    <Td><Badge>Pendente</Badge></Td>
                    <Td>R$ 250,00</Td>
                </Tr>
            </SimpleTableComponent>
        </Flex >
    )
}

export default OrdersPage