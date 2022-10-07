import React, { useState } from 'react'

import SidebarMenu from "./SidebarMenu"

import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/Logo.png'

export default function Sidebar() {
    const [open, setOpen] = useState(true)

    return (
        <div className={`${open ? "w-72" : "w-20" } h-screen bg-deepPink pt-8 p-5 relative duration-300`}>

            <FontAwesomeIcon icon={faAnglesRight} className={`absolute cursor-pointer right-3 top-9 w-7 border-mainGreen border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

            <div className='flex gap-x-4 items-center max-w-[100px] rounded-full bg-lightPink'>

                <img src={Logo} alt='' className={`cursor-pointer duration-500 w-full ${open && "rotate-[360deg]" }`} />

                <h1 className={`text-white origin-left font-medium text-3xl duration-200 text-center ${!open && "scale-0"} `} >
                    Orchi-Dashboard
                </h1>

            </div>

            <SidebarMenu />

        </div>
    );
};