import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import InputComponent from '../common/input.component'

const CartInputComponent = (props) => {
    const Icon = props.icon;
    return (
        <Flex w='100%' justifyContent='space-between' alignItems='center'>
            <Text fontWeight="bold" fontSize='12px'>{props.title}</Text>
            <InputComponent w={props.w} icon={<Icon color="gray.300" />} onAction={props.onAction} />
        </Flex>
    )
}

export default CartInputComponent