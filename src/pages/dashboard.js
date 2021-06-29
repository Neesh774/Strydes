import {
    Heading
} from '@chakra-ui/react'
import { Switch, Router } from 'react-router'

export default function dashboard() {
    if(window.loggedIn){
        window.location.assign('https://localhost:3000/');
    }
    return (
        <Heading>Hello!</Heading>
    )
}