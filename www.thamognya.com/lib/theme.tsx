import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// https://github.com/craftzdog/craftzdog-homepage/blob/master/lib/theme.js#L43
const theme = extendTheme({
    config: {
            initialColorMode: 'light',
            useSystemColorMode: true
    },
    fonts: {
        heading: "'Fira Code'"
    }
})

export default theme
