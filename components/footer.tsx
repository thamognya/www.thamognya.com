import { Box, Divider, Center } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Center>
            <Box opacity={0.4} fontSize="sm" pt={5}>
                <Divider />
                &copy; {new Date().getFullYear()} Thamognya Kodi. All Rights
                Reserved.
            </Box>
        </Center>
    )
}

export default Footer
