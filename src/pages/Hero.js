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
    FormHelperText,
    Button,
    Spacer,
    VStack
} from '@chakra-ui/react'
import '../index.css';
import React, { version } from 'react';
import versionControl from './versioncontrol.svg';
import forum from './forum.svg';
export default function hero(){
    return (
        <div>
            <VStack>
                <Spacer/>
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
            </VStack>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <FadeInSection>
                        <Flex p={8} flex={1} align={'center'} justify={'center'} width="100%"> 
                            <img alt="forum" src={forum}/>
                        </Flex>
                    </FadeInSection>
                    <FadeInSection>
                        <Flex p={8} flex={1} align={'center'} justify={'center'} width="100%">
                            <img alt="version-control" src={versionControl}/>
                        </Flex>
                    </FadeInSection>
            </Stack>
      </div>
    )
    function FadeInSection(props) {
        const [isVisible, setVisible] = React.useState(false);
        const domRef = React.useRef();
        React.useEffect(() => {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
          });
          observer.observe(domRef.current);
        }, []);
        return (
          <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
          >
            {props.children}
          </div>
        );
      }
      
}
