import { Box, Button, Divider, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaIdCard } from 'react-icons/fa'
import CartInputComponent from './cart-input.component'
import CartItem from './cart-item.component'

const CartFormComponent = (props) => {

    const subtotal = props?.items?.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal;

    return (
        <Box p={4} bg='gray.50' w='500px'>
            <Text align='center' fontSize="l">RESUMO DO PEDIDO</Text>
            <Flex flex={1} flexDir='column' justifyContent='space-between' h='100%' py={2}>
                <Flex flex={1} flexDir='column' gap={2}>
                    {props?.items?.map((item, index) => (
                        <CartItem {...item} key={index} onRemove={props.handleRemoveItem} />
                    ))}
                </Flex>
                <Box>
                    <Flex flexDir='column' gap={2} py={4} flex={1}>
                        <HStack w="100%" justify="space-between">
                            <Text fontSize='sm'>Frete:</Text>
                            <Text fontSize='sm'>R$11,85</Text>
                        </HStack>
                        <HStack w="100%" justify="space-between">
                            <Text fontSize='sm'>Subtotal:</Text>
                            <Text fontSize='sm'>R$ {subtotal}</Text>
                        </HStack>
                        <Divider />
                        <HStack w="100%" justify="space-between">
                            <Text fontWeight="bold">Total:</Text>
                            <Text>R$ {total}</Text>
                        </HStack>
                    </Flex>
                    {/* <Flex flexDir='row' gap={4}>
                        <Button colorScheme='black' variant="outline" size="sm" w="100%" borderRadius={0}>Continuar Comprando</Button>
                        <Button borderRadius={0} variant="ghost" size="sm" w="100%" bgColor='black' color='white'>Finalizar compra</Button>
                    </Flex> */}
                </Box>
            </Flex>
        </Box>

    )
}

export default CartFormComponent