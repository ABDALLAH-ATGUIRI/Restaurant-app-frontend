import React, { Fragment, useContext, useState } from 'react'
import { AuthContext } from "../../../context/Auth";
import { Link } from 'react-router-dom';

const Index = ({ title, user }) => {
    const { logout } = useContext(AuthContext);
    const [open, setOpen] = useState(true);

    return (
        <Fragment>
            <nav className='w-full flex justify-between items-center px-12 py-3 border-grey-900 border-b-[0.1px] '>
                <div>
                    <h1 className=' font-bold first-letter:uppercase text-2xl text-white'>{title}</h1>
                </div>
                <div className="relative ml-3">
                    <div>
                        <button type="button" className="flex  justify-center items-center gap-2 " id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => { setOpen(!open) }} >
                            <span className=" md:block hidden text-md text-white font-semibold">{user.firstName} {user.lastName}</span>
                            <img className="h-12 w-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" src={user.image} alt="" />
                        </button>
                    </div>


                    <div className="absolute right-0  z-10 mt-6 w-40 origin-top-left rounded-md bg-white text-red-600 p-2 font-semibold text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" hidden={open} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <Link className="dropdown-item" to="/" onClick={() => {
                            localStorage.clear("token");
                            logout();
                        }}>
                            Se déconnecter
                        </Link>

                    </div>
                </div>
            </nav >

        </Fragment >
    )
}

export default Index