import React from 'react';
import { Box, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, HStack, Image, Text, IconButton, Divider, Input, InputGroup, InputRightElement, Spacer, InputLeftElement, Flex, InputLeftAddon } from '@chakra-ui/react';
import { FaTrash, FaMinus, FaPlus, FaTicketAlt, FaIdCard, FaMapMarker } from 'react-icons/fa';
import { BsCheck, BsDash, BsPlus, BsTrash } from 'react-icons/bs';
import CartItem from './cart-item.component';
import InputComponent from '../common/input.component';
import { useNavigate } from 'react-router-dom';

const CartDrawerComponent = ({ isOpen, onClose, items, setItems }) => {
    const navigate = useNavigate()

    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((item, i) => i !== index);
        setItems(updatedItems);
    };

    const handleChangeQuantity = (index, newQuantity) => {
        setItems((prevItems) =>
            prevItems.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item))
        );
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal;


    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent minW='600px'>
                <DrawerCloseButton />
                <DrawerHeader>Minha Sacola</DrawerHeader>
                <DrawerBody>
                    <Flex flexDir='column'>
                        <Box maxH="calc(100vh - 320px)" overflowY="auto">
                            {items?.map((item, index) => (
                                <CartItem {...item} key={index} onRemove={() => { handleRemoveItem(index) }} onChangeQuantity={(newQuantity) => handleChangeQuantity(index, newQuantity)} />
                            ))}
                        </Box>
                        <Divider my={2} />
                        <Box minH='200px'>
                            <Flex flexDir='column' gap={4} py={4}>
                                <Flex w='100%' justifyContent='space-between' alignItems='center'>
                                    <Text fontWeight="bold" fontSize='12px'>Cupom de desconto:</Text>
                                    <InputComponent icon={<FaIdCard color="gray.300" />} action={() => { }} />
                                </Flex>
                                <Flex w='100%' justifyContent='space-between' alignItems='center'>
                                    <Text fontWeight="bold" fontSize='12px'>Código do vendedor:</Text>
                                    <InputComponent icon={<FaIdCard color="gray.300" />} action={() => { }} />
                                </Flex>
                                <Flex w='100%' justifyContent='space-between' alignItems='center'>
                                    <Text fontWeight="bold" fontSize='12px'>Calcular o frete:</Text>
                                    <InputComponent icon={<FaIdCard color="gray.300" />} action={() => { }} />
                                </Flex>
                            </Flex>
                            <Flex flexDir='column' gap={2} py={2}>
                                <HStack w="100%" justify="space-between">
                                    <Text fontSize='sm'>Subtotal:</Text>
                                    <Text fontSize='sm'>R$ {subtotal}</Text>
                                </HStack>
                                <Divider />
                                <HStack w="100%" justify="space-between">
                                    <Text fontWeight="bold" fontSize='sm'>Total:</Text>
                                    <Text>R$ {total}</Text>
                                </HStack>
                            </Flex>
                            <Flex flexDir='row' gap={4}>
                                <Button colorScheme='black' variant="outline" size="sm" w="100%" borderRadius={0}>Continuar Comprando</Button>
                                <Button borderRadius={0} variant="ghost" size="sm" w="100%" bgColor='black' color='white' onClick={() => { navigate('checkout') }}>Finalizar compra</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default CartDrawerComponent;
