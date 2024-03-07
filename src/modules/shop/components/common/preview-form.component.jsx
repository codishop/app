import { Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PreviewFormComponent = (props) => {
    const PreviewText = (item) => {
        if (item?.preview == 'true' && props?.model[item.id] !== undefined)
            return (<Text fontSize={item.fontSize || 'sm'}>{props?.model[item.id]}</Text>)
    }

    return (
        <VStack mt={2} align="start">
            {
                props?.fields?.map((item, index) => (
                    <Stack key={index} direction={{ base: 'column', md: 'row' }} w="100%">
                        {
                            Array.isArray(item) ? (
                                item.map((field, i) => {
                                    return <PreviewText key={i} {...field}/>
                                })
                            ) : (
                                <PreviewText key={index} {...item}/>
                            )
                        }
                    </Stack>
                ))
            }
        </VStack>
    )
}

export default PreviewFormComponent