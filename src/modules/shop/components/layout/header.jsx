import { Flex, Box, Spacer, IconButton, Text, Image } from '@chakra-ui/react';
import { BsHandbag, BsHeart, BsSearch } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import { CiUser } from "react-icons/ci";
import LogoComponent from '../common/logo.component';

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => setIsSearchOpen(!isSearchOpen);
  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex p={4} bg={isScrolled ? 'white' : 'transparent'} color={isScrolled ? 'gray.800' : 'white'} boxShadow={isScrolled ? 'md' : 'none'} align="center" position="fixed" width="100%" zIndex={1000}>
      <Flex align='center' gap={8}>
        <Box><LogoComponent size='35px' color={isScrolled ? 'black' : 'white'} /></Box>
        <Flex fontSize="sm" fontFamily="Roboto" fontWeight="thin" gap={12}>
          <Text as="span">NEWS</Text>
          <Text as="span">Shop</Text>
        </Flex>
      </Flex>
      <Spacer />
      <Box>
        <IconButton icon={<BsSearch color={isScrolled ? 'black' : 'gray'} />} variant='ghost' onClick={handleSearchClick} mr={2} aria-label="Search" />
        <IconButton icon={<BsHeart color={isScrolled ? 'black' : 'gray'} />} variant='ghost' mr={2} aria-label="Withlist" />
        <IconButton icon={<BsHandbag color={isScrolled ? 'black' : 'gray'} />} variant='ghost' mr={2} aria-label="Shopping Cart" onClick={() => { props.onCartToggle() }} />
        <IconButton icon={<CiUser color={isScrolled ? 'black' : 'gray'} />} variant='ghost' aria-label="User" />
      </Box>
    </Flex>
  );
};

export default Header;
