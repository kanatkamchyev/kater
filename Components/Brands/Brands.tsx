import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import humminbird from '../../assets/img/humminbird.svg'
import mercury from '../../assets/img/mercury.svg'
import yamaha from '../../assets/img/yamaha.svg'
import suzuki from '../../assets/img/suzuki.svg'
import garmin from '../../assets/img/garmin.svg'
import raymarine from '../../assets/img/raymarine.svg'
import lowrance from '../../assets/img/lowrance.svg'
import seak from '../../assets/img/seak.svg'
import thermo from '../../assets/img/thermo.svg'
import opacmare from '../../assets/img/opacmare.svg'
import williams from '../../assets/img/williams.svg'
import { SendCatalog } from '../../assets/svg/svg'
import styles from '../Brands/brands.module.scss'

import {categories} from '../../Components/FakeObjects'
import { categoryElements } from '../../Components/FakeObjects'
import { truncate } from 'fs/promises'
import { useRouter } from 'next/router'
import {Details} from '../Bestlers/Bestlers'
const Brands = () => {

    const [activeAll, setActiveAll] = useState(true)
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
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        {
                                            categoryElements.map((item) => item.categoryId === item1.id ? 
                                            
                                            <div 
                                            
                                            onClick={() => {
                                                router.push({
                                                  pathname: '/Catalog/',
                                                  query: { activeAll: true, id: item.id},
                                                })
                                            }}>
                                            <li>{item.title} <SendCatalog /> </li>
                                        </div>: null)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
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
