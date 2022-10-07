import React, {useState} from 'react'

import NavItem from './NavItem'
import MenuOptions from './menuOptions'

import style from './style.module.css'

export default function SidebarMenu() {
    const [open, setOpen] = useState(true)

    return (
        <nav className={style.sidebar}>
            {MenuOptions.map((item, index) => {
                return <NavItem key={`${item.label}-${index}`} item={item} />
            })}
        </nav>
    );
};