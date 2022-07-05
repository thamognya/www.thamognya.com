import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }: any) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#525252', '#F5F5F5')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={
                    active ? useColorModeValue('#525252', '#F5F5F5') : undefined
                }
                color={
                    active
                        ? useColorModeValue('#F5F5F5', '#525252')
                        : inactiveColor
                }
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = ({props}: any) => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#F9FAFB40', '#26262680')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/contact" path={path}>
                        Contact
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem
                        href="https://git.thamognya.com"
                        target="_blank"
                        path={path}
                    >
                        Gitea
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/Thamognya"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        Github
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box
                        ml={2}
                        bg={useColorModeValue('#F9FAFB', '#262626')}
                        display={{ base: 'inline-block', md: 'none' }}
                    >
                        <Menu
                            bg={useColorModeValue('#F9FAFB', '#262626')}
                            isLazy
                            id="navbar-menu"
                        >
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList
                                bg={useColorModeValue('#F9FAFB', '#262626')}
                            >
                                <NextLink href="/" target="_blank" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>Contact</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink
                                    href="https://git.thamognya.com/"
                                    target="_blank"
                                    passHref
                                >
                                    <MenuItem as={Link}>Gitea</MenuItem>
                                </NextLink>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/Thamognya"
                                >
                                    Github
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
