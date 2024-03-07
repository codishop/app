import React, { useState } from 'react';
import { Box, VStack, IconButton, Text, Flex, Button } from '@chakra-ui/react';
import { FaHome, FaBox, FaCubes, FaClipboardList, FaUsers, FaTags } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [selectedSection, setSelectedSection] = useState('Dashboard');
    const navigate = useNavigate();

    const menuItems = [
        { section: 'Acesso rápido', items: [{ icon: FaHome, text: 'Dashboard', route: '/' }] },
        {
            section: 'Catálogo',
            items: [
                { icon: FaBox, text: 'Produtos', route: 'products' },
                { icon: FaCubes, text: 'Grupos', route: 'groups' },
            ],
        },
        {
            section: 'Vendas',
            items: [
                { icon: FaClipboardList, text: 'Pedidos', route: 'orders' },
                { icon: FaUsers, text: 'Clientes', route: 'customers' },
            ],
        },
        {
            section: 'Promoções',
            items: [{ icon: FaTags, text: 'Cupons', route: 'coupons' }],
        },
    ];

    const handleItemClick = (item) => {
        setSelectedSection(item.section);
        navigate(item.route)
    };

    return (
        <Box w="250px" maxW='250px' flex={1} boxShadow="md" py={4} bg='#f5f5f5' borderRight="2px solid" borderRightColor="gray.200">
            <VStack spacing={4} align="start">
                {menuItems.map((sectionData, sectionIndex) => (
                    <VStack key={sectionIndex} w='100%' spacing={2} align="start">
                        <Text ml={4} fontSize='sm'>{sectionData.section}</Text>
                        {sectionData.items.map((item, index) => (
                            <Flex w='100%' gap={1} pr={2} key={index}>
                                <Box w='4px' bgColor={selectedSection === item.text ? 'green' : '#f5f5f5'} borderBottomEndRadius={5} borderTopRightRadius={5} />
                                <Button
                                    leftIcon={<item.icon size='12px' />}
                                    w='100%'
                                    color={selectedSection === item.text ? 'green' : 'black'}
                                    bgColor={selectedSection === item.text ? 'rgba(0, 0, 0, 0.05)' : 'transparent'}
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.05)' }}
                                    justifyContent='flex-start'
                                    fontSize='12px'
                                    size='sm'
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item.text}
                                </Button>
                            </Flex>
                        ))}
                    </VStack>
                ))}
            </VStack>
        </Box>
    );
};

export default Sidebar;
