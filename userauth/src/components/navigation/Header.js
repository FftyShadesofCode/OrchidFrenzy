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
import Logo from '../../assets/Logo.png'
const Sidebar = () => {
    const [active, setActive] = useState(false)

    const showSidebar = () => setActive(!active)
    const closeSidebar = () => setActive(!active)

    return (
        <div className={`transition-all duration-500 fixed m-4 rounded-lg shadow-md shadow-[0_10px_15px_10px_rgba(176,30,143,0.7)] border-r border-black border-md bg-primaryLtPink text-primaryCatt h-[96vh]`}>
            <div className={
                `pt-8 relative duration-300 ${active ? "w-72" : "w-20" }`
            }>
                <div className={`flex gap-x-4 items-center ${active ? 'pr-12' : 'pr-0'}`}>
                    <FontAwesomeIcon icon={faAnglesRight} className={`absolute cursor-pointer right-4 top-3 w-7 h-auto text-primaryCatt ${active && "rotate-180"} ${active ? 'right-4' : '-right-10'}`} onClick={showSidebar} />
                    <img
                        src={Logo}
                        className={`cursor-pointer duration-500 w-[125px] h-auto ${active && "rotate-[360deg]" }`}
                        alt=''
                    />
                    <h1
                        className={`text-primaryCatt origin-left font-medium text-3xl text-center duration-200 ${!active && "scale-0"} `}
                    >
                        <span className='text-secondaryGreen uppercase'>Orchi-D</span>ashboard
                    </h1>
                </div>
                <div className="relative m-2">
                    <label
                        className="absolute inset-y-0 left-0 flex items-center"
                        htmlFor="searchP"
                    >
                        <FontAwesomeIcon icon={faSearch} className={`w-10 h-10 text-primaryCatt list-none h-[60px] no-underline hover:cursor-pointer duration-200 ${!active && 'ml-3'} ${active && 'text-primaryDeepPink scale-50'}`} />
                    </label>
                    <input
                        id="searchP"
                        type="text"
                        placeholder="Search..."
                        className={`w-full border border-gray-300 hover:border-primaryDeepPink pl-10 py-3 pr-4 text-primaryDeepPink rounded-md focus:outline-none focus:ring focus:border-mainGreen duration-200 placeholder-blackOverlay ${!active && "scale-0"}`}
                    />
                </div>

                <aside className='flex content-evenly text-primaryCatt'>
                    <nav>
                        {links.map((item, index) => {
                            return <SubHeader item={item} key={index} onClick={closeSidebar} />;
                        })}
                    </nav>
                </aside>

            </div>
        </div>
    )
}

export default Sidebar