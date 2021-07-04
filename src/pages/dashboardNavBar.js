import {
    Box,
    Flex,
    HStack,
    LinkBox,
    LinkOverlay,
    IconButton,
    Icon,
    Image,
    useColorModeValue,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { FaUserAlt } from 'react-icons/fa'
  import '../index.css';
  import React from 'react';
  import './Hero';
  
  export default function Simple() {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} className="navbar-box" width="100%">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
              <LinkBox>
                  <LinkOverlay href="/">
                      <Flex direction="row" href="/">
                          <Image href="/" objectFit="cover" boxSize="34px" src="https://i.imgur.com/UhucnnY.png" alt="strydeslogo" fit="scale-down" padding="4px"/>
                          <Text fontSize="2xl" href="/">Strydes</Text>
                      </Flex>
                  </LinkOverlay>
              </LinkBox>
          </HStack>
          <HStack spacing={1}>
              <IconButton 
                  colorScheme="gray"
                  onClick={toggleColorMode}
                  aria-label="Search database"
                  icon={colorMode === "dark" ? <MoonIcon/> : <SunIcon />}
              />
              <Menu autoSelect={false}>
                  <MenuButton
                      as={IconButton}
                      cursor={'pointer'}
                      _focus={{ boxShadow: "none" }}
                  >
                      {<Icon
                        as={FaUserAlt}
                      />}
                  </MenuButton>
                  <MenuList>
                      <MenuItem>
                        My Profile
                      </MenuItem>
                  </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Box>
    );
  }