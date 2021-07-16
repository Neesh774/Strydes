import {
    Stack,
    Avatar,
    Text,
    Input,
    Divider,
    Box,
    Heading,
    Flex,
    NumberInput,
    NumberInputField,
    VStack,
    Button,
    Spacer,
    TabPanel,
    TabList,
    TabPanels,
    Tab,
    Icon,
    Tabs,
    Grid,
    HStack,
    Textarea,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalContent,
    ModalBody,
    ModalOverlay,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
} from "@chakra-ui/react"
import NavBar from "./dashboardNavBar"
import { RiEditLine } from "react-icons/ri"
import { BsTrophy, BsLayersFill, BsWrench, BsFillHeartFill } from "react-icons/bs"
import Card from './userProjectCard';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
export default function ProfilePage(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const avatar = "https://cdn.discordapp.com/avatars/297504183282565130/a_b8f783208215a189f6ba8962bd25c025.webp";
    const userName = "Neesh";
    const firstName = "Kanishq";
    const lastName="Kancharla";
    const loggedIn = true;
    const projects = 3;
    const followers = 4;
    const completedProjects = 2;
    const description ="I'm 15 years old in high school, and I've been coding since I was in third grade. I love solving difficult problems and exploring new languages.";
    const skills = "I've been coding for about 7 years, learning languages like Python, Java, Javascript, and Dart. I'm experienced in frameworks such as React, Flutter, and using libraries such as Chakra-UI and Flutter.";
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
    return (
        <>
        <Box>
           <NavBar />
           <VStack mt="7px">
            <Box borderWidth="1px" borderRadius="lg" maxW="60%">
                    <Flex direction="row" alignItems="center">
                        <Avatar src={avatar} name={`${firstName} ${lastName}`} mx="7px" size="xl" mt="7px"/>
                        <Stack spacing="2px">
                            <Flex>
                                <Heading>
                                    {userName}
                                </Heading>
                            </Flex>
                            <Text fontSize="xl">
                                {`${firstName} ${lastName}`}
                            </Text>
                            <Text
                            color={useColorModeValue("gray.500", "gray.500")}
                            textTransform="uppercase"
                            fontSize="sm"
                        >
                            {followers} followers
                        </Text>
                        </Stack>
                        <Spacer />
                        {loggedIn? <Button leftIcon={<RiEditLine/>} colorScheme="telegram" width="xsm" variant="outline" mr="7px" onClick={onOpen}>
                            Edit
                        </Button> : <Button leftIcon={<BsFillHeartFill/>} colorScheme="red" width="xsm" variant="outline" mr="7px">
                            Follow
                        </Button>}
                    </Flex>
                    <Tabs>
                        <TabList>
                            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                            User
                            </Tab>
                            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                            Blueprints
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Stack ml="7px" mt="5px" spacing="1px">
                                    <HStack color={useColorModeValue("gray.500", "gray.500")} size="smaller">
                                        <Icon as={BsLayersFill} />
                                        <Text>{projects} •</Text>
                                        <Icon as={BsWrench} />
                                        <Text>{projects - completedProjects} •</Text>
                                        <Icon as={BsTrophy} />
                                        <Text>{completedProjects}</Text>
                                    </HStack>
                                    <Text fontWeight="bold">Description</Text>
                                    <Text fontSize="smaller">{description}</Text>
                                    <Text fontWeight="bold">Skills/Experience</Text>
                                    <Text fontSize="smaller">{skills}</Text>
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Grid templateColumns="repeat(3, 1fr)" gap={8}>
                                {
                                    blueprints.map((blueprint) =>{
                                        return (<Card name={blueprint.name} desc={blueprint.desc} createdAt={blueprint.createdAt} members={blueprint.members}/>)
                                    })
                                }
                                </Grid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
            </Box>
           </VStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit your profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack>
                        <Flex direction="column">
                                <Text>
                                    Description
                                </Text>
                                <Textarea maxLength={100} resize="none" placeholder={description || "Describe yourself in a couple sentences."}/>
                        </Flex>
                        <Flex direction="column">
                                <Text>
                                    Skills/Experience
                                </Text>
                                <Textarea maxLength={200} resize="none" placeholder={skills || "How experienced are you with coding? It's perfectly alright if you're new!"}/>
                        </Flex>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Flex>
                        <Button colorScheme="blue" mr={3} variant="outline"  onClick={onClose}>
                            Cancel
                        </Button>
                        <Spacer />
                        <Button colorScheme="blue" mr={3}>
                            Update
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
      </Modal>
      </>
    )
}