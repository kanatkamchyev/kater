import React from 'react'


import Image from 'next/image'
import pic from '../../assets/img/pic.png'
import styles from  '../Kater/kater.module.scss'
import { ClosePopUp, More } from '../../assets/svg/svg'
import Link from 'next/link'

const HelmDescribe = ({kater, active, setActive}) => {
  return (
    <div className={active ? 'model_trans active' : 'model_trans'} onClick={()=> setActive(false)}>
        <div className={active ? 'model_content_kater active' : 'model_content_kater'}>
                <div className={styles.model_kater_title}>
                     {kater.name5}
                    <ClosePopUp/>
                </div>
                <div className={styles.model_kater_image}>
                    <Image src={pic} alt="" />
                </div>
                <div className={styles.model__kater__titledescribe}>
                {kater.name5}
                </div>

                <div className={styles.model__kater__describe}>
                {kater.description5?.substr(0,300)}
                </div>
                <div className={styles.model__kater__btn}>
                    <Link href='/Catalog'>
                    <button>Каталог <More/></button>

                    </Link>
                </div>

        </div>
      
    </div>
  )
}

export default HelmDescribe