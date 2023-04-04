import React, { createRef, useEffect, useRef, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const DropdownButton = (props) => {
  const id = window.location.href.split('/').pop();
  const [openToggle, setOpenToggle] = useState(true);
  const [activeButton, setActiveButton] = useState("");

  const isActiveButton = () => {
    const isActive = id == props.menuItem.path?.split('/').pop();
    const isChildrenActive = props.menuItem.children?.findIndex((item) => item.path.split('/').pop() == id) > -1;
    return isActive || isChildrenActive ? setActiveButton("active") : setActiveButton("")
  }
  useEffect(() => { isActiveButton() }, [id])

  return (
    <>


      {/* Button with link without children type link */
        (props.menuItem.type === 'link') ?
          <Link to={props.menuItem.path} className={`relative flex pl-6 pb-3 pt-3 w-full border-none cursor-pointer font-semibold  hover:bg-yellow-100 ${activeButton} [&.active]:bg-yellow-200 focus:bg-yellow-200 text-gray-500 text-sm items-center gap-x-4  `}>
            {props.menuItem.icon}
            <span className={`flex items-center justify-between w-full pr-6 origin-left duration-200`}>
              {props.menuItem.title}
            </span>
            {activeButton && <div className='w-1 h-full bg-yellow-300 rounded-xl absolute right-0'></div>}

          </Link>
          : ''
      }



      {/* Button with children type sub   */
        (props.menuItem.type === 'sub') ?
          <button className={`flex pl-6 py-3 relative w-full border-none cursor-pointer font-semibold   text-gray-500 text-sm items-center gap-x-4 hover:bg-yellow-100 ${activeButton}  [&.active]:bg-yellow-200 focus:bg-yellow-200 `} onClick={() => { setOpenToggle(!openToggle) }}>
            {props.menuItem.icon}
            <span className={`flex items-center justify-between w-full pr-6 origin-left duration-200`}>
              {props.menuItem.title}
              <RiArrowDropDownLine className={openToggle ? "-rotate-90" : "rotate-0"} size={25} />
            </span>
            {activeButton && <div className='w-1 h-full bg-yellow-300 rounded-xl absolute right-0'></div>}
          </button> : ""
      }



      {/* Children of button with children type sub   */
        props.menuItem.children &&

        <ul className="sidebar-submenu"
          style={(!openToggle || activeButton) ? { opacity: 1, transition: 'opacity 500ms ease-in', display: "block" } : { display: "none" }}>

          {props.menuItem.children.map((childrenItem, index) => {
            return (
              <li key={index} className={`relative flex  border-l-2 border-gray-400 ml-9 text-gray-500 text-sm items-center gap-x-4  `}>

                <div className='border-b-2 top-[10px]  border-gray-400 p-1 w-1 absolute'>
                  {id == childrenItem.path.split('/').pop() && <span className='p-1 -left-[5px] -bottom-[5px] bg-yellow-400 rounded absolute'></span>}
                </div>

                {(childrenItem.type === 'link') ?
                  <Link to={childrenItem.path} className={`${id == childrenItem.path.split('/').pop() && "active"} ease-in-out [&.active]:text-yellow-400 [&.active]:font-bold text-center p-2 ml-2`} >{childrenItem.title}</Link>
                  : ''}

              </li>
            )
          })}
        </ul>
      }

    </>
  )
}
