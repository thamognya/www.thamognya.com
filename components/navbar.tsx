// file imports
import ThemeSwitch from './themeSwitch'
import Logo from './logo'

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 w-screen bg-bg-light-gray opacity-80 p-5 backdrop-blur-xl">
                <div className="flex inline-flex items-center gap-2">
                    <Logo />
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Navbar
