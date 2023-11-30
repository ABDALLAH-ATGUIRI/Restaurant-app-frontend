import { IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";

export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Dashboards,Widgets",
        Items: [
            { path: `dashboard`, icon: < AiOutlineHome size={30} />, type: 'link', active: false, title: 'Dashboard' },
            { path: `restaurant`, icon: <IoRestaurantOutline size={30} />, type: 'link', active: false, title: 'Restaurant' },
            { path: `restaurant/menu`, icon: <IoRestaurantOutline size={30} />, type: 'link', active: false, title: 'Restaurant' },
            { path: `managers`, icon: <GrUserManager size={30} />, type: 'link', active: false, title: 'Managers' },


        ]
    },

]