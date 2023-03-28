import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Kater/kater.module.scss'
import pic from '../../assets/img/pic.png'


import { ClosePopUp } from '../../assets/svg/svg'

const KaterDescribe = ({kater, active, setActive}) => {
  return (
    <div className={active ? 'model_motor active' : 'model_motor'} onClick={()=> setActive(false)}>
        <div className={active ? 'model_content_kater active' : 'model_content_kater'}>
                <div className={styles.model_kater_title}>
                    {kater.name4}
                    <ClosePopUp/>
                </div>
                <div className={styles.model_kater_image}>
                    <Image src={pic} alt="" />
                </div>
                <div className={styles.model__kater__titledescribe}>
                {kater.name4}
                </div>

                <div className={styles.model__kater__describe}>
                {kater.description4.substr(0,300)}
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