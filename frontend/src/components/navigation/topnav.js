import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from './navItems'
import MenuItems from './MenuItems'

import Logo from '../../assets/logo-solid.png'

export default function TopNav() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <nav className={`h-[100px] px-2 fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-teal shadow-lg shadow-primaryPurple`}>
            <div className={`mx-auto flex justify-between items-center p-4 text-white`}>
                <Link to='/' className={`h-[85px] flex items-center`}>
                    <img src={Logo} alt='' className={`h-full w-full p-2`} />
                </Link>

                <ul className={`flex list-none no-underline text-xl items-center flex-wrap`}>
                    {navLinks.map((item) => {
                        const depthLevel = 0
                        return <MenuItems items={item} key={item.label} depthLevel={depthLevel} className={``} />
                    })}
                </ul>

            </div>
        </nav>
    )
}