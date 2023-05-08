import Link from 'next/link'
import React from 'react'


import HeaderLogo from '../../assets/svg/svg'
import styles from '../Footer/footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.footer__inner}>
            <div className={styles.footer__head}>
                <div className={styles.footer__head__logo}>
                    <HeaderLogo/>
                </div>
            <div className={styles.footer__head__lis}>
                <ul>
                    <Link href='/'><li>Главная</li></Link>
                    <Link href='/Catalog'><li>Каталог</li></Link>
                    <Link href='/About'><li>Про нас</li></Link>
                    <Link href='/Contacts'><li>Контaкты</li></Link>
                </ul>
            </div>
            </div>

            <div className={styles.footer__bottom}>
                <div className={styles.footer__bottom__left}>
                © Mangoose Marine 2023 - Privacy Policy
                </div>
                <div className={styles.footer__bottom__right}>
                 Created by <a href="#">PROlab</a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
