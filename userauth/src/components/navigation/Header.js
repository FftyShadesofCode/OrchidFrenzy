import React, { useState } from 'react'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faAnglesLeft
} from '@fortawesome/free-solid-svg-icons'

import SubHeader from './SubHeader'
import { links } from './navLinks'
import Logo from '../../assets/logo-solid.png'
import LogoText from '../../assets/logo-text.png'

const Header = () => {
    const [showSidebar, setShowSideBar] = useState(true)

    const toggleSidebar = () => {
        setShowSideBar(!showSidebar)
    }

    return (
        <div className={`transition-all duration-500 fixed left-0 ml-[25px] mb-[25px] top-28 pb-10 rounded-2xl border-2 border-primaryPurple border-md bg-gradient-to-tl from-darkPurple to-teal text-white h-[80vh] duration-300 ${showSidebar ? 'w-72' : 'w-20'}`}>
            <button className={`flex gap-x-4 w-10 h-10 items-center`} onClick={toggleSidebar} >
                <FontAwesomeIcon icon={faAnglesLeft} className={`absolute cursor-pointer right-4 top-3 w-7 h-auto text-white duration-500 ${!showSidebar && 'rotate-180'}`} />
            </button>
            <div className={`relative duration-300`}>
                {showSidebar ? (

                        <img
                            src={Logo}
                            alt=''
                            className={`w-32 w-full h-auto mx-20 duration-500`}
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
                        {links.map((item, index) => {
                            return <SubHeader item={item} key={index} onClick={toggleSidebar} />
                        })}
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header