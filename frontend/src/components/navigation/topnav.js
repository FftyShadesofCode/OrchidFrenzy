import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'

import selectionSound from '../../assets/sounds/selection.wav'
import { navLinks } from './navItems'

import './styles.css'

export default function Topnav() {
    const [selected, setSelected] = useState('')
    const [playSound] = useSound(selectionSound, {volume: 0.9 })

    function handleClick(item, event) {
        setSelected(item)
        playSound()
    }

    return (
        <div className='wrapper z-50'>
            <div className={`border-primaryPurple border-2 main-container`}>
                <div className='items-container'>
                    <div className='movable-container'>

                        {navLinks.map((item, id) => {
                            return (
                                selected === item ?
                                    <Link className={`selected`} onClick={(event) => handleClick(item, event)} key={id}>
                                        {
                                            <div to={item.path} className={`ripple`}>

                                            </div>
                                        }
                                        {item.label}
                                    </Link>
                                    :
                                    <Link to={item.path} key={id} onClick={(event) => handleClick(item, event)}>
                                        {item.label}
                                    </Link>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}