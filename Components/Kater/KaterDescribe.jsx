import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Kater/kater.module.scss'


import pic from '../../assets/img/pic.png'
import { ClosePopUp } from '../../assets/svg/svg'

const KaterDescribe = ({kater, active, setActive}) => {
  return (
    <div className={active ? 'model_kater active' : 'model_kater'} onClick={()=> setActive(false)}>
        <div className={active ? 'model_content_kater active' : 'model_content_kater'}>
                <div className={styles.model_kater_title}>
                     {kater.name2}
                    <ClosePopUp/>
                </div>
                <div className={styles.model_kater_image}>
                    <Image src={pic} alt="" />
                </div>
                <div className={styles.model__kater__titledescribe}>
                {kater.name2}
                </div>

                <div className={styles.model__kater__describe}>
                {kater.description2.substr(0,300)}
                </div>
                <div className={styles.model__kater__btn}>
                    <Link href='/Catalog'>
                    <button>Каталог</button>
                    </Link>
                </div>

        </div>
      
    </div>
  )
} 

export default KaterDescribe
