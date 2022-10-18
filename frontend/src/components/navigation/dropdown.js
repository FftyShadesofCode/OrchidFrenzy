import React from 'react'

import MenuItems from './MenuItems'

const Dropdown = ({ submenus, dropdown, label, depthLevel }) => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? 'absolute left-full top-[-7px]' : ''

    return (
        <ul className={`absolute right-0 left-auto z-10 rounded-sm ${dropdownClass} ${dropdown ? 'block' : 'hidden'}`}>
            {submenus.map((submenu) => {
                return (
                    <MenuItems item={submenu} key={submenu.label} depthLevel={depthLevel} />
                )
            })}
        </ul>
    )
}

export default Dropdown