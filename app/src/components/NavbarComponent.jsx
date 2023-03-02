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
        <div className={`flex justify-center mx-10 h-14 px-4`}>
          <img src="./assets/logo.svg/Group 3.svg" alt="Logo" srcset="" />
        </div>

        {/* <h1 className={`text-2xl sm:text-3xl lg:text-4xl px-2`} style={{ color: orange }} >
        </h1> */}
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
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={() => { setNav(!nav) }}></div> : ''}
      <div className={nav ? 'flex w-[400px] fixed top-0 left-0 z-10 duration-300' : 'fixed top-0 left-[-100%]'}>
        <div className='h-screen w-[300px] bg-white '>
          <div className={`flex justify-center h-14 m-4`}>
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
          <BiMenuAltLeft size={40} color="white" onClick={() => { setNav(!nav) }} className="absolute right-4 top-4 cursor-pointer" />
        </div>
      </div>


    </div >


  )
}

export default NavbarComponent