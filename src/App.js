import './App.css';
import { 
  ChakraProvider,
 } from "@chakra-ui/react"
import {React} from 'react';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import theme from './fontTheme'
import "@fontsource/rubik"
import { Route, Switch } from "react-router";

import { useContext } from 'react';

import { GlobalContext, GlobalProvider } from './GlobalState';

function App() {

  const { user } = useContext(GlobalContext);
  
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </GlobalProvider>
    </ChakraProvider>
  )
}
export default App;
