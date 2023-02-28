import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite } from 'react-icons/md'
import { FaWallet } from 'react-icons/fa'


function NavbarComponent() {
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      { }
      <div className='flex items-center'>
        <div onClick={() => { setNav(!nav) }} className='curser-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Allo<span className='font-bold'>Chef</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>
            Delivery
          </p>
          <p className='p-2' size={25}>
            Pickup
          </p>
        </div>
      </div>
      { /** search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none' />
      </div >
      {/** Cart Button*/}
      <button className='bg-black text-white hidden md:flex item-center p-4 rounded-full'><BsFillCartFill size={20} className="mr-2" /> Cart</button>
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-0'}>
        <AiOutlineClose size={30} onClick={() => { setNav(!nav) }} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className='text-2xl p-4'>Allo <span className=''>Chef</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li><TbTruckDelivery size={25} className="mr-4" />Order</li>
            <li><MdFavorite size={25} className='mr-4' />Favorites</li>
            <li><FaWallet size={25} className='mr-4' />Wallet</li>
            {/* <li>Help</li>
            <li>Promotions</li>
            <li>Best Ones</li>
            <li>Invite a Friend</li> */}
          </ul>
        </nav>
      </div>

    </div >


  )
}

export default NavbarComponent