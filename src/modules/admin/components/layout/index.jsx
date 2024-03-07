import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack } from '@chakra-ui/react';

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Header from './header.component';
import Sidebar from './sidebar.component';

const Layout = (props) => {
    return (
        <Flex h='100vh' flexDir='column' flex={1}>
            <Header />
            <Flex flexDir='row' flex={1} mt={0.5}>
                <Sidebar />
                <Flex flex={1} ml={0.5} flexDir='column' bg='#f5f5f5' p={12}>
                    {props.children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Layout;
