import React from 'react'
import Typed from 'react-typed'

function Body() {
    return (
        <>
            <div className={`bg-[#2699fb] w-full pt-[100px] md:h-[87vh] pb-[200px]`}>
                <div className='max-w-[1240px] md:mt-20 my-2 mx-auto text-center'>
                    <div className='md:text-3xl text-xl font-semibold'>
                        Hey,
                    </div>
                    <div className='text-white font-bold text-[35px] sm:text-[50px] md:text-[80px]'>
                        It's Palash
                    </div>
                    <div className='md:text-4xl sm:text-2xl text-l font-mono mt-5'>
                        <Typed
                            strings={['A Fullstack Developer and a Programmer']}
                            typeSpeed={100}
                            loop={true}
                            backSpeed={50}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body