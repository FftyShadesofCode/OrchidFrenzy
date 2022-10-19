import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'

import tickSound from '../../assets/sounds/tick.wav'
import {
    FiChevronDown
} from "react-icons/all"

export default function TopBox({ showArrows, isActive, moveUp }) {
    const [playSound] =useSound(tickSound, {volume: 0.6 })
    const [clickEffect, setClickEffect] = useState(false)

    useEffect(() => {
        if (clickEffect) {
            setTimeout(() => {
                setClickEffect(false)
            }, 200)
        }
    }, [clickEffect])

    function handleClick() {
        moveUp()
        playSound()
        setClickEffect(true)
    }

    return (
        <div className={isActive.top ? 'top-box active' : 'top-box'}>

        </div>
    )
}