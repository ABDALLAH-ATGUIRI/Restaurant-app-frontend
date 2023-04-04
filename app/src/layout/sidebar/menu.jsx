// import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'
import { FaHome, FaUser, FaUsers, FaUsersCog, FaUserShield, FaUserTimes } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Dashboards,Widgets",
        Items: [
            { path: `${process.env.PUBLIC_URL}/Dashboard`, icon: < FaHome size={22} />, type: 'link', active: false, title: 'Dashboard' },
            { path: `${process.env.PUBLIC_URL}/Candidates`, icon: <RiBriefcase4Fill size={22} />, type: 'link', active: false, title: 'Candidates' },
            { path: `${process.env.PUBLIC_URL}/Users`, icon: <FaUsers size={22} />, type: 'link', active: false, title: 'Users' },

        ]
    },
    {
        menutitle: "Empolyees",
        menucontent: "Dashboards,Widgets",
        Items: [
            {
                title: 'Users', icon: <FaUsers size={22} />, type: 'sub', active: false,
                children: [
                    { path: `${process.env.PUBLIC_URL}/offers`, title: "Offers", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/abonnements`, title: "Abonnements", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/domaine-activity`, title: "DomaineActivity", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/salary-range`, title: "Salary Ranges", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/employer-type`, title: "Employer Type", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/carrer-level`, title: "CarrerLevel", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/city`, title: "Cities", type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/country`, title: "Countries", type: 'link' },
                ]
            },


        ]
    },

]