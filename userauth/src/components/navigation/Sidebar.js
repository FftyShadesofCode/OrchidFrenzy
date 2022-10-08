import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Submenu from './Submenu'
import { links } from './data'

import {
    faXmark,
    faSearch,
    faAnglesRight
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import Logo from '../../assets/Logo.png'
import {useGlobalContext} from "./context"

const Sidebar = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className={`transition-all duration-500 fixed top-0`}>
            <div className={
                `bg-lightPink h-screen p-5 shadow-md shadow-[0_10px_15px_10px_rgba(176,30,143,0.7)] border-r border-black border-md pt-8 relative duration-300 ${open ? "w-72" : "w-20" }`
            }>
                <div className="flex gap-x-4 items-center">
                    <FontAwesomeIcon icon={faAnglesRight} className={`absolute cursor-pointer right-3 top-3 w-7 border-mainGreen border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                    <img
                        src={Logo}
                        className={`cursor-pointer duration-500 w-[100px] h-auto ${open && "rotate-[360deg]" }`}
                    />
                    <h1
                        className={`text-whiteCatt origin-left font-medium text-2xl text-center duration-200 ${!open && "scale-0"} `}
                    >
                        Orchi-Dashboard
                    </h1>
                </div>
                <div className="relative mt-6">
                    <label
                        className="absolute inset-y-0 left-0 flex items-center"
                        htmlFor="searchP"
                    >
                        <FontAwesomeIcon icon={faSearch} className={`w-10 h-10 text-whiteCatt text-xl p-5 list-none h-[60px] no-underline hover:bg-greenOverlay hover:border-l hover:border-whiteCatt hover:cursor-pointer duration-200 ${open && 'text-deepPink scale-50'}`} />
                    </label>
                    <input
                        id="searchP"
                        type="text"
                        placeholder="Search"
                        className={`w-full border border-gray-300 hover:border-deepPink pl-16 py-3 pr-4 text-deepPink rounded-md focus:outline-none focus:ring focus:border-mainGreen duration-200 ${!open && "scale-0"}`}
                    />
                </div>

                <aside>
                    <nav>
                        {links.map((item, index) => {
                            return <Submenu item={item} key={index} />;
                        })}
                    </nav>
                </aside>

            </div>
        </div>
    )
}

export default Sidebar
