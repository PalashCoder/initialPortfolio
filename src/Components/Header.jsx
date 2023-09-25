import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <div className='bg-[#2699fb] p-1'>
            <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/palash.jpg'} alt='Palash' className='md:h-[120px] md:w-[200px] h-[70px] sm:h-[100px] w-auto' />
                </div>
                <div>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Header