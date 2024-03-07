import EditableCardComponent from '../common/editable-card.component';
import PreviewFormComponent from '../common/preview-form.component';
import FormComponent from '../common/form.component';
import { CiUser } from 'react-icons/ci';
import React from 'react'
import { Box, Text } from '@chakra-ui/react';

const ContactFormComponent = (props) => {
    const [model, setModel] = React.useState(props.model)

    const fields = [
        [
            { w: '60%', id: 'name', title: 'Nome', preview: 'true', fontSize: '16px' },
            { w: '40%', id: 'phone', title: 'Celular' }
        ],
        { id: 'email', title: 'E-mail', preview: 'true' },
    ];

    return (
        <EditableCardComponent editable editing={props.editing} model={model} title='COMPRADOR' icon={<CiUser />} onEdit={props.onEdit} submitText='Confirmar contato' onSubmit={props.onSubmit}>
            {
                props.editing
                &&
                <FormComponent fields={fields} model={model} setModel={setModel} />
                ||
                model &&
                <Box mt={4}>
                    <Text>{model.name}</Text>
                    <Text fontSize='sm'>{model.email}</Text>
                </Box>
            }
        </EditableCardComponent>
    )
}

export default ContactFormComponent