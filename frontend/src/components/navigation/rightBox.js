import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'

import tickSound from '../../assets/sounds/tick.wav'
import {
  FiChevronsRight
} from 'react-icons/fi'

export default function RightBox({ showArrows, isActive, moveRight }) {
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
    moveRight()
    playSound()
    setClickEffect(true)
  }

  return (
    <div
      className={isActive.right ? 'right-box active' : 'right-box'}
      onClick={isActive.right ? handleClick : null}
    >
      {
        showArrows ?
          <FiChevronsRight
            fontSize='small'
            className={clickEffect ? 'text-primaryPurple' : 'white'}
          />
          :
          null
      }
    </div>
  )
}
