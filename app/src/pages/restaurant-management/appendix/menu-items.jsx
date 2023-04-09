import { RiFileList3Line } from "react-icons/ri";
import { IoAnalyticsSharp, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";

export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Dashboards,Widgets",
        Items: [
            { path: `dashboard`, icon: < AiOutlineHome size={30} />, type: 'link', active: false, title: 'Dashboard' },
            { path: `orders`, icon: <RiFileList3Line size={30} />, type: 'link', active: false, title: 'Orders' },
            { path: `tables`, icon: < MdUpdate size={30} />, type: 'link', active: false, title: 'Tables' },
            { path: `analytics`, icon: <IoAnalyticsSharp size={30} />, type: 'link', active: false, title: 'Analytics' },
            { path: `settings`, icon: <IoSettingsOutline size={30} />, type: 'link', active: false, title: 'Settings' },
        ]
    },

]