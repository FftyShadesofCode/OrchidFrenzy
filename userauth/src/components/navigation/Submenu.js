import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Submenu = ({ item, open }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)


    return (
        <div>
            <Link className='flex justify-between items-center text-whiteCatt text-xl p-5 list-none h-[60px] no-underline hover:bg-greenOverlay hover:border hover:border-deepPink hover:cursor-pointer mt-5' to={item.path}
                 onClick={item.subNav && showSubnav}>
                <div className=''>
                    {item.icon}
                    <h1 className={`ml-[16px] text-whiteCatt origin-left text-2xl text-center duration-200 ${open && "opacity-0"}`}>{item.text}</h1>
                </div>
                <div>
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
                        <Link to={item.path} key={index} className={`bg-deepPinkOverlay min-h-[60px] pl-12 flex items-center no-underline text-whiteCatt text-xl hover:bg-greenOverlay duration-200 ${!open && "opacity-0"}`}>
                            {item.icon}
                            <span className={`text-whiteCatt origin-left font-medium text-2xl text-center duration-200 ${!subnav && "scale-0"}`}>{item.text}</span>
                        </Link>
                    );
                })}
        </div>
    );
};

export default Submenu