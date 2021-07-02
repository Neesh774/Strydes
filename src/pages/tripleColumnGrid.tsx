import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcInTransit, FcCollaboration, FcDataBackup } from 'react-icons/fc';
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} maxW="5xl" borderRadius="lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            title={'Unlimited Forum Posts'}
            text={
                'Anybody can make as many questions as they want. We don\'t place any limits on how much you can learn.'
            }
            />
            <Feature
            icon={<Icon as={FcDataBackup} w={10} h={10} />}
            title={'Safe and Secure'}
            text={
                'All your personal details will be safe from attackers, and will be backed up regularly.'
            }
            />
            <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'No Wasted time'}
            text={
                'Forum posts and Blueprints will quickly be recommended to other people, to ensure that you get responses as fast as possible.'
            }
            />
        </SimpleGrid>
    </Box>
  );
}