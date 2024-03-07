import { Button, Flex, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const SimpleTableComponent = (props) => {
    return (
        <TableContainer w='100%' bg='white' boxShadow='md' borderRadius={8} flex={1} {...props}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        {
                            props.headers?.map((o, i) => (
                                <Td key={i}>{o}</Td>
                            ))
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {props.children}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default SimpleTableComponent