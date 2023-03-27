import React from 'react'
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

const Brands = () => {
    return (
        <div className={styles.Brands}>
            <div className={styles.brand__inner}>
                <div className={styles.brand__title}>
                    Бренды
                </div>
                <div className={styles.brand__names}>
                    <div className={styles.first__column}>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image src={suzuki} alt=""
                                        width='254'
                                        height='171'
                                    />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul >
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href={''}>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href={''}>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href={''}>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image src={yamaha} alt=""
                                        width='346'
                                        height='195'
                                    />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image src={mercury} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image className={styles.hum} src={humminbird} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.second__column}>
                        <div className={styles.brand__second__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image className={styles.garmin} src={garmin} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__second__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image className={styles.low} src={lowrance} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__second__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image className={styles.ray} src={raymarine} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.first__column}>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image className={styles.williams} src={williams} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image src={opacmare} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image src={seak} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.brand__fitst__col}>
                            <div className={styles.brand__image__style}>
                                <div className={styles.brand__first__image}>
                                    <Image src={thermo} alt="" />
                                </div>
                                <div className={styles.brand__fitst__hovercol}>
                                    <ul>
                                        <Link href='/Catalog'>
                                            <li>Моторы <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Радары <SendCatalog /> </li>
                                        </Link>

                                        <Link href=''>
                                            <li>Кондиционер <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Интерцептор <SendCatalog /> </li>
                                        </Link>
                                        <Link href=''>
                                            <li>Автопилот <SendCatalog /> </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.brand__hidden__sender}>
                                <Link href='/Catalog'>
                                    <SendCatalog />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brands
