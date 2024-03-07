import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input, InputLeftAddon, InputRightElement, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { BsCheck } from 'react-icons/bs';

const InputComponent = (props) => {
    const handleChange = (event) => {
        const { value } = event.target;

        if (props.setValue)
            props.setValue((model) => ({ ...model, [props.id]: event.target.value }));

        if (props.onChange) {
            props.onChange(value);
        }

        console.log(props.value);
    };

    return (
        <FormControl w={props.w || '100%'} p={0}>
            {props.title && <FormLabel>{props.title}</FormLabel>}
            <InputGroup size='sm' p={0}>
                {props.icon && <InputLeftAddon children={props.icon} />}
                <Input size={props.size || 'sm'} placeholder={props?.placeholder != undefined && props.placeholder || ''} value={props.value || ''} onChange={handleChange}/>
                {props.onAction && (
                    <InputRightElement>
                        <Button variant="outline" size='sm' borderRadius={0} p={0} bg="rgba(190, 166, 105, 1)" color='white' onClick={() => { props.onAction() }}>
                            <BsCheck size='14px' />
                        </Button>
                    </InputRightElement>
                )}
            </InputGroup>
        </FormControl>
    );
};

InputComponent.propTypes = {
    icon: PropTypes.node,
    placeholder: PropTypes.string.isRequired,
    action: PropTypes.node,
    width: PropTypes.string,
};

export default InputComponent;
