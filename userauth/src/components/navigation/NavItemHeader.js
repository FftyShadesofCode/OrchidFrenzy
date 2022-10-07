import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import style from './style.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`

const NavItemHeader = props => {
    const { item } = props
    const { label, FontAwesomeIcon, to: headerToPath, children } = item
    const location = useLocation()

    const [expanded, setExpand] = useState(
        location.pathname.includes(headerToPath)
    )

    const onExpandChange = e => {
        e.preventDefault()
        setExpand(expanded => !expanded)
    }

    return (
        <>
            <button
                className={`${style.navItem} ${style.navItemHeaderButton}`}
                onClick={onExpandChange}
            >
                <FontAwesomeIcon className={style.navIcon} />
                <span className={style.navLabel}>{label}</span>
            </button>

            {expanded && (
                <div className={style.navChildrenBlock}>
                    {children.map((item, index) => {
                        const key = `${item.label}-${index}`

                        const { label, FontAwesomeIcon, children } = item

                        if (children) {
                            return (
                                <div key={key} >
                                    <NavItemHeader item={{
                                        ...item,
                                        to: resolveLinkPath(item.to, props.item.to),
                                    }}
                                />
                                </div>
                            )
                        }

                        return (
                            <NavLink
                                key={key}
                                to={resolveLinkPath(item.to, props.item.to)}
                                className={style.navItem}
                                activeClassName={style.activeNavItem}
                                hoverclassName={style.hoverNavItem}
                            >
                                <FontAwesomeIcon className={style.navIcon} />
                                <span className={style.navLabel} >{label}</span>
                            </NavLink>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default NavItemHeader