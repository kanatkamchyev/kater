import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ClosePopUp, SendCatalog } from '../../assets/svg/svg'


import { categoryElements } from '../../Components/FakeObjects'
import styles from '../Brands/brands.module.scss'

const AboutBrandMore = ({active, item1, setActive }) => {

    const router = useRouter()
    


    return (
        <>
            <div className={active ? styles.brand__fitst__hovercol_active : styles.brand__fitst__hovercol}>
                <ul className={active ? styles.hidden__motors_active : styles.hidden__motors}>
                    {
                        categoryElements.map((item) => item.categoryId === item1.id ?

                            <div
                                className={active ? styles.itsBitch_active : styles.itsBitch}
                                onClick={() => {
                                    router.push({
                                        pathname: '/Catalog/',
                                        query: { activeAll: true, id: item.id }
                                    })
                                }}>

                                <li>{item.title.substr(0, 23)} <SendCatalog /></li>
                            </div>
                        : null)
                    }
                </ul>
                {
                    active ?
                    <div className={styles.closed__modalka} onClick={() => setActive(false)}>
                        <ClosePopUp/>
                    </div>
                    :
                    null

                }
            </div>
            <div className={styles.brand__hidden__sender} onClick={() => setActive(!active)}>
                <div>
                    <SendCatalog />
                </div>
            </div>
        </>

    )
}

export default AboutBrandMore
