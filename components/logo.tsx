import Image from "next/image"

const Logo = () => {
    let h_w = 120/3;
    return (
    <>
        <a href="/">
            <div className="inline-flex items-center">
                <Image 
                    className="hover:rotate-45 rounded-full"
                    src="/assets/pfp.png" 
                    width={h_w} 
                    height={h_w} 
                    alt="bird logo"
                />
                <h1 
                    className="font-edu_vic_wa_nt_beginner hover:font-bold text-bg-fg dark:text-bg-fg"
                >
                    Thamognya
                </h1>
            </div>
        </a>
    </>
    )
}

export default Logo