import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
function Nav() {
    const [toggle, settoggle] = useState(false);
    return (
        <>
            {
                toggle ? <AiOutlineClose className='text-white text-[25px] sm:text-[40px] md:hidden block cursor-pointer' onClick={() => settoggle(!toggle)} /> : <AiOutlineMenu className='text-white text-[25px] sm:text-[40px] md:hidden block cursor-pointer' onClick={() => settoggle(!toggle)} />
            }
            <ul className='hidden md:flex text-white text-[22px] gap-7 md:mr-12'>
                <li>
                    Home
                </li>
                <li>
                    Codes
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <ul className={`md:hidden fixed duration-200 w-full h-screen backdrop-blur-xl text-black left-0 ${toggle ? "top-[190px]" : "left-[-120%]"} text-center text-2xl backdrop-blur-3xl`}>
                <li className='py-10'>
                    Home
                </li>
                <li className='py-10'>
                    Codes
                </li>
                <li className='py-10'>
                    About
                </li>
                <li className='py-10'>
                    Contact
                </li>
            </ul>
        </>
    )
}

export default Nav