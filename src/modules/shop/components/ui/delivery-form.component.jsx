import EditableCardComponent from '../common/editable-card.component';
import PreviewFormComponent from '../common/preview-form.component';
import FormComponent from '../common/form.component';
import { CiHome } from 'react-icons/ci';
import React from 'react'
import CepService from '../../../../services/cep.service';
import RadioCardComponent from './radio-card.component';
import { Box, Flex, Text } from '@chakra-ui/react';

const DeliveryFormComponent = (props) => {
    const [address, setAddress] = React.useState(props?.model?.address);
    const [service, setService] = React.useState();

    const handleCepChange = async (value) => {
        if (value.length >= 8) {
            const cepAddress = await CepService.getAddress(value);
            if (cepAddress)
                setAddress({
                    ...cepAddress,
                    complement: cepAddress.complemento,
                    neighborhood: cepAddress.bairro,
                    street: cepAddress.logradouro,
                    city: cepAddress.localidade,
                    state: cepAddress.uf,
                    cep: cepAddress.cep,
                })
        }
    }

    const handleSubmit = () => {
        var model = {
            address: address,
            serviceType: service.title,
            servicePrice: service.price
        }
        props.onSubmit(model)
        console.log(model)
    }

    const fields = [
        [
            { w: '35%', id: 'cep', title: 'Cep', mask: 'xxxxx-xxx', onChange: handleCepChange },
            { w: '65%', id: 'address', title: 'Endereço', preview: 'true', fontSize: '16px' },
        ],
        [
            { id: 'number', title: 'Número' },
            { id: 'complement', title: 'Complemento' },
        ],
        [
            { id: 'neighborhood', title: 'Bairro' },
            { id: 'city', title: 'Cidade' },
            { id: 'state', title: 'Estado' },
        ],
    ];

    return (
        <EditableCardComponent editable={address != undefined} editing={props.editing} title='ENTREGA' icon={<CiHome />} submitText='Confirmar entrega' onEdit={props.onEdit} onSubmit={handleSubmit}>
            {
                props.editing
                &&
                <>
                    <FormComponent fields={fields} model={address} setModel={setAddress} />
                    <Flex my={4} flexDir='column' gap={4}>
                        {
                            props?.services?.map((item, index) => {
                                return (
                                    <RadioCardComponent key={index} {...item} isSelected={service?.title === item.title} onSelect={setService} />
                                )
                            })
                        }
                    </Flex>
                </>
                ||
                address &&
                <Box mt={4}>
                    <Text>{address.address}, {address.number}</Text>
                    <Text fontSize='sm'>{address.neighborhood}, {address.city} - {address.neighborhood}</Text>
                </Box>
                ||
                <Text fontSize='sm' mt={4}>Aguardando o preenchimento dos dados</Text>
            }
        </EditableCardComponent>
    )
}

export default DeliveryFormComponent