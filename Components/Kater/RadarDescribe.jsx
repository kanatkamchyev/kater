import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Kater/kater.module.scss'


import pic from '../../assets/img/pic.png'
import { ClosePopUp, More } from '../../assets/svg/svg'

const KaterDescribe = ({kater, active, setActive}) => {
  return (
    <div className={active ? 'model_radar active' : 'model_radar'} onClick={()=> setActive(false)}>
        <div className={active ? 'model_content_kater active' : 'model_content_kater'}>
                <div className={styles.model_kater_title}>
                    {kater.name1}
                    <ClosePopUp/>
                </div>
                <div className={styles.model_kater_image}>
                    <Image src={pic} alt="" />
                </div>
                <div className={styles.model__kater__titledescribe}>
                {kater.name1}
                </div>

                <div className={styles.model__kater__describe}>
                {kater.description1.substr(0,300)}
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

export default KaterDescribe