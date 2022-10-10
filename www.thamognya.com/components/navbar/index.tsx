import { Show, Hide } from '@chakra-ui/react'
import LargeNavBar from './largeNavbar'
import SideBar from './sideBar'

const NavBar = () => {
    return (
        <div>
            <Show above="xl">
                <LargeNavBar />
            </Show>
            <Show below="xl">
                <SideBar />
            </Show>
        </div>
    )
}

export default NavBar
