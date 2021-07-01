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
import { Reveal, Zoom, Fade } from 'react-reveal';
import TripleColumnGrid from './tripleColumnGrid';
export default function hero(){
    return (
        <div>
            <VStack>
                <Spacer/>
                <Reveal>
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
                </Reveal>
            </VStack> 
            <SimpleGrid columns={{ base: 6, md: 2 }} spacing={10} align="center">
                <img alt="forum" src={forum}/>
                <img alt="version-control" src={versionControl}/>
            </SimpleGrid>
            <VStack>
                <Reveal>
                    <Features/>
                </Reveal>
                <Reveal>
                    <TripleColumnGrid />
                </Reveal>
            </VStack>
      </div>
    )
      
}
