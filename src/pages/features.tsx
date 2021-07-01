import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react';
import { BsFillChatDotsFill, BsFillPersonLinesFill, BsFillXDiamondFill } from 'react-icons/bs'
import wireframe from './wireframe.svg';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

  export default function Dashboard() {
    return (
        <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>The digital savior for beginner developers</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Strydes makes it extremely simple to get support from other developers online, and collaborate with people around the world.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={BsFillChatDotsFill} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Large Forum Base'}
            />
            <Feature
              icon={<Icon as={BsFillXDiamondFill} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Collaborate with Blueprints'}
            />
            <Feature
              icon={
                <Icon as={BsFillPersonLinesFill} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Detailed Profiles'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'wireframe'}
            src={wireframe}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    )
}