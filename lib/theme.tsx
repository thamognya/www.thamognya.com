import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// https://github.com/craftzdog/craftzdog-homepage/blob/master/lib/theme.js#L43
const theme = extendTheme({
    config: {
            initialColorMode: 'light',
            useSystemColorMode: true
    },
    styles: {
    },
    components: {
        Heading: {
            variants: {
                'section-title': {
                }
            }
        },
        Link: {
        }
    },
    fonts: {
        heading: "'Fira Code'"
    },
    colors: {
    }
})

export default theme
