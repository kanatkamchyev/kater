import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



import { SendCatalog } from '../../assets/svg/svg'
import styles from '../Brands/brands.module.scss'
import AboutBrandMore from './AboutBrandMore'
import { categories } from '../../Components/FakeObjects'
import { truncate } from 'fs/promises'
import { useRouter } from 'next/router'
import { Details } from '../Bestlers/Bestlers'
const Brands = () => {

    const router = useRouter()

    return (
        <div className={styles.Brands}>
            <div className={styles.brand__inner}>
                <div className={styles.brand__title}>
                    Бренды
                </div>
                <div className={styles.brand__names}>
                    {
                        categories.map((item1) =>

                            <div className={styles.brand__second__col}>
                                <div className={styles.brand__image__style}>
                                    <div className={styles.brand__first__image}>
                                        <Image className={styles.garmin} src={item1.category_img} alt="" />
                                    </div>
                                <AboutBrandMore item1={item1}/>
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Brands
