import dynamic from 'next/dynamic'
// file imports
const LazyLogo = dynamic(() => import('./assets/logo.tsx'), {
    ssr: true
})

const LazyThemeSwitch = dynamic(() => import('./themeSwitch'), {
    ssr: true
})

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 w-screen bg-bg-light-gray opacity-80 p-5 backdrop-blur-xl">
                <div className="flex inline-flex items-center gap-2">
                    <LazyLogo />
                    <LazyThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Navbar
