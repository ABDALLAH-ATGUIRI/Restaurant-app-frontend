import { Fragment, useState } from "react";
// import SmallLogo from "../../assets/images/small-logo-wselect.png";
import { lightGray } from "../../../utils/colors";
import { DashboardButton } from "../../global/DashboardButton";



const Sidebar = ({ MenuItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className={`${open ? "hidden" : ""} mr-20 duration-700 ease-in-out`}></div>

      <div className={`fixed h-full shadow-lg shadow-gray-900 ${open ? "-left-64  w-full  duration-700 ease-in-out" : "left-0 duration-700 ease-in-out "}  `} >


        <div
          className={`w-20 duration-900 ease-in-out h-full relative `}
          style={{ backgroundColor: lightGray }}>

          <ul className="h-full relative flex items-center justify-around"  >
            {/* {!open && <span className={` p-4`}></span>} */}
            {MenuItems.map((Menu, index) => (
              <Fragment key={index} >
                <div className="  text-white h-1/2 flex flex-col justify-between">
                  {
                    Menu.Items.map((menuItem, i) =>
                      <li
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className={`relative flex justify-center rounded-lg p-2 border-none cursor-pointer font-semibold shadow-inner shadow-slate-50/10 hover:bg-orange-500  focus:bg-orange-500 text-white text-sm items-center`}
                        key={i}
                      >

                        <DashboardButton menuItem={menuItem} index={i} open={open} />
                      </li>
                    )
                  }
                </div>
              </Fragment>
            ))}
          </ul>
        </div>
      </div >
    </Fragment>

  );
};
export default Sidebar;