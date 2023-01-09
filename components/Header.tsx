import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"

const Header = () => {
    const [open, setOpen] = useState(false)




    const handleChange = () => {
        setOpen(!open)

    }
    console.log(open);




    return (
        <div className='fixed z-10 top-0 w-full  flex items-center justify-between bg-[#121212] pr-3 sm:hidden'>
            <div>
                <img src="/logo.png" alt="" className='w-[60px] h-[60px] object-contain transform scale-[125%] translate-x-2 ' />
            </div>
            <div className='border border-[#3f3b3b] rounded py-[8px] px-[13px] cursor-pointer '>
                <FaBars color='#5C5C5C' size={"22px"} onClick={handleChange} />
               {
                open &&  <nav className='absolute top-[60px] transition duration-200 ease-out bg-[#121212] text-white/50  left-0 w-full justify-center items-center'>
                <ul className='flex flex-col menu_list items-center space-y-2 pb-3 text-[13px] leading-[19px] font-normal' >
                    <Link href={"#hero"} className="text-white">home</Link>
                    <Link href={"#what_we_do"} className="hover:text-white">What we do</Link>
                    <Link href={"#products"} className="hover:text-white">Products</Link>
                    <Link href={""} className="hover:text-white">Services
                        <ul className=' flex-col hidden'>
                            <Link href={"#pre_production"} className="hover:text-white">Pre-production</Link>
                            <Link href={"#production"} className="hover:text-white">production</Link>
                            <Link href={"#post_production"} className="hover:text-white">Post-production</Link>
                        </ul>
                    </Link>
                    <Link href={"#filming"} className="hover:text-white">Filming in Nepal</Link>
                    <Link href={""} className="hover:text-white">Works</Link>
                    <Link href={"#clients"} className="hover:text-white">Clients</Link>
                    <Link href={"#contact"} className="hover:text-white">Contact Us</Link>
                    <Link href={"" }className="hover:text-white">Gallery & News</Link>
                </ul>
            </nav>
               }
            </div>
        </div>
    )
}

export default Header