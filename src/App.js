import './App.css';
import { 
  ChakraProvider,
 } from "@chakra-ui/react"
import {React, Fragment} from 'react';
import LandingPage from './pages/landingPage';
import theme from './fontTheme'
import "@fontsource/rubik"
function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingPage />
    </ChakraProvider>
  )
}

export default App;
