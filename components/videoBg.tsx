// use cdn for bg

const VideoBg = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-screen h-screen object-cover"
        >
            <source
                src="https://cdn.jsdelivr.net/gh/Thamognya/www.thamognya.com-assets@master/bg.mp4"
                type="video/mp4"
            />
        </video>
    )
}

export default VideoBg
