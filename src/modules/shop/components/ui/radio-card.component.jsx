import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const RadioCardComponent = (props) => {
    return (
        <Box w='100%'>
            <Flex w='100%' borderWidth="1px" p={4} cursor="pointer" borderColor={props.isSelected ? 'teal.500' : 'gray.200'} onClick={() => { props.onSelect(props) }} justifyContent='space-between'>
                <Flex align="center">
                    <Box mr={2} fontSize="lg" color={props.isSelected ? 'teal.500' : 'gray.300'}>
                        {props.isSelected ? <FaCheckCircle /> : <FaCircle />}
                    </Box>
                    <Text fontSize="sm" fontWeight="bold">{props.title}</Text>
                </Flex>
                <Box flex="1" textAlign="right">
                    {props.description && <Text fontSize="sm" color="gray.500" mt={2}>{props.description}</Text>}
                </Box>
                <Box flex="1" textAlign="right">
                    {props.price && <Text fontSize="sm" fontWeight="bold" mt={2}>{props.price}</Text>}
                </Box>
            </Flex>
        </Box>
    );
}

export default RadioCardComponent