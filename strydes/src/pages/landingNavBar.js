import {
  Box,
  Flex,
  HStack,
  Link,
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
  Avatar,
  Stack,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa'
export default function Simple() {
  console.log("navbar");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Flex direction="row">
                <Image objectFit="cover" boxSize="34px" src="https://i.imgur.com/UhucnnY.png" alt="strydeslogo" fit="scale-down" padding="4px"/>
                <Text fontSize="2xl">Strydes</Text>
            </Flex>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
          <HStack spacing={1}>
            <IconButton 
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
                    <MenuItem>Log in</MenuItem>
                    <MenuItem>Sign up</MenuItem>
                </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}