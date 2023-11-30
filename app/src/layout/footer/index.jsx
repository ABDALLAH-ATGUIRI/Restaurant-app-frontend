import React from 'react'
import Logo from '../../assets/Logo.svg/white-logo.svg'
import { CgFacebook } from 'react-icons/cg'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { lightGray } from '../../utils/colors'
import { TiSocialGithub } from 'react-icons/ti'

const Footer = () => {
    return (

        <footer className=" bg-white shadow p-2 h-[30rem] w-full" style={{ backgroundColor: lightGray }}>
            <div className=" flex  md:p-10 p-4 md:flex-col md:items-center md:justify-between h-full w-full text-gray-400 dark:text-gray-400 ">
                <div>
                    <a href="#" >
                        <img src={Logo} alt="Logo" className="h-32 w-full mr-2" />
                    </a>
                </div>

                <div className="flex items-center justify-between mt-4 md:mt-0 w-1/5">
                    <a href="#" className="p-2 border-2 rounded-full hover:text-yellow-400 hover:border-yellow-400"><CgFacebook size={30} /></a>
                    <a href="#" className="p-2 border-2 rounded-full hover:text-yellow-400 hover:border-yellow-400"><AiOutlineTwitter size={30} /></a>
                    <a href="#" className="p-2 border-2 rounded-full hover:text-yellow-400 hover:border-yellow-400"><AiFillInstagram size={30} /></a>
                    <a href="#" className="p-1 border-2 rounded-full hover:text-yellow-400 hover:border-yellow-400"><TiSocialGithub size={40} /></a>

                </div>

                <ul className="flex items-center justify-between text-light text-xl w-1/3  sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-yellow-400 ">Menu</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-yellow-400">Events</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-yellow-400">News</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline hover:text-yellow-400">Contact</a>
                    </li>
                </ul>

                <span className="text-xl font-light sm:text-center  bottom-0 mt-10">© 2023 <a href="https://flowbite.com/" className="hover:underline">By ABDALLAH ATGUIRI</a> . All Rights Reserved.</span>
            </div>
        </footer>

    )
}

export default Footer
