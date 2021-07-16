import {
    Heading,
    Text,
    Image,
    Box,
    Fade,
    VStack,
    Link
} from '@chakra-ui/react'
import Empty from './empty.svg'
import NavBar from './landingNavBar';
export default function NotFound() {
    return (
        <Box>
            <NavBar />
                <VStack id="empty">
                    <Image alt="empty" src={Empty} maxW="40%"/> 
                    <Heading>404</Heading>
                    <Text>Couldn't find what you're looking for. Go back to the{" "}<Link href="/">home page
                    </Link></Text>
                </VStack>
        </Box>
    )
}