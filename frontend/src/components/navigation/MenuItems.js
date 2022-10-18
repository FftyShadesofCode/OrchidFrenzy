import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Dropdown from './dropdown'

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false)
            }
        }
        document.addEventListener('mousedown', handler)
        document.addEventListener('touchstart', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
            document.removeEventListener('touchstart', handler)
        }
    }, [dropdown])

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true)
    }

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false)
    }

    return (
        <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`mx-6`} >
            {items.submenu ? (
                <>
                    <button type='button' aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => !prev)}>
                        {items.label} {' '}
                        {depthLevel > 0 ? <span> {items.icon} </span> : <span className={``} />}
                    </button>
                    <Dropdown submenus={items.submenu} depthLevel={depthLevel} />
                </>
            ) : (
                <Link to={items.path}>{items.label}</Link>
            )}
        </li>
    )
}

export default MenuItems