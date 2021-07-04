import {
    Box,
    Button,
    Container,
    Stack,
    Text,
    useColorModeValue,
    HStack
  } from '@chakra-ui/react';
  import { FaTwitter } from 'react-icons/fa';  
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Strydes</Text>
          <HStack>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
            </Button>
        </HStack>
        </Container>
      </Box>
    );
  }