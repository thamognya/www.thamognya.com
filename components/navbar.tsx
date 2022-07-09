import ThemeSwitch from './themeSwitch'

const Navbar = () => {
    return (
        <>
            <div className="sticky top-0 bg-bg-light-gray opacity-90 z-20 p-2">
                <div className="">
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Navbar
