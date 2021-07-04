import {
    Image,
    Box,
    Container,
    Flex,
    Stack,
    Text,
    HStack,
    Input,
    FormLabel,
    FormControl,
    SimpleGrid,
    FormHelperText,
    Button,
    Spacer,
    VStack
} from '@chakra-ui/react'
import Features from './features.tsx';
import React, { version } from 'react';
import versionControl from './versioncontrol.svg';
import forum from './forum.svg';
import Fade from 'react-reveal/Fade';
import TripleColumnGrid from './tripleColumnGrid';
import Creators from './creators'
export default function hero(){
    
    return (
        <div>
            <VStack>
                <Spacer/>   
                <Fade>
                    <Text fontSize="4xl" justify={'center'} align={'center'}>
                        Your one stop for collaborating.
                    </Text>
                    <form>
                        <Flex width="2xl" justify={'center'} align={'center'}>
                            <VStack>
                                <HStack spacing="24px" justify={'center'} alighn={'center'}>
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input type="name" />
                                    </FormControl>
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Input type="email" />
                                    </FormControl>
                                </HStack>
                                <Button colorScheme="teal">
                                    Submit
                                </Button>
                            </VStack>
                        </Flex> 
                    </form>
                </Fade>
            </VStack> 
            <VStack>
            <Flex align="center" maxW="45%" justify="center">
                <Fade>
                    <img alt="forum" src={forum}/>
                    <img alt="version-control" src={versionControl}/>
                </Fade>
            </Flex>
                <Fade>
                    <Features id="description"/> 
                    <TripleColumnGrid id="features"/>
                    <Creators id="creators"/>
                </Fade>
            </VStack>
      </div>
    )
      
}
