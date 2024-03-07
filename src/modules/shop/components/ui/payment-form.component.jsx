import EditableCardComponent from '../common/editable-card.component';
import RadioCardComponent from './radio-card.component';
import { CiCreditCard1 } from 'react-icons/ci';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react'

const PaymentFormComponent = (props) => {
    const [model, setModel] = React.useState(props.model)
    const [method, setMethod] = React.useState();

    const handleMethodChange = (value) => {
        setModel({ ...method, method: value });
        setMethod(value);
    }

    return (
        <EditableCardComponent editing={props.editing} model={model} title='PAGAMENTO' icon={<CiCreditCard1 />} submitText='Realizar pagamento' onSubmit={props.onSubmit}>
            {
                props.editing
                &&
                <>
                    <Flex my={4} flexDir='column' gap={4}>
                        {
                            props?.methods?.map((item, index) => {
                                return (
                                    <RadioCardComponent key={index} {...item} isSelected={method?.title === item.title} onSelect={setMethod} />
                                )
                            })
                        }
                    </Flex>
                </>
                ||
                <Text fontSize='sm' mt={4}>Aguardando o preenchimento dos dados</Text>
            }
        </EditableCardComponent>
    )
}

export default PaymentFormComponent