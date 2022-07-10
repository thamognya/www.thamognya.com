import Link from "next/link"

const NotFound = () => {
    return (
    <>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-screen min-h-screen object-cover"
                >
                    <source src="/assets/bg.mp4" type="video/mp4" />
                </video>
                <div className="z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-bg-fg text-center flex-1 flex items-center justify-center h-screen flex-col">
                    <h1 className="mb-6 text-4xl xl:text-5xl">404 Error</h1>
                    <h2 className="mv-2 text-2xl xl:text-3xl pb-2">
                        This page does not exist
                    </h2>
                    <Link href="/">
                        <button
                            className="bg-bg-fg text-bg-bg p-5 rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
                        >
                            <h1>Go Back Home</h1>
                        </button>
                    </Link>
                </div>
    </>
    )
}

export default NotFound