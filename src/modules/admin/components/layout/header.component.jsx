// Header.js
import React from 'react';
import { Flex, Box, Input, InputGroup, InputLeftAddon, Avatar, useColorModeValue, useTheme } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    const headerShadow = useColorModeValue('base.light', 'base.dark');
    const theme = useTheme();

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            py={1}
            px={4}
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            boxShadow='md'
        >
            <Box>
                <img src="https://via.placeholder.com/40" alt="Logo" />
            </Box>

            {/* Barra de Pesquisa */}
            <InputGroup size='sm' maxW="700px">
                <InputLeftAddon children={<FaSearch />} />
                <Input type="text" placeholder="Pesquisar..." />
            </InputGroup>

            <Avatar size='sm' bg={theme.colors.primary[500]} name='Antonio Araujo' />
        </Flex>
    );
};

export default Header;
