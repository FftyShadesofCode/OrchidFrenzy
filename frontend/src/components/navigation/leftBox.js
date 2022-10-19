import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'

import tickSound from '../../assets/sounds/tick.wav'
import {
  FiChevronsLeft
} from 'react-icons/fi'

export default function LeftBox({ showArrows, isActive, moveLeft }) {
  const [playSound] = useSound(tickSound, { volume: 0.6 })
  const [clickEffect, setClickEffect] = useState(false)

  useEffect(() => {
    if (clickEffect) {
      setTimeout(() => {
        setClickEffect(false)
      }, 200)
    }
  }, [clickEffect])


  function handleClick() {
    moveLeft()
    playSound()
    setClickEffect(true)
  }

  return (
      <div
          className={isActive.left ? 'left-box active' : 'left-box'}
          onClick={isActive.left ? handleClick : null}
      >
        {
          showArrows ?
              <FiChevronsLeft
                  fontSize='small'
                  className={clickEffect ? 'text-primaryPurple' : 'white'}
              />
              :
              null
        }
      </div>
  )
}