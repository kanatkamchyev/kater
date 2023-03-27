import React, { useState } from 'react'
import Image from 'next/image'


import lodka from '../../assets/img/lodkaJSN.svg'
import { KaterBack, KaterPlus } from '../../assets/svg/svg'
import BoxKater from './BoxKater'
import styles from  '../Kater/kater.module.scss'
import KaterDescribe from './KaterDescribe'
import TransDescribe from './TransDescribe'
import HelmDescribe from './HelmDescribe'
import MotorsDescribe from './MotorsDescribe'
import RadarDescribe from './RadarDescribe'



const Katers = [
    {
        id: 1,
        title: 'Открытый катер',
        image: '/imgs/openkater.png',
    },

    {
        id: 2,
        title: 'Закрытый катер',
        image: '/imgs/closedkater.png',
    },

    {
        id: 3,
        title: 'Парусный катер',
        image: '/imgs/paruskater.png',
    },

    {
        id: 4,
        title: 'Яхты премиум класса',
        image: '/imgs/yaxtpremium.png',
    }
]


const Kater = () => {

    const [activeKater, setActiveKater] = useState(false)
    const [activeRadar, setActiveRadar] = useState(false)
    const [activeTrans, setActiveTrans] = useState(false)
    const [activeHelm, setActiveHelm] = useState(false)
    const [activeRadarer, setActiveRadarer] = useState(false)
    const [activeMotor, setActiveMotor] = useState(false)

    return (
        <div className={styles.Kater}>
            <div className={activeKater? styles.kater__inner_active : styles.kater__inner}>
                <div className={styles.kater__title}>
                    <p>Визуальный подбор деталей</p>
                </div>

                {
                    activeKater ?
                        <>
                            <div className={styles.about__kater__detail}>
                                <div className={styles.toBack__icon__kater} onClick={() => setActiveKater(false)}>
                                    <KaterBack />
                                </div>
                                <div className={styles.about__detail__kater__stadii1}>
                                    <div className={styles.kater__detail} onClick={()=> setActiveHelm(true)}>
                                        Helm Station
                                        <KaterPlus />
                                    </div>
                                    <div className={styles.kater__detail1} onClick={()=> setActiveRadarer(true)}>
                                        <KaterPlus />
                                        Radar
                                    </div>
                                    <div className={styles.interegation__modal}>
                                        <div className={styles.kater__detail} onClick={()=> setActiveRadar(true)}>
                                            <KaterPlus />
                                            Audio Integration
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.about__detail__kater__stadii2} >
                                    <div className={styles.kater__detail}>
                                        C-Map
                                        <KaterPlus />
                                    </div>
                                </div>

                                <div className={styles.about__detail__kater__stadii3}>
                                    <div className={styles.kater__detail} onClick={()=> setActiveMotor(true)}>
                                        Motors
                                        <KaterPlus />
                                    </div>
                                    <div className={styles.kater__detail} onClick={()=> setActiveTrans(true)}>
                                        <KaterPlus />
                                        Transducer
                                    </div>
                                </div>
                            </div>
                            <div className={styles.kater__about__lodka}>
                                <Image src={lodka} alt="" />
                            </div>
                            <KaterDescribe active={activeRadar} setActive={setActiveRadar} />
                            <TransDescribe active={activeTrans} setActive={setActiveTrans} />
                            <HelmDescribe active={activeHelm} setActive={setActiveHelm}/>
                            <RadarDescribe active={activeRadarer} setActive={setActiveRadarer}/>
                            <MotorsDescribe active={activeMotor} setActive={setActiveMotor}/>
                        </>


                        :

                        <div className={styles.kater__names}>
                            <div className={styles.kater__first}>
                                {
                                    Katers.map((kater) => <BoxKater kater={kater} id={kater.id} activeKater={activeKater} setActiveKater={setActiveKater} />)

                                }

                            </div>
                        </div>

                }



            </div>
        </div>
    )
}

export default Kater
