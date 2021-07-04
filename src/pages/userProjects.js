import '../index.css';

import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Stack,
    Image,
    Divider,
    Flex,
    useDisclosure,
    useColorModeValue,
    Grid,
    Spacer,
    Modal,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    chakra,
    Textarea,
    Input
} from '@chakra-ui/react'
import empty from './empty.svg'
import { BsPlus } from 'react-icons/bs';
import React from 'react';
export default function DashboardProjects() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [projectName, setProjectName] = React.useState();
    const blueprints = [
        {
            name: "Discord Classroom",
            desc: "A simple way to streamline your communication with teachers.",
            createdAt: "2019-09-27",
            members: 5
        },
        {
            name: "Codetta",
            desc: "The end of all your code compilation needs.",
            createdAt: "2020-03-14",
            members: 18
        },
        {
            name: "Halfnote",
            desc: "Say hello to the solution for your lack of music practice.",
            createdAt: "2005-11-05",
            members: 2
        },
    ]

    const Card = ({name, desc, createdAt, members}) =>{
        return (
            <Box
                w="full"
                maxW="4xl"
                mx="auto"
                px={4}
                py={3}
                shadow="md"
                bg={useColorModeValue('gray.200', 'gray.700')}
                rounded="md"
            >
                <Flex alignItems="center">
                    <Text
                        color={useColorModeValue("gray.500", "gray.500")}
                        textTransform="uppercase"
                        fontSize="sm"
                    >
                        {createdAt} • {members} members
                    </Text>
                    <Spacer />
                </Flex>
                <Heading 
                    fontSize="xl"
                    fontWeight="bold"
                    mt={2}
                >
                    {name}
                </Heading>
                <Text
                fontSize="md"
                mt={2}
                >
                    {desc}
                </Text>
                <Flex alignItems="center" py="9px">
                    <Button colorScheme="telegram" variant="solid" size="sm">
                        View Blueprint
                    </Button>
                </Flex>
            </Box>
        )
    }
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setProjectName(inputValue)
      }
    return (
        <>
        <Stack spacing="20px"> 
            <Button leftIcon={<BsPlus />} colorScheme="telegram" maxW="15%" onClick={onOpen}>
                Create New Blueprint
            </Button>
            <Divider/>
            <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                {blueprints.map((blueprint) =>{
                    return (<Card name={blueprint.name} desc={blueprint.desc} createdAt={blueprint.createdAt} members={blueprint.members}/>)
                })}
            </Grid>
            {blueprints.length === 0?
                <VStack id="empty">
                    <Image alt="empty" src={empty} maxW="40%"/> 
                    <Text fontSize="3xl">Nothing to see here. Create a new Blueprint with the button above!</Text>
                </VStack>
                    : ""}
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Blueprint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <Stack>
                    <Flex direction="column">  
                        <Text fontSize="lg">
                            Name of your new Blueprint
                        </Text>
                    <Input isRequired={true}
                    value={projectName}
                    onChange={handleInputChange}
                    />
                    </Flex>
                    <Flex direction="column">
                        <Text fontSize="lg">
                            What's {projectName? (<chakra.span color="cornflowerblue">{projectName}</chakra.span>) : "your Blueprint"} about?
                        </Text>
                        <Textarea isRequired={true}
                            placeholder="Enter a description for your Blueprint here"
                        />
                    </Flex>
                </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Flex>
                <Button colorScheme="blue" mr={3} variant="outline"  onClick={onClose}>
                    Cancel
                </Button>
                <Spacer />
                <Button colorScheme="blue" mr={3}>
                    Create
                </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}