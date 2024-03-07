import { HStack, IconButton, Box, Text } from '@chakra-ui/react';
import { BsDash, BsPlus } from 'react-icons/bs';
import React from 'react';

const QuantitySelectorComponent = ({ quantity, onChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onChange(quantity + 1);
  };

  return (
    <HStack spacing={2} align="center">
      <IconButton icon={<BsDash />} size="sm" variant="ghost" onClick={handleDecrease} />
      <Box borderWidth="1px" borderRadius="md" p={2} w="30px" h="30px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
        <Text>{quantity}</Text>
      </Box>
      <IconButton icon={<BsPlus />} size="sm" variant="ghost" onClick={handleIncrease} />
    </HStack>
  );
};

export default QuantitySelectorComponent;
