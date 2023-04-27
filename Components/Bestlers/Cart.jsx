import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import Link from 'next/link'


import defaultImg from '../../assets/img/detail.png'
import { More } from '../../assets/svg/svg'
import { setCurrentBestler } from '../../redux/brestler/reducer'
import styles from '../Bestlers/braslets.module.scss'
import Modal from './Modal'
import useScrollBlock from './ScrollBlock'



const Cart = ({ item }) => {

    const [isLocked, toggle] = useScrollBlock()

    const [active, setActive] = useState(false)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setCurrentBestler(item))
    }, [])

    const HandleClick = () => {
        setActive(true)
    }


    return (
        <div className={styles.card__maxwidth}>
            <div className={styles.brestler__card__inner}>
                <div className={styles.brestler__card__image}>
                    <div className={styles.card__image__inner}>
                        {
                            item.img ?

                                <Image
                                    src={item.img}
                                    alt=""
                                    width='281'
                                    height='314'
                                />
                                :
                                <Image src={defaultImg} alt='' />

                        }
                    </div>
                    <div className={styles.brestler__card__info} onClick={HandleClick}>
                        Инфо <More />
                    </div>
                </div>

                <div className={styles.brestler__card__title}>
                    {item.title.substr(0, 25)}
                </div>
                <div className={styles.brestler__card__btn}>
                    <Link href='/Contacts'>
                        <button>Позвонить</button>
                    </Link>
                </div>
                <Modal active={active} setActive={setActive} item={item}/>
            </div>
        </div>

    )
}

export default Cart
