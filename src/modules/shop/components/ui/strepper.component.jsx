import { Box, Step, StepIndicator, Stepper, StepStatus, StepTitle } from '@chakra-ui/react'
import React from 'react'

const StepperComponent = (props) => {
    return (
        <Stepper size={props.size || 'sm'} colorScheme={props.color || 'green'} index={props.step || 0} gap={8}>
            {props?.steps?.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus complete={step.icon} incomplete={step.icon} active={step.icon} />
                    </StepIndicator>
                    <Box flexShrink='0'>
                        <StepTitle fontSize="l">{step.title}</StepTitle>
                    </Box>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperComponent;
