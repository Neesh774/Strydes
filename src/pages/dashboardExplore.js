import '../index.css';

import {
    Box,
    Heading,
    Avatar,
    Text,
    IconButton,
    Icon,
    Button,
    VStack,
    Image,
    Flex,
    useColorModeValue,
    Spacer,
    Divider,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react'
import empty from './empty.svg'
import { BsThreeDots, BsFillExclamationTriangleFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
const date = require('date-and-time');

export default function DashboardProjects() {
    const blueprints = [
        {
            owner: "Neesh K.",
            name: "Discord Classroom",
            avatar: "https://cdn.discordapp.com/avatars/297504183282565130/a_b8f783208215a189f6ba8962bd25c025.webp",
            desc: "A simple way to streamline your communication with teachers.",
            createdAt: "2019-09-27",
            members: 5
        },
        {
            owner: "Srihan M.",
            name: "Codetta",
            avatar: "https://media.discordapp.net/attachments/764571615630589975/860178385606148156/image0.jpg?width=636&height=748",
            desc: "The end of all your code compilation needs.",
            createdAt: "2020-03-14",
            members: 18
        },
        {
            owner: "Eddie J.",
            name: "Halfnote",
            avatar: "https://media.discordapp.net/attachments/764571615630589975/860190419476545606/Edward_Jin_Photo.jpg?width=636&height=563",
            desc: "Say hello to the solution for your lack of music practice.",
            createdAt: "2005-11-05",
            members: 2
        },
    ]
    const Card = ({owner, name, desc, createdAt, members, avatar}) =>{
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
                    <Text
                        color={useColorModeValue("gray.500", "gray.500")}
                        textTransform="uppercase"
                        fontSize="sm"
                    >
                        {owner}
                    </Text>
                    <Menu autoSelect={false}>
                        <MenuButton
                            as={IconButton}
                            variant="unstyled"
                            >
                            {<Icon
                                as={BsThreeDots}
                            />}
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<BsFillExclamationTriangleFill/>}>
                                Report
                            </MenuItem>
                        </MenuList>
                    </Menu>
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
                        Request to Join
                    </Button>
                    <Spacer />
                    <Popover
                    placement="right"
                    >
                        <PopoverTrigger>
                        <Button colorScheme="telegram" variant="solid" size="sm">
                            View Blueprint
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent
                         bg={useColorModeValue('gray.100', 'gray.700')}
                        >
                            <PopoverCloseButton />
                            <PopoverHeader>
                                <Flex direction="row" alignItems="center">
                                    <Avatar name={owner} src={avatar} size="sm" mr="4px"/>
                                    <Text fontSize="lg" >{owner}</Text>
                                </Flex>
                            </PopoverHeader>
                            <PopoverBody>
                                <Heading fontSize="xl">{name}</Heading>
                                <Text
                                fontSize="md"
                                mt={2}
                                >{desc}</Text>
                            </PopoverBody>
                            <PopoverFooter>
                            <Text
                                color={useColorModeValue("gray.500", "gray.500")}
                                textTransform="uppercase"
                                fontSize="sm"
                            >
                                {createdAt} • {members} members
                            </Text>
                            </PopoverFooter>
                        </PopoverContent>
                    </Popover>
                </Flex>
            </Box>
        )
    }
    return (
        <VStack>
            <Flex maxW="40%" justify="center" align="center">
                <Fade>
                    <VStack padding="6px" spacing="15px">
                        {blueprints.map((blueprint) =>{
                            return (
                                <Card owner={blueprint.owner} name={blueprint.name} desc={blueprint.desc} createdAt={blueprint.createdAt} members={blueprint.members} avatar={blueprint.avatar}/>
                            )
                        })}
                    </VStack>
                </Fade>
                {blueprints.length ===0?
                    <VStack id="empty">
                        <Image alt="empty" src={empty} maxW="100%"/> 
                        <Text fontSize="3xl">Nothing to see here :/</Text>
                    </VStack> 
                    : ""
                }
            </Flex>
        </VStack>
    )
}