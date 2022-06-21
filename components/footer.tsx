import { 
    Box, 
    Divider,
} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" pt={5}>
            <Divider />
            &copy; {new Date().getFullYear()} Thamognya Kodi. All Rights
            Reserved.
        </Box>
    )
}

export default Footer
