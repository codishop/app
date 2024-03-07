import { Box, Button, Image, Text, Divider, VStack, IconButton, HStack, Flex } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import React from 'react';

const CartNotificationComponent = ({ isOpen, onClose, item, onOpenCart }) => {
    if (!isOpen) return null;

    return (
        <Box w='350px' position="fixed" top="2rem" right="2rem" borderRadius="md" py={4} px={8} boxShadow="md" zIndex="9999" bgColor='white'>
            <Flex align="center" justify="space-between">
                <Text fontSize='lg' fontWeight="bold">Adicionado à sacola!</Text>
                <IconButton icon={<FaTimes />} onClick={onClose} aria-label="Fechar" bg="transparent" />
            </Flex>
            <Divider />
            <VStack spacing={4} align="start">
                <HStack>
                    <Image src={item.imageSrc} alt={item.name} boxSize="80px" />
                    <VStack align='start'>
                        <HStack>
                            <Text>{item.quantity}x</Text>
                            <Text fontSize='lg' fontWeight="bold">{item.name}</Text>
                        </HStack>
                        <Text>{`${item.price}`}</Text>
                    </VStack>
                </HStack>
            </VStack>
            <VStack>
                <Button variant='outline' size='sm' borderRadius={0} w='100%' onClick={() => onOpenCart()}>
                    Ver Carrinho
                </Button>
                <Button w='100%' variant="ghost" size='sm' onClick={onClose}>
                    Continuar Comprando
                </Button>
            </VStack>
        </Box>
    );
};

export default CartNotificationComponent;
