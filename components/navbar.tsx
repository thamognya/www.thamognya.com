
import dynamic from 'next/dynamic'
// file imports
const LazyLogo = dynamic(() => import('./logo'), {
    ssr: true
})

const LazyThemeSwitch = dynamic(() => import('./themeSwitch'), {
    ssr: true
})
const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 w-screen bg-bg-gray dark:bg-bg-light-gray opacity-80 p-5 backdrop-blur-xl">
            </div>
        </>
    )
}

export default Navbar
