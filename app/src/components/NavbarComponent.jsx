import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch, } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite } from 'react-icons/md'
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { FaWallet } from 'react-icons/fa'
import { orange } from '../utils/colors/global.colors'



function NavbarComponent() {
  const [nav, setNav] = useState(false)
  return (
    <div className='mx-auto flex justify-between items-center p-4 px-8'>
      { }
      <div className='flex items-center'>
        <div onClick={() => { setNav(!nav) }} className='curser-pointer'>
          <BiMenu size={35} />
        </div>
        <div className={`flex justify-center lg:mx-10 sm:mx-6 sm:h-14  px-4`}>
          <img src="./assets/logo.svg/Group 3.svg" alt="Logo" srcset="" />
        </div>

        <div className='hidden mx-14 lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white font-bold rounded-full p-2'>
            Delivery
          </p>
          <p className='p-2 font-bold' size={25}>
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

      {/**Mobile Menu */}
      {/**Overlay */}
      <div className={nav ? 'flex w-[400px] fixed top-0 left-0 z-10 delay-150 duration-300 ease-in-out' : 'fixed top-0 left-[-100%] delay-150 duration-300 ease-in-out'}>
        <div className='h-screen w-[300px] bg-white '>
          <div className={`flex justify-center h-16 m-4`}>
            <img src="./assets/logo.svg/Group 3.svg" alt="Logo" srcset="" />
          </div>
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
        <div className='h-screen'>
          <BiMenuAltLeft size={40} color="white" onClick={() => { setNav(!nav) }} className="absolute right-2 top-4 cursor-pointer" />
        </div>
      </div>
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-0 top-0 left-0 delay-150 duration-300 ease-in-out' onClick={() => { setNav(!nav) }}></div> : <div className="fixed -z-10 delay-300 duration-400 ease-in-out"></div>}
    </div >


  )
}

export default NavbarComponent