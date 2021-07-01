import {
  Box,
  Flex,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  IconButton,
  Icon,
  Button,
  Image,
  useDisclosure,
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

export default function Simple() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, setUser] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState();

  const responseGoogle = (response) => {
    setUser(response);
    console.log(response.Ys);
    setLoggedIn(true);
    Cookies.set('userInfo', response.Ys);
    console.log(Cookies.get('userInfo'));
    window.location.assign('http://localhost:3000/dashboard')  //CHANGE
  }

  const onFailure = (response) => {
      console.log(response);
  }
  const logout = (response) => {
    setLoggedIn(false);
    console.log(response);
  }
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
            <Menu>
                <MenuButton
                    as={IconButton}
                    cursor={'pointer'}>
                    {<Icon
                      as={FaUserAlt}
                    />}
                </MenuButton>
                <MenuList>
                    {!loggedIn? <GoogleLogin 
                        clientId="890338125544-hmfit6fes9ulfls1845us401pfv0muci.apps.googleusercontent.com"
                        render={renderProps => (
                            <MenuItem onClick={renderProps.onClick}>Log In</MenuItem>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />: ''}
                    {loggedIn? <GoogleLogout
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