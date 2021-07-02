import {
    Heading
} from '@chakra-ui/react'
import Cookies from 'js-cookie';
  export default function Dashboard() {
    if(!Cookies.get('userInfo')){
        window.location.assign('http://localhost:3000/')
    }
    return (
        <Heading>Hello!</Heading>
    )
}