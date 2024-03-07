import React from 'react';
import { Box, Flex, VStack, HStack, Text, IconButton, Input, InputGroup, InputLeftAddon, Button, Link } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube, FaPaperPlane, FaEnvelope, FaUser } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaInstagram />, label: 'Instagram' },
  { icon: <FaTwitter />, label: 'Twitter' },
  { icon: <FaTiktok />, label: 'TikTok' },
  { icon: <FaFacebook />, label: 'Facebook' },
  { icon: <FaYoutube />, label: 'Youtube' },
];

const footerSections = [
  {
    title: 'MAIS+',
    links: ['Dicas', 'Produtos', 'Cupons', 'Cashback'],
  },
  {
    title: 'INSTITUCIONAL',
    links: ['Trabalhe conosco', 'Atendimento', 'Nossas lojas', 'Sobre'],
  },
  {
    title: 'COMPRANDO',
    links: ['Trocas e Devoluções', 'Entregas', 'Pagamento', 'Privacidade'],
  },
];

const Footer = () => {
  return (
    <Box bg="gray.50" py={4} px={{ base: '8px', lg: '24px' }}>
      <Flex justifyContent="space-between" alignItems="center">
        <VStack align='flex-start'>
          <HStack spacing={4} mb={4}>
            {socialIcons.map(({ icon, label }) => (
              <IconButton key={label} icon={icon} variant="ghost" fontSize="20px" />
            ))}
          </HStack>
          <Flex gap={24} alignItems="center">
            {footerSections.map((section) => (
              <VStack key={section.title} align="flex-start" spacing={2}>
                <Link fontWeight="bold" fontSize="sm" href="#">{section.title}</Link>
                {section.links.map((link) => (
                  <Link key={link} fontSize="sm" href="#">{link}</Link>
                ))}
              </VStack>
            ))}
          </Flex>
        </VStack>

        <VStack spacing={2} ml={4} justifyContent='center' alignItems='center' p={4}>
          <Text fontWeight="bold" fontSize="sm">
            ASSINE A NEWSLETTER
          </Text>
          <Text fontSize="14px" color="gray.600">
            Receba novidades e ganhe um cupom de 15% na sua primeira compra!
          </Text>
          <HStack spacing={4} w='100%'>
            <InputGroup size="sm" flex={1}>
              <InputLeftAddon children={<FaEnvelope color="gray.300" />} />
              <Input placeholder="Digite seu e-mail" />
            </InputGroup>
          </HStack>
          <Text fontSize='11px' color="gray.600" textAlign="left">
            *Assinando nossa news, você está de acordo com nossa <Link>Política de Privacidade.</Link>
          </Text>
          <Button bg="rgba(190, 166, 105, 1)" color='white' _hover={{ bg: "rgba(190, 166, 105, 0.8)" }} borderRadius={0} leftIcon={<FaPaperPlane />}>
            Assinar
          </Button>
        </VStack>
      </Flex>

      {/* Texto dos Direitos Autorais */}
      <Text textAlign="center" fontSize="xs" color="gray.600" mt={8}>
        CODESHOP © 2024 - TODOS OS DIREITOS RESERVADOS
      </Text>
    </Box>
  );
};

export default Footer;
