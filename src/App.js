import './App.css';
import { 
  ChakraProvider,
 } from "@chakra-ui/react"
import {React} from 'react';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import theme from './fontTheme'
import "@fontsource/rubik"
import ProfilePage from "./pages/profilePage"
import { Route, Switch } from "react-router";
import NotFound from './pages/NotFound'
//import PrivateRoute from './PrivateRoute';

import { useContext } from 'react';

import { GlobalContext, GlobalProvider } from './GlobalState';

function App() {
  
  let { loggedIn } = useContext(GlobalContext);

  console.log(`App.js user logged in: ${loggedIn}`)
  
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Switch>
          {!loggedIn ? <LandingPage /> : <Dashboard/>}
          <Route exact path="/profile" component={ProfilePage}/>
          <Route path="*" component = {NotFound} />
        </Switch>
      </GlobalProvider>
    </ChakraProvider>
  )
}

export default App;
