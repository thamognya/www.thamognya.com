// file imports
import ThemeSwitch from './themeSwitch'
import Logo from './logo'

const Navbar = () => {
    return (
        <>
            <div className="sticky top-0 bg-bg-light-gray opacity-90 p-2 backdrop-blur-md">
                <div className="inline-flex items-center gap-2">
                    <Logo />
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Navbar
