import React, { useState } from 'react';
import { Box, Flex, Text, Input, IconButton, Image, Stack } from '@chakra-ui/react';

const ImageUploadCard = (props) => {
    const handleImageChange = (e, index) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                const newImages = [...props.images];
                newImages[index] = base64;
                props.setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleRemoveImage = (index) => {
        const images = [...props.images];
        images.splice(index, 1)

        props.setImages(images);
    };

    return (
        <Flex wrap="wrap">
            {props?.images?.map((imageUrl, index) => (
                <Box key={index} mr={2} mb={2} position="relative">
                    <Image src={imageUrl} alt={`Imagem ${index + 1}`} w="100px" h="100px" objectFit="cover" borderRadius="md" />
                    <IconButton size="sm"
                        colorScheme="red"
                        aria-label="Remover Imagem"
                        position="absolute"
                        top="2"
                        right="2"
                        onClick={() => handleRemoveImage(index)}    
                    />
                </Box>
            ))}
            {props?.images?.length < 4 && (
                <Box>
                    <Input type="file" display="none" onChange={(e) => handleImageChange(e, props?.images?.length)} accept="image/*" id="image-input" />
                    <label htmlFor="image-input">
                        <Stack spacing={2} align="center" justify="center" w="100px" h="100px" border="2px dashed" borderRadius="md" cursor="pointer">
                            <Text fontSize="sm">Adicionar</Text>
                        </Stack>
                    </label>
                </Box>
            )}
        </Flex>
    );
};

export default ImageUploadCard;
