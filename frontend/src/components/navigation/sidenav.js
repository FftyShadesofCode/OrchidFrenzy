import React, { useState } from 'react'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faAnglesLeft
} from '@fortawesome/free-solid-svg-icons'

import SubSidenav from './subSidenav'
import { sideMenuItems } from './navItems'
import Logo from '../../assets/logo-solid.png'
import LogoText from '../../assets/logo-text.png'

const Sidenav = () => {
    const [showSidebar, setShowSideBar] = useState(true)

    const toggleSidebar = () => {
        setShowSideBar(!showSidebar)
    }

    return (
        <div className={`transition-all duration-500 fixed right-0 mr-[25px] m-4 rounded-2xl border-2 border-primaryPurple border-md bg-gradient-to-tl from-darkPurple to-teal text-white h-[88vh] top-16 ${showSidebar ? 'w-72' : 'w-20'}`}>
            <button className={`flex gap-x-4 w-10 h-10 items-center`} onClick={toggleSidebar} >
                <FontAwesomeIcon icon={faAnglesLeft} className={`absolute cursor-pointer right-4 top-3 w-7 h-auto text-white duration-500 ${showSidebar && 'rotate-180'}`} />
            </button>
            <div className={`relative duration-300`}>
                {showSidebar ? (

                    <img
                        src={Logo}
                        alt=''
                        className={`w-64 w-full h-auto m-2 duration-500`}
                    />
                ) :
                    <img
                        src={LogoText}
                        alt=''
                        className={`w-14 h-auto m-2 duration-500`}
                    />}

                <div className="relative m-2">
                    <label
                        className="absolute inset-y-0 left-0 flex items-center"
                        htmlFor="searchP"
                    >
                        <FontAwesomeIcon icon={faSearch} className={`w-10 h-10 text-primaryPurple list-none h-[60px] no-underline hover:cursor-pointer duration-200 ${!showSidebar && 'ml-3'} ${showSidebar && 'text-sapphireBlue scale-50'}`} />
                    </label>
                    <input
                        id="searchP"
                        type="text"
                        placeholder="Search..."
                        className={`w-full border border-gray-300 hover:border-primaryPurple pl-10 py-3 pr-4 text-indigo rounded-md focus:outline-none focus:ring focus:border-iris duration-200 placeholder-blackOverlay ${!showSidebar && 'scale-0'}`}
                    />
                </div>

                <nav className='flex content-evenly text-white'>
                    <div>
                        {sideMenuItems.map((item, index) => {
                            return <SubSidenav item={item} key={index} onClick={toggleSidebar} />
                        })}
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Sidenav