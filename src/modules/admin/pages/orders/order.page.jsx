import React from 'react';
import { BsBagCheck } from 'react-icons/bs'
import { Button, Card, Divider, Flex, Text, Image, Box, Stepper, Step, StepIndicator, StepStatus, StepDescription, StepTitle, StepNumber, StepIcon, StepSeparator, Badge, Heading } from '@chakra-ui/react';

const OrderPage = () => {
  const products = [
    { name: 'Camiseta', reference: 'REF123', size: 'M', color: 'Azul', quantity: 2, price: 'R$ 50', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Calça', reference: 'REF456', size: 'G', color: 'Preto', quantity: 1, price: 'R$ 80', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const steps = [
    { date: '24 JAN', time: '14:58', desc: 'Pedido realizado #123456' },
    { date: '24 JAN', time: '15:05', desc: 'Pagamento realizado com cartão de crédito' },
    { date: '25 JAN', time: '13:35', desc: 'Encomenda postada pela loja' }
  ]


  const subtotal = 'R$ 180';
  const itemsCount = products.reduce((acc, curr) => acc + curr.quantity, 0);
  const shippingType = 'Sedex';
  const shippingCost = 'R$ 10';
  const discountAmount = 'R$ 0';
  const totalAmount = 'R$ 190';
  const paidAmount = 200.00;

  return (
    <Flex flex={1} flexDir='column' gap={4}>
      <Heading fontSize='24px'>Pedido #123456</Heading>
      <Flex flex={1} gap={4}>
        <Flex flex={1} flexDir='column' gap={4}>
          <Card p={4}>
            <Flex flex='row' justifyContent='space-between' align='center'>
              <Text fontSize='sm' fontWeight='bold' mb={2}>Processamento</Text>
              <Badge>PENDENTE ENVIO</Badge>
            </Flex>
            {products.map((product, index) => (
              <Flex key={index} alignItems="center" justifyContent="space-between" p={2} borderBottom="1px solid" borderColor="gray.200">
                <Flex w='180px'>
                  <Box w="60px" h="60px" overflow="hidden" mr={2}>
                    <Flex pos='absolute' mt={-2} color='white' transform="translateX(-50%)" align='center' justifyContent='center' fontSize="sm" w='18px' h='18px' bg='gray' borderRadius='full'>{product.quantity}</Flex>
                    <Image src={product.imageUrl} alt={product.name} w="100%" h="100%" objectFit="cover" />
                  </Box>
                  <Flex flexDirection="column">
                    <Text fontSize="sm" fontWeight="bold">{product.name}</Text>
                    <Text fontSize="xs">{product.reference}</Text>
                  </Flex>
                </Flex>
                <Flex w='250px' gap={24}>
                  <Box fontSize="sm" fontWeight="bold">Tamanho: {product.size}</Box>
                  <Box fontSize="sm" fontWeight="bold">Cor: {product.color}</Box>
                </Flex>
                <Flex>
                  <Flex alignItems="center">
                    <Box fontSize="sm">{product.price}</Box>
                  </Flex>
                </Flex>
              </Flex>
            ))}
            <Flex w='100%' justifyContent='end'>
              <Button mt={4} colorScheme="blue" size="sm">Enviar pedido</Button>
            </Flex>
          </Card>
          <Card p={4} flex={1}>
            <Flex flex='row' justifyContent='space-between' align='center' mb={2}>
              <Text fontSize='sm' fontWeight='bold' mb={2}>Cartão de crédito</Text>
              <Badge colorScheme='green'>PAGO</Badge>
            </Flex>
            <Flex flexDir='column' gap={2}>
              <Flex justifyContent="space-between">
                <Flex>
                  <Text fontSize="sm" w='180px'>Subtotal</Text>
                  <Text fontSize="sm">{itemsCount} itens</Text>
                </Flex>
                <Text fontSize="sm">{subtotal}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Flex>
                  <Text fontSize="sm" w='180px'>Frete</Text>
                  <Text fontSize="sm">{shippingType}</Text>
                </Flex>
                <Text fontSize="sm">{shippingCost}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="sm">Desconto</Text>
                <Text fontSize="sm">-{discountAmount}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="sm">Total</Text>
                <Text fontSize="sm" fontWeight="bold">{totalAmount}</Text>
              </Flex>
              <Divider mt={2} />
              <Flex justifyContent="space-between">
                <Flex>
                  <Text fontSize="sm" w='180px'>Pago pelo cliente</Text>
                  <Text fontSize="sm">parcelado 2x (R$ {((paidAmount / 2).toFixed(2)).toString()})</Text>
                </Flex>
                <Text fontSize="sm" fontWeight="bold">{totalAmount}</Text>
              </Flex>
            </Flex>
          </Card>
          <Card p={4} flex={1}>
            <Text fontSize='sm' fontWeight='bold' mb={2}>Atividades</Text>
            <Stepper activeStep={0} orientation='vertical' size='sm'>
              {
                steps.map((item, index) => (
                  <Step w='100%'>
                    <StepIndicator>
                      <BsBagCheck size='12px' />
                    </StepIndicator>
                    <Box w='100%'>
                      <StepDescription>{item.date}</StepDescription>
                      <Flex justifyContent='space-between' gap={12}>
                        <StepTitle>{item.desc}</StepTitle>
                        <StepDescription>{item.time}</StepDescription>
                      </Flex>
                    </Box>
                    <StepSeparator />
                  </Step>
                ))
              }
            </Stepper>
          </Card>
        </Flex>
        <Flex w='350px' flexDir='column' gap={4}>
          <Card h='100px' p={4}>
            <Text fontSize='sm' fontWeight='bold' mb={2}>Notas</Text>
            <Text fontSize='sm' color='gray.400'>Sem notas do cliente</Text>
          </Card>
          <Card p={4}>
            <Text fontSize='sm' fontWeight='bold' mb={2}>Cliente</Text>
            <Text fontSize='sm'>email-cliente@email.com (visitante)</Text>
            <Text fontSize='sm'>Fulano de tal</Text>
            <Text fontSize='sm'>123.456.789-10</Text>
            <Divider my={4} />
            <Text fontSize='sm' fontWeight='bold' mb={2}>Contato</Text>
            <Text fontSize='sm'>email-cliente@email.com</Text>
            <Text fontSize='sm'>(99) 99999-9999</Text>
            <Divider my={4} />
            <Text fontSize='sm' fontWeight='bold' mb={2}>Entrega</Text>
            <Text fontSize='sm'>Rua do cliente, 50 - complemento</Text>
            <Text fontSize='sm'>Bairro, Cidade - Estado</Text>
            <Text fontSize='sm'>99999-999</Text>
            <Text fontSize='sm'>Fulano de tal</Text>
            <Text fontSize='sm'>(99) 99999-9999</Text>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderPage;
