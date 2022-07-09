import ThemeSwitch from './themeSwitch'

const Navbar = () => {
    return (
        <>
            <div className="sticky top-0 bg-bg-light-gray opacity-60 z-10">
                <div className="">
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Navbar
