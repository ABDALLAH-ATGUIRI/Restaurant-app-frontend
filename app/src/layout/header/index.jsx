import React, { Fragment, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import Logo from '../../assets/Logo.svg/white-logo.svg'
import { Link } from 'react-router-dom'



function Header() {
  const [nav, setNav] = useState(false)
  return (
    <Fragment>
      <div className='mx-auto w-full flex justify-between items-center px-8 bg-gray-800/25'>
        {/** Mobile Menu Button */}
        {/* <button className='md:hidden' onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={30} /> : <BiMenu size={30} />}
        </button> */}
        <div className="md:ml-10 flex p-2 justify-between  items-center ">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 lg:h-16 h-12 pr-4`}
          />
        </div>

        <div className='flex items-center gap-4'>
          {/* signIn and login */}
          <div className='flex items-center gap-4'>
            <Link to={"signIn"} className='bg-orange text-black font-bold py-3 px-10 rounded-lg bg-white'>Sign In</Link> 
          </div>

          {/** cart and wishlist */}
          <div className='flex items-center gap-4'>
            <Link to={"/login"} className='bg-orange text-black font-bold py-3 px-10 rounded-lg bg-white'>Login</Link> 
          </div>
        </div>
        {/** Mobile Menu */}
        <div className={`md:hidden ${nav ? 'block' : 'hidden'}`}>
          <div className='flex flex-col gap-4'>
            <Link to='/login' className='bg-orange text-white font-bold py-2 px-10 rounded-lg bg-yellow-400 w-96'>Sign In</Link></div>
          <div className='flex flex-col gap-4'>
            <Link to='login' className='bg-orange text-white font-bold py-3 px-10 rounded-lg bg-yellow-400 w-96'>Login</Link>
          </div>
        </div>






      </div>

    </Fragment>



  )
}

export default Header