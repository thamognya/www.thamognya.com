/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'

const Logo = () => {
    let h_w = 120 / 3
    return (
        <>
            <a href="/">
                <div className="inline-flex items-center gap-1">
                    <Image
                        className="hover:rotate-45 rounded-full"
                        src="https://cdn.jsdelivr.net/gh/Thamognya/www.thamognya.com-assets@master/pfp.png"
                        width={h_w}
                        height={h_w}
                        alt="bird logo"
                    />
                    <h1 className="text-bg-fg dark:text-bg-fg">
                        {'<'}Thamognya{'/>'}
                    </h1>
                </div>
            </a>
        </>
    )
}

export default Logo
