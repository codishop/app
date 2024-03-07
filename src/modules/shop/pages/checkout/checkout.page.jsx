import StepperComponent from '../../components/ui/strepper.component'
import DeliveryFormComponent from '../../components/ui/delivery-form.component';
import PaymentFormComponent from '../../components/ui/payment-form.component';
import ContactFormComponent from '../../components/ui/contact-form.component';
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { FaMapMarker, FaUser } from 'react-icons/fa';
import { BsCash } from 'react-icons/bs';
import CartFormComponent from '../../components/ui/cart-form.component';
import useLocalState from '../../../../hooks/local-state.hook';

const steps = [
    { title: 'CONTATO', icon: <FaUser /> },
    { title: 'ENTREGA', icon: <FaMapMarker /> },
    { title: 'PAGAMENTO', icon: <BsCash /> },
]

const services = [
    { title: 'Correios - PAC', description: 'Chegará em 4 dias', price: '11,50' },
    { title: 'Correios - Sedex', description: 'Chegará em 2 dias', price: '18,50' }
]

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useLocalState('cart', []);
    const [order, setOrder] = React.useState({})
    const [step, setStep] = React.useState(0);

    const handleContactSubmit = (model) => {
        setOrder({ ...order, contact: model })
        setStep(1);
    }

    const handleDeliverySubmit = (model) => {
        setOrder({ ...order, delivery: model })
        setStep(2);
    }

    const handlePaymentSubmit = (model) => {
        setOrder({ ...order, payment: model, products: [cartItems?.map((item) => new { ...item.reference, ...item.quantity })] })
        setStep(3);
    }
    

    return (
        <>
            <Box display='flex' flexDir='column' alignContent='center' p={8}>
                <Flex justifyContent='center'>
                    <StepperComponent size='lg' step={step} steps={steps} />
                </Flex>
            </Box>

            <Flex px={24} py={12} justifyContent='center' gap={12}>
                <Flex flexDir='column' gap={12}>
                    <Flex p={0} w='650px' flexDir={step == 2 ? 'row' : 'column'} gap={12}>
                        <ContactFormComponent editing={step === 0} model={order.contact} onEdit={() => { setStep(0) }} onSubmit={handleContactSubmit} />
                        <DeliveryFormComponent editing={step === 1} model={order.delivery} services={services} onEdit={() => { setStep(1) }} onSubmit={handleDeliverySubmit} />
                    </Flex>
                    <PaymentFormComponent editing={step === 2} model={order.payment} onSubmit={handlePaymentSubmit} />
                </Flex>
                <CartFormComponent items={cartItems} setItems={setCartItems} />
            </Flex>
        </>
    )
}

export default CheckoutPage