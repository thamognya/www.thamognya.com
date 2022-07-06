import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
    font-size: 18px;
    img {
        transition: 200ms ease;
    }

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Fira Code'
                        ml={3}
                        _hover = { { transform: "scale(1.1)" } }
                    >
                        Thamognya Kodi
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
