import React, { createRef, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export const DashboardButton = ({ menuItem }) => {
    const id = window.location.href.split('/').pop()[2];
    const [activeButton, setActiveButton] = useState("");

    const isActiveButton = () => {
        const isActive = id == menuItem.path?.split('/').pop();

        return isActive ? setActiveButton("active") : setActiveButton("")
    }
    useEffect(() => { isActiveButton() }, [id])

    return (
        <>
            {/* Button with link without children type link */
                (menuItem.type === 'link') ?
                    <Link to={menuItem.path} key={menuItem.title} className={`relative flex justify-center rounded-md p-1 border-none cursor-pointer font-semibold  hover:bg-orange-500 ${activeButton} [&.active]:bg-orange-500 focus:bg-orange-500 text-white text-sm items-center  `}>
                        {menuItem.icon}
                        {/* {activeButton && <div className='w-1 h-full bg-orange-500 rounded-xl absolute right-0'></div>} */}
                    </Link>
                    : ''
            }

        </>
    )
}
