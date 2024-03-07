import { FormControl, Input, InputGroup, InputLeftAddon, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import InputComponent from './input.component'

const FormComponent = (props) => {
    return (
        <VStack mt={4} spacing={4} align="start">
            {
                props?.fields?.map((item, index) => (
                    <Stack key={index} direction={{ base: 'column', md: 'row' }} spacing={4} w="100%">
                        {
                            Array.isArray(item) ? (
                                item.map((field, i) => {
                                    return <InputComponent key={i} value={props.model && props.model[field.id] || ''} setValue={props.setModel} {...field} />
                                })
                            ) : (
                                <InputComponent key={index} value={props.model && props.model[item.id] || ''} setValue={props.setModel} {...item} />
                            )
                        }
                    </Stack>
                ))
            }
        </VStack>
    )
}

export default FormComponent