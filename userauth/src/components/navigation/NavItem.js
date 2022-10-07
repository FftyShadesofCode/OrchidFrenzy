import React from 'react'
import { NavLink } from 'react-router-dom'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import NavItemHeader from './NavItemHeader'

import style from './style.module.css'

console.log({ style })
const NavItem = props => {
    const { label, FontAwesomeIcon, to, children } = props.item

    if (children) {
        return <NavItemHeader item={props.item} />
    }

    return (
        <NavLink
            exact
            to={to}
            className={style.navItem}
            activeClassName={style.activeNavItem}
            hoverClassName={style.hoverNavItem}
        >
            <FontAwesomeIcon className={style.navIcon} />
            <span className={style.navLabel}>{label}</span>
        </NavLink>
    )
}

export default NavItem