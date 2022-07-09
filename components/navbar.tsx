// file imports
import ThemeSwitch from './themeSwitch'
import Logo from './logo'

const Navbar = () => {
    return (
        <>
            <div className="sticky top-0 bg-bg-light-gray opacity-90 z-20 p-2">
                <div className="inline-flex gap-2">
                    <Logo />
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Navbar
