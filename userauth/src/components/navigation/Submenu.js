import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Submenu = ({ item, open }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)


    return (
        <div>
            <Link className='flex justify-between items-center text-whiteCatt text-xl p-5 list-none h-[60px] no-underline hover:bg-greenOverlay hover:border hover:border-deepPink hover:cursor-pointer mt-6' to={item.path}
                  onClick={item.subNav && showSubnav}>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={item.icon} className={`w-10 h-10 mr-6 duration-200 ${open && "hidden"}`} />
                    <h1 className={`ml-[16px] text-whiteCatt origin-left text-2xl text-center mr-10 duration-200 ${open && "opacity-0"}`}>{item.text}</h1>
                </div>
                <div className={`w-5 h-5 duration-200 ${open && "opacity-0"}`}>
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
                        <Link to={item.path} key={index} className={`bg-deepPinkOverlay min-h-[60px] pl-12 flex items-center no-underline text-whiteCatt text-xl hover:bg-greenOverlay opacity-1 duration-200 ${open && "opacity-0"}`}>
                            <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 duration-200 ${open && "opacity-0"}`} />
                            <span className={`ml-[16px] text-whiteCatt origin-left font-medium text-2xl text-center duration-200 ${!subnav && "scale-0"}`}>{item.text}</span>
                        </Link>
                    );
                })}
        </div>
    );
};

export default Submenu