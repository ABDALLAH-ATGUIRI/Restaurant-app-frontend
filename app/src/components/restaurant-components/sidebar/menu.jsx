import { RiFileList3Line } from "react-icons/ri";
import { IoAnalyticsSharp, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";

export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Dashboards,Widgets",
        Items: [
            { path: `${process.env.PUBLIC_URL}/Dashboard`, icon: < AiOutlineHome size={30} />, type: 'link', active: false, title: 'Dashboard' },
            { path: `${process.env.PUBLIC_URL}/Orders`, icon: <RiFileList3Line size={30} />, type: 'link', active: false, title: 'Orders' },
            { path: `${process.env.PUBLIC_URL}/Tables`, icon: < MdUpdate size={30} />, type: 'link', active: false, title: 'Tables' },
            { path: `${process.env.PUBLIC_URL}/Analytics`, icon: <IoAnalyticsSharp size={30} />, type: 'link', active: false, title: 'Analytics' },
            { path: `${process.env.PUBLIC_URL}/Settings`, icon: <IoSettingsOutline size={30} />, type: 'link', active: false, title: 'Settings' },


        ]
    },

]