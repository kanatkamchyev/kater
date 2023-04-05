import Image from 'next/image'


import letter from '../../assets/img/letter_send.svg'
import { Phone, Message, Locate } from '../../assets/svg/svg'
import { Facebook, Instagramm, Telegramm, Wc } from '../../assets/svg/svg'
import xui from '../../assets/img/xuinya.png'
import hide from '../../assets/img/sosok.svg'
import styles from '../Contactus/contactus.module.scss'
import Link from 'next/link'


const Contactus = () => {
    return (
        <div className={styles.Contactus}>
            <div className={styles.contact__inner}>
                <div className={styles.contact__left}>
                    <div className={styles.contact__left__inner}>

                        <div className={styles.contact__left__title}>
                            Напиши нам
                        </div>

                        <div className={styles.contact__left__right}>
                            <div className={styles.contact__left__inputs}>
                                <div className={styles.left__input}>
                                    <label>Ваше имя</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className={styles.contact__left__inputs}>
                                <div className={styles.left__input}>
                                    <label>Gmail / telegram</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className={styles.contact__left__inputs}>
                                <div className={styles.left__input}>
                                    <label>Ваше сообшение </label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className={styles.contact__left__btn}>
                                <button>Отправить</button>
                            </div>
                        </div>
                        <div className={styles.contact__left__bg}>
                            <Image src={letter} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.contact__center}>
                    <Image src={xui} className={styles.xui} alt="" />
                    <Image src={hide} className={styles.hidden__con} alt='' />
                </div>

                <div className={styles.contact__right}>
                    <div className={styles.contact__right__inner}>

                        <div className={styles.contact__right__title}>
                            Наши контакты
                        </div>
                        <div className={styles.contact__right__describe}>
                            Напиши нам и мы поможем вам  с вашими вопросами
                        </div>
                        <div className={styles.contact__right__phone}>
                            <a href="tel:+996552011977"> <Phone /> +996(552 01 19 77)</a>
                        </div>
                        <div className={styles.contact__right__phone}>
                            <a href="sms:/+996552011977/sms sended!"><Message /> demo@gmail.com</a>
                        </div>
                        <div className={styles.contact__right__phone}>
                            <Locate />
                            <div className={styles.right__phone__p}>
                                <p>132 Dartmouth Street Boston,</p>
                                <p>Massachusetts 02156 United States</p>
                            </div>

                        </div>

                        <div className={styles.contact__right__lis}>
                            <Link href='https://vk.com/id197552724'>  <Wc /> </Link>
                            <Link href='https://instagram.com/sergey.abramov_?igshid=YmMyMTA2M2Y='><Instagramm /> </Link>
                            <Link href='https://www.facebook.com/abramov.screamzloy'> <Facebook />  </Link>
                            <Link href='https://t.me/zakazmangoosemarine'> <Telegramm />  </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactus
