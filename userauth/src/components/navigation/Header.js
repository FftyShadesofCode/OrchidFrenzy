import React, {useState} from 'react'

import SubHeader from './SubHeader'
import { links } from './navLinks'

import {
    faSearch,
    faAnglesRight
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Sidebar = () => {
    const [active, setActive] = useState(false)

    const toggleSidebar = () => setActive(!active)

    return (
        <div className={`transition-all duration-500 fixed m-4 rounded-lg shadow-md shadow-[0_0_15px_10px_rgba(128,0,128,0.5)] border-r border-black border-md bg-teal text-white h-[96vh]`}>
            <div className={`pt-8 relative duration-300 ${active ? "w-72" : "w-20" }`}>
                <div className={`flex gap-x-4 items-center ${active ? 'pr-12' : 'pr-0'}`}>
                    <FontAwesomeIcon icon={faAnglesRight} className={`absolute cursor-pointer right-4 top-3 w-7 h-auto text-white ${active && "rotate-180"} ${active ? 'right-4' : '-right-10'}`} onClick={toggleSidebar} />
                    <h1 className={`text-white origin-left font-medium text-3xl text-center duration-200 ${!active && "scale-0"} `}>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal to-primaryPurple text-5xl uppercase'>Orchi-D</span>ashboard
                    </h1>
                </div>
                <div className="relative m-2">
                    <label
                        className="absolute inset-y-0 left-0 flex items-center"
                        htmlFor="searchP"
                    >
                        <FontAwesomeIcon icon={faSearch} className={`w-10 h-10 text-primaryPurple list-none h-[60px] no-underline hover:cursor-pointer duration-200 ${!active && 'ml-3'} ${active && 'text-sapphireBlue scale-50'}`} />
                    </label>
                    <input
                        id="searchP"
                        type="text"
                        placeholder="Search..."
                        className={`w-full border border-gray-300 hover:border-primaryPurple pl-10 py-3 pr-4 text-indigo rounded-md focus:outline-none focus:ring focus:border-iris duration-200 placeholder-blackOverlay ${!active && "scale-0"}`}
                    />
                </div>

                <aside className='flex content-evenly text-white' onClick={toggleSidebar}>
                    <nav>
                        {links.map((item, index) => {
                            return <SubHeader item={item} key={index} active={active} />;
                        })}
                    </nav>
                </aside>

            </div>
        </div>
    )
}

export default Sidebar