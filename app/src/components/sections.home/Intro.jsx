
import React from 'react'
import { Fragment } from 'react'
import FirstBg from '../../assets/images/women-background-01.jpg'
import { HiOutlineExternalLink } from 'react-icons/hi'

const index = () => {
    return (
        <Fragment>
            <div className='mx-auto w-full flex justify-between items-center h-[91vh]'>
                <div className='mx-auto w-full flex flex-col justify-center font-sans items-start h-screen bg-cover absolute top-0 -z-10 ' style={{ backgroundImage: `url(${FirstBg})` }}>
                </div>
                <div className='absolute xl:w-1/2 w-full h-screen left-0 top-0 flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-between h-1/3 items-start m-16  gap-6'>
                        <div className='flex flex-col justify-between'>
                            <h1 className=' font-bold lg:text-6xl text-5xl text-yellow-400 pb-4'>Welcome to ALLO CHEF</h1>
                            <p className='text-white  lg:text-3xl text-3xl tracking-wider font-normal '>Fresh Ingredients, Delicious Meals, Easy Delivery </p>
                            <p className='text-white  lg:text-2xl text-lg font-normal py-8 italic tracking-wide'>With Allo Chef, you can relish an exceptional dining experience from the convenience of your own home. Order now and savor the delicious cuisine from your favorite restaurant like never before!</p>
                        </div>
                        <button className='bg-orange text-white font-bold rounded-md py-4 px-10 bg-orange-500 flex justify-center items-center gap-2 curser-pointer'>Explore your restaurants <HiOutlineExternalLink size={20} /></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default index