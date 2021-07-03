import {
    Heading
} from '@chakra-ui/react'
import Cookies from 'js-cookie';
import { GlobalContext } from '../GlobalState';
import { useContext } from 'react';
  export default function Dashboard() {
    const { user } = useContext(GlobalContext);
    
    return (
        <Heading>Hello!</Heading>
    )
}