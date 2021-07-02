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
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </ChakraProvider>
  )
}
export default App;
