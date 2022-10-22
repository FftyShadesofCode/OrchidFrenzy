import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const SubHeader = ({ item, showSidebar, toggleSidebar }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)


    return (
        <div>
            <Link to={item.path} onClick={item.subNav && showSubnav} className={`flex justify-between items-center text-white text-xl p-4 list-none h-[50px] no-underline hover:bg-gradient-to-r from-primaryPurple to-transparent hover:cursor-pointer mt-4 w-[300px]`}>
                <div className={`flex items-center`}>
                    <FontAwesomeIcon icon={item.icon} className={`w-10 h-10 mr-8 text-white`} />
                    <h1 className={`text-white origin-left text-2xl text-center mr-4 duration-200 ${toggleSidebar && "hidden"}`} onClick={toggleSidebar}>{item.label}</h1>
                </div>
                <div className={`w-5 h-5 mr-6 flex justify-center items-center duration-200 ${!showSubnav && "hidden"} ${!toggleSidebar && 'hidden'}`} onClick={toggleSidebar}>
                    {item.subNav && subnav
                        ?item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </Link>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <Link to={item.path} key={index} className={`bg-irisOverlay min-h-[60px] flex items-center no-underline text-white text-xl hover:bg-gradient-to-l from-primaryPurple to-transparent opacity-1 duration-200 ${toggleSidebar ? 'px-16' : 'px-8'}`}>
                        <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 duration-200`} />
                        <span className={`ml-[24px] text-white origin-left font-medium text-2xl text-center duration-200 ${showSidebar && "hidden"}`} onClick={toggleSidebar}>{item.label}</span>
                    </Link>
                )
            })}
        </div>
    );
};

export default SubHeader