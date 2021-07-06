import {
    Box,
    useColorModeValue,
    Flex,
    Text,
    Popover,
    PopoverBody,
    PopoverHeader,
    PopoverFooter,
    PopoverTrigger,
    Button,
    Heading,
    Spacer,
    PopoverContent,
    PopoverCloseButton,
    Avatar
} from '@chakra-ui/react'
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
                                <Avatar name="Neesh K." src="https://cdn.discordapp.com/avatars/297504183282565130/a_b8f783208215a189f6ba8962bd25c025.webp" size="sm" mr="4px"/>
                                <Text fontSize="lg" >Neesh K.</Text>
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

export default Card;