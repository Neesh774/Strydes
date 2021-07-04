import './App.css';
import { 
  ChakraProvider,
 } from "@chakra-ui/react"
import {React} from 'react';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import theme from './fontTheme'
import "@fontsource/rubik"
//import { Route, Switch } from "react-router";

//import PrivateRoute from './PrivateRoute';

import { useContext } from 'react';

import { GlobalContext, GlobalProvider } from './GlobalState';

function App() {
  
  const { loggedIn } = useContext(GlobalContext);
  
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        {/* <Switch>
          <Route exact path='/' component={LandingPage}/>
          <PrivateRoute exact path = '/dashboard' auth={loggedIn} component={Dashboard}/>
        </Switch> */}
        {!loggedIn ? <LandingPage /> : <Dashboard />}
      </GlobalProvider>
    </ChakraProvider>
  )
}
export default App;
