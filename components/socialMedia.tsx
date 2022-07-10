import { FaLinkedin, FaGithub, FaBlogger, FaGitlab } from 'react-icons/fa'

import { SiGitea, SiGentoo } from 'react-icons/si'

import { CgWebsite } from 'react-icons/cg'

import { BsFiles } from 'react-icons/bs'

const SocialMedia = () => {
    return (
    <>
<div className="container mx-auto px-11 bg-bg-bg dark:bg-bg-fg text-center pt-28 text-bg-fg dark:text-bg-bg">
                    <h2 className="font-bold">Social Media</h2>
                    <div className=" pt-10">
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 sm:gap-x-14 place-items-center lg:h-half-screen md:h-half-screen sm:min-h-half-screen">
                            <a
                                href="https://www.thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-8 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <CgWebsite />
                                <h1 className="pl-2">Website</h1>
                            </a>
                            <a
                                href="https://www.thamognya.com/cv.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-20 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <BsFiles />
                                <h1 className="pl-2">CV</h1>
                            </a>
                            <a
                                href="https://github.com/Thamognya"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-10 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <FaGithub />
                                <h1 className="pl-2">Github</h1>
                            </a>
                            <a
                                href="https://git.thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-12 hover:scale-125 rounded-full bg-bg-gray text-bg-fg  bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <SiGitea />
                                <h1 className="pl-2">Gitea</h1>
                            </a>
                            <a
                                href="https://gitlab.com/Thamognya"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-12 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <FaGitlab />
                                <h1 className="pl-2">Gitlab</h1>
                            </a>
                            <a
                                href="https://packages.gentoo.org/maintainer/contact@thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-12 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <SiGentoo />
                                <h1 className="pl-2">Gentoo</h1>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/thamognya"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-7 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <FaLinkedin />
                                <h1 className="pl-2">LinkedIn</h1>
                            </a>
                            <a
                                href="https://blog.thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 px-16 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 dark:bg-opacity-100 flex items-center"
                            >
                                <FaBlogger />
                                <h1 className="pl-2">Blog</h1>
                            </a>
                        </div>
                    </div>
                </div>
    </>
    )
}

export default SocialMedia