import React from 'react'

import MenuItems from './MenuItems'

const Dropdown = ({ submenus, dropdown, label, depthLevel }) => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? 'submenu' : ''

    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
            {submenus.map((submenu) => {
                return (
                    <MenuItems item={submenu} key={submenu.label} depthLevel={depthLevel} />
                )
            })}
        </ul>
    )
}

export default Dropdown