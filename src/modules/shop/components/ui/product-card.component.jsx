import { Box, Flex, Image, Text, Button, Select } from '@chakra-ui/react';
import React, { useState } from 'react';

const ProductCard = ({ key, id, imageSrc, name, price, onAddCart }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedSize, setSelectedSize] = useState('P');

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleAddToCart = () => {
        onAddCart({
            id: id, 
            imageSrc: imageSrc,
            name: name,
            price: price,
            quantity: 1,
            tam: selectedSize
        })
    };

    return (
        <Box position="relative" mb={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} fontFamily='Roboto'>
            <Image src={imageSrc} alt={name} width='340px' height='520px' objectFit="cover" bgColor='lightgray' fontWeight='thin' />
            <Text fontSize='large' mt={2}>{name}</Text>
            <Flex w='100%' minH='44px' alignItems="center" justifyContent='center'>
                {isHovered ? (
                    <Select value={selectedSize} onChange={handleSizeChange} maxW='100px' mt={2}>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                    </Select>
                ) : (
                    <Text>{price}</Text>
                )}
            </Flex>

            <Button variant="outline" size="sm" mt={4} onClick={handleAddToCart}>
                Adicionar à Sacola!
            </Button>
        </Box>
    );
};

export default ProductCard;