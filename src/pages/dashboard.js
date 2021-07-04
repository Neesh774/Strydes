import {
    Heading,
    Box,
    useColorModeValue,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'
import Cookies from 'js-cookie';
import { GlobalContext } from '../GlobalState';
import { useContext } from 'react';
import DashboardBlueprints from './dashboardExplore.js'
import DashboardNavBar from './dashboardNavBar.js';
import DashboardUserProjects from './userProjects';
  export default function Dashboard() {
    const { user } = useContext(GlobalContext);
    return (
        <Box>
          <DashboardNavBar />  
          <Tabs defaultIndex={1} isFitted>
            <Box bg={useColorModeValue('gray.300', '#131824')}>
                <TabList>
                    <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Projects
                    </Tab>
                    <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Explore
                    </Tab>
                </TabList>
            </Box>
            <TabPanels>
            <TabPanel>
                <DashboardUserProjects/>
            </TabPanel>
            <TabPanel>
                <DashboardBlueprints/>
            </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
    )
}