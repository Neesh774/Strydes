import './App.css';
import { 
  ChakraProvider,
 } from "@chakra-ui/react"
import {React, Fragment} from 'react';
import LandingPage from './pages/landingPage';
function App() {
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  )
}

export default App;
