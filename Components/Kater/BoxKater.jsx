import React, { useState } from 'react'
import Image from 'next/image'


import styles from '../Kater/kater.module.scss'

const BoxKater = ({kater, activeKater, setActiveKater}) => {


    return (
        <div className={styles.kater__box}>
            <div className={styles.kater__box__imgbg}>
                <div className={styles.kater__box__image} onClick={() => setActiveKater(!activeKater)}>
                    <Image
                      src={kater.image}
                      alt=""
                      width='880'
                      height='483'
                       />
                    <p>{kater.title}</p>
                </div>
            </div>

        </div>
    )
}

export default BoxKater
