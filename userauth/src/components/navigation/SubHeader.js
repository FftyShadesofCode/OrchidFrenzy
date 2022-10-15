import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const SubHeader = ({ item, active, toggleSidebar }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)


    return (
        <div>
            <Link className='flex justify-between items-center text-white text-xl p-5 list-none h-[60px] no-underline hover:bg-gradient-to-l from-primaryPurple to-transparent hover:cursor-pointer mt-6' to={item.path}
                  onClick={item.subNav && showSubnav}>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={item.icon} className={`w-10 h-10 mr-6 text-white`} />
                    <h1 className={`ml-[16px] text-white origin-left text-2xl text-center mr-10 duration-200 ${!active && "hidden"}`} onClick={toggleSidebar}>{item.text}</h1>
                </div>
                <div className={`w-5 h-5 duration-200 ${!active && "hidden"}`}>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={`bg-irisOverlay min-h-[60px] px-16 flex items-center no-underline text-white text-xl hover:bg-gradient-to-l from-primaryPurple to-transparent opacity-1 duration-200`}>
                            <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 duration-200 ${active && "opacity-1"}`} />
                            <span className={`ml-[16px] text-white origin-left font-medium text-2xl text-center duration-200 ${!subnav && "scale-0"}`}>{item.text}</span>
                        </Link>
                    );
                })}
        </div>
    );
};

export default SubHeader