import {
  Box,
  Flex,
  //Button,
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
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import Cookies from 'js-cookie';
import './Hero';
import { GlobalContext } from '../GlobalState';

import { useContext } from 'react';

export default function Simple() {
  const { user, setUser, loggedIn } = useContext(GlobalContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const responseGoogle = (response) => {
    console.log(response.Ys);
    setUser(response.Ys);
    console.log(Cookies.get('userInfo'));
  }

  const onFailure = (response) => {
      console.log(response);
  }
  const logout = (response) => {
    console.log(response);
  }

  // const scrollDescription = document.getElementById('description').scrollIntoView();
  // const scrollFeatures = document.getElementById('features').scrollIntoView();
  // const scrollCreators = document.getElementById('creators').scrollIntoView();

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
            {/* <Button colorScheme="teal" variant="ghost" onClick="document.querySelector('description').scrollIntoView()">
              Our Story
            </Button>
            <Button colorScheme="teal" variant="ghost" onClick="document.querySelector('features').scrollIntoView()">
              Features
            </Button>
            <Button colorScheme="teal" variant="ghost" onClick="document.querySelector('creators').scrollIntoView()">
              The Team
            </Button> */}
            <IconButton 
                colorScheme="gray"
                onClick={toggleColorMode}
                aria-label="Search database"
                icon={colorMode === "dark" ? <MoonIcon/> : <SunIcon />}
            />
            <Menu>
                <MenuButton
                    as={IconButton}
                    cursor={'pointer'}>
                    {<Icon
                      as={FaUserAlt}
                    />}
                </MenuButton>
                <MenuList>
                    {!loggedIn ? <GoogleLogin 
                        clientId="890338125544-hmfit6fes9ulfls1845us401pfv0muci.apps.googleusercontent.com"
                        render={renderProps => (
                            <MenuItem onClick={renderProps.onClick}>Log In</MenuItem>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={onFailure}
                    />: ''}
                    {loggedIn ? <GoogleLogout
                      clientId="890338125544-hmfit6fes9ulfls1845us401pfv0muci.apps.googleusercontent.com"
                      buttonText="Logout"
                      render={renderProps => (
                        <MenuItem onClick={renderProps.onClick}>Log Out</MenuItem>
                      )}
                      onLogoutSuccess={logout}
                      />: ''
                    }
                </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
  );
}