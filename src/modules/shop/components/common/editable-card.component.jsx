import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { CiEdit } from 'react-icons/ci';
import React from 'react'

const EditableCardComponent = (props) => {
    return (
        <Box p={4} bg='gray.50' w='100%'>
            <Flex justifyContent='space-between'>
                <Flex align="center">
                    <Box mr={2} fontSize="2xl">
                        {props.icon}
                    </Box>
                    <Text fontSize="l">{props.title}</Text>
                </Flex>
                {props.editable && !props.editing && <CiEdit onClick={() => props.onEdit()} />}
            </Flex>
            <Box w='100%'>
                {props.children}
            </Box>
            {
                props.editing &&
                <Flex justifyContent='end' mt={8}>
                    <Button onClick={() => { props.onSubmit(props.model) }} borderRadius={0} variant="outline" size="sm" w="50%" bgColor='black' color='white'>{props.submitText}</Button>
                </Flex>
            }
        </Box>
    )
}

export default EditableCardComponent;