import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { BsChevronRight } from 'react-icons/bs'

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

    const closeDropdown = () => {
        dropdown && setDropdown(false)
    }

    return (
        <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown} className={`mx-6 relative`} >
            {items.submenu ? (
                <>
                    <button type='button' aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => !prev)} className={`flex items-center cursor-pointer w-full`}>
                        {window.innerWidth < 960 && depthLevel === 0 ? (
                            items.label
                        ) : (
                            <Link to={items.path}>{items.label}</Link>
                        )}

                        {depthLevel > 0 &&
                            window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
                                <span className={`ml-[3px]`}> <BsChevronRight /> </span> ) : (
                                    <span className={`inline-block`} />
                                )}
                    </button>
                    <Dropdown submenus={items.submenu} depthLevel={depthLevel} dropdown={dropdown} />
                </>
            ) : (
                <Link to={items.path}>{items.label}</Link>
            )}
        </li>
    )
}

export default MenuItems