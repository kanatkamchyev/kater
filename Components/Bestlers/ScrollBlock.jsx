import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useScrollBlock = () => {
    const bodyStyle = document.body.style

    const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden')

    useEffect(() => {
        bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
    }, [isLocked, bodyStyle])

    const toggle = () => setIsLocked(!isLocked)

    return [isLocked, toggle]

}

export default useScrollBlock
