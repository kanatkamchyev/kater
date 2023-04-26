import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';


import gradient from '../CanIHelp/assets/svg/home_bg.svg'
import letter from '../../assets/img/letter.svg'
import { Facebook, Instagramm, Telegramm, Wc } from '../../assets/svg/svg'
import about from '../../assets/img/aboutimg.png'
import styles from '../AboutUs/aboutus.module.scss'
import Link from 'next/link';


const Aboutus = ({ Bigtitle }) => {


    return (
        <div className={styles.Aboutus}>
            <div className={styles.about__inner}>
                {Bigtitle === '' ?
                    <div className={styles.about__card__head}>
                        <div className={styles.about__card__head__title}>
                            Про компанию
                        </div>
                        {/* <div className={styles.about__card__head__description}>
                            Миссия компании: стать надёжным другом и поставщиком владельцу судна!
                            мМы помогаем Вам воплотить мечту в реальность, не переплачивая …
                        </div> */}
                        <div className={styles.about__card__head__bg}>
                            <Image src={gradient} alt="" />
                        </div>
                    </div>
                    : null
                }
                <div className={styles.about__card__wrapper}>
                    <div className={styles.about__card}>
                        <div className={styles.about__card__left}>
                            <div className={styles.about__card__title}>
                                {Bigtitle}
                            </div>

                            <div className={styles.about__card__description}>
                                Миссия компании: стать надёжным другом и поставщиком владельцу судна!
                                Компания Mangoose-marine предлагает полный спектр услуг в области подбора и продажи судового и навигационного оборудования. Мы стараемся работать напрямую с производителями. Всегда слышим наших Клиентов, консультируем и подбираем соответствующее оборудование под самые сложные проекты и индивидуальные потребности, экономя время и деньги наших клиентов.
                                В компании работают специалисты с многолетним стажем работы, которые регулярно повышают свою квалификацию.
                            </div>

                            <div className={styles.about__company__head}>
                                Основатель компании: Абрамов Сергей
                            </div>

                            <div className={styles.about__card__sites}>
                                <Link href='https://vk.com/id197552724'>  <Wc /> </Link>
                                <Link href='https://instagram.com/sergey.abramov_?igshid=YmMyMTA2M2Y='><Instagramm /> </Link>
                                <Link href='https://www.facebook.com/abramov.screamzloy'> <Facebook />  </Link>
                                <Link href='https://t.me/zakazmangoosemarine'> <Telegramm />  </Link>
                            </div>

                            {
                                Bigtitle === '' ?
                                    <div className={styles.about__card__letter}>
                                        <Image src={letter} alt="" />
                                    </div>
                                    :
                                    null
                            }

                        </div>

                        <div className={styles.about__card__right}>
                            <div className={styles.about_swiper_content}>
                                <Swiper
                                    spaceBetween={30}
                                    direction='vertical'
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    autoplay={{ delay: 4000 }}
                                    className={styles.mySwiper}
                                >
                                    <SwiperSlide className='swiper_slide'>
                                        <Image src={about} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper_slide'>
                                        <Image src={about} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper_slide'>
                                        <Image src={about} alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    Bigtitle === ''
                    ?
                    <div className={styles.about__card__head__boxes}>
                    <div className={styles.box}>
                        <div className={styles.box__h1}>
                            1500+
                        </div>
                        <div className={styles.box__describe}>
                            оказанных технических консультаций
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.box__h1}>
                            1000+
                        </div>
                        <div className={styles.box__describe}>
                            довольных клиентов
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.box__h1}>
                            500+
                        </div>
                        <div className={styles.box__describe}>
                            успешно выполненных заказов
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.box__h1}>
                            13 лет
                        </div>
                        <div className={styles.box__describe}>
                         опыта работы в сфере судостроения
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box__h1}>
                            100+
                        </div>
                        <div className={styles.box__describe}>
                            оборудованных катеров
                        </div>
                    </div>
                </div>

                :
                null
                }
            </div>
        </div>
    )
}

export default Aboutus
