import '../index.css';

import {
    Box,
    Heading,
    Text,
    IconButton,
    Icon,
    Button,
    VStack,
    Image,
    Flex,
    useColorModeValue,
    Spacer,
    Menu,
    MenuItem,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import empty from './empty.svg'
import { BsThreeDots, BsFillExclamationTriangleFill } from 'react-icons/bs';

const date = require('date-and-time');

export default function DashboardProjects() {
    const blueprints = [
        {
            owner: "Neesh K.",
            name: "Discord Classroom",
            desc: "A simple way to streamline your communication with teachers.",
            createdAt: "2019-09-27",
            members: 5
        },
        {
            owner: "Srihan M.",
            name: "Codetta",
            desc: "The end of all your code compilation needs.",
            createdAt: "2020-03-14",
            members: 18
        },
        {
            owner: "Eddie J.",
            name: "Halfnote",
            desc: "Say hello to the solution for your lack of music practice.",
            createdAt: "2005-11-05",
            members: 2
        },
    ]
    const Card = ({owner, name, desc, createdAt, members}) =>{
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
                    <Button colorScheme="telegram" variant="solid" size="sm">
                        View Blueprint
                    </Button>
                </Flex>
            </Box>
        )
    }
    return (
        <VStack>
            <Flex maxW="40%" justify="center" align="center">
                <VStack padding="6px" spacing="15px">
                    {blueprints.length === 0?
                    <VStack id="empty">
                     <Image alt="empty" src={empty} maxW="100%"/> 
                     <Text fontSize="3xl">Nothing to see here :/</Text>
                    </VStack>
                     : blueprints.map((blueprint) =>{
                        return (<Card owner={blueprint.owner} name={blueprint.name} desc={blueprint.desc} createdAt={blueprint.createdAt} members={blueprint.members}/>)
                    })}
                </VStack>
            </Flex>
        </VStack>
    )
}