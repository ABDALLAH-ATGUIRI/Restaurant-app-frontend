import { Fragment, useEffect, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import Logo from "../../assets/Logo.svg/Group 3.svg";
// import SmallLogo from "../../assets/images/small-logo-wselect.png";
import { DropdownButton } from "../../components/global/DropdownButton";
import { MENUITEMS } from './menu';
import { Link } from "react-router-dom";
import { Hex, lightGray, Yellow } from "../../utils/colors";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";



const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <Fragment>
      <div className={`fixed mt-24 h-full ${open ? "-left-64  w-full  duration-700 ease-in-out" : "left-0 duration-700 ease-in-out"}  `} >

        {/* <div className={`${open ? "hidden" : ""} w-screen h-screen bg-gray-500 absolute duration-700 ease-in-out`}></div> */}

        <div
          className={`w-64 duration-900 ease-in-out h-full relative `}
          style={{ backgroundColor: lightGray }}>

          <ul className="h-full"  >
            <BiMenuAltLeft className={`absolute cursor-pointer -right-20 -top-0  ${!open && "rotate-180 "}`}
              onClick={() => { setOpen(!open); }} size={50} />
            {MENUITEMS.map((Menu, index) => (
              <Fragment key={index} >
                <li className={`pl-4 pb-2 mt-8`} >
                  <h2 className="font-semibold text-gray-600 text-sm uppercase ">{Menu.menutitle}</h2>
                </li>

                {
                  Menu.Items.map((menuItem, i) =>

                    <li
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                    >
                      <DropdownButton menuItem={menuItem} index={i} open={open} />
                    </li>
                  )
                }
              </Fragment>
            ))}
          </ul>
        </div>
      </div >
    </Fragment>

  );
};
export default Sidebar;