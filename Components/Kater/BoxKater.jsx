import React, { useEffect, useState } from 'react'
import Image from 'next/image'


import styles from '../Kater/kater.module.scss'
import { useDispatch } from 'react-redux';
import { setCurrentBestler } from '../../redux/brestler/reducer';

const BoxKater = ({ kater, activeKater, setActiveKater }) => {


    const dispatch = useDispatch();

    const HandleClick = () => {
        dispatch(setCurrentBestler(kater))
        setActiveKater((!activeKater))
    }


    return (
        <>
                    <div className={styles.kater__box}>
                        <div className={styles.kater__box__imgbg}>
                            <div className={styles.kater__box__image} onClick={HandleClick}>
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
        </>

    )
}

export default BoxKater
