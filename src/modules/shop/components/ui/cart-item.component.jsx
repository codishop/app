import { VStack, Flex, HStack, Box, IconButton, Image, Text } from '@chakra-ui/react';
import { BsDash, BsPlus, BsTrash } from 'react-icons/bs';
import PropTypes from 'prop-types';
import React from 'react';
import QuantitySelectorComponent from './quantity-selector.component';

const CartItem = ({ key, imageSrc, name, reference, price, tam, quantity, onChangeQuantity, onRemove }) => {
    return (
        <Flex key={key} borderBottom="1px" borderColor="gray.200" px={2}>
            <Flex w="100%" justify="space-between">
                <Flex>
                    <Image src={imageSrc} alt={name} boxSize="80px" />
                    <Flex flexDir='column' justifyContent='center' pl={4}>
                        <Box>
                            <Text>{name}</Text>
                            <Text fontSize="9px" fontWeight="thin" color="gray.500">{reference}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="11px" fontWeight='bold'>Tamanho: {tam}</Text>
                        </Box>
                    </Flex>
                </Flex>
                <QuantitySelectorComponent quantity={quantity} onChange={onChangeQuantity} />
                <Flex flexDir='column'>
                    <IconButton icon={<BsTrash color='red'/>} aria-label="Remover" variant="ghost" size="sm" onClick={() => { onRemove() }} />
                    <Text fontSize="14px" fontWeight='bold'>{price}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

CartItem.propTypes = {
    id: PropTypes.number,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    reference: PropTypes.string,
    price: PropTypes.string,
    tam: PropTypes.string,
    quantity: PropTypes.number,
};

export default CartItem;
