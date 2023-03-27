import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Pagination, Autoplay} from "swiper";
import Image from 'next/image';


import gradient from '../CanIHelp/assets/svg/home_bg.svg'
import letter from '../../assets/img/letter.svg'
import { Facebook, Instagramm, Telegramm, Wc } from '../../assets/svg/svg'
import about from '../../assets/img/aboutimg.png'
import styles from '../AboutUs/aboutus.module.scss'


const Aboutus = ({ Bigtitle }) => {


    return (
        <div className={styles.Aboutus}>
            <div className={styles.about__inner}>
                {Bigtitle === '' ?
                    <div className={styles.about__card__head}>
                        <div className={styles.about__card__head__title}>
                            Про нас
                        </div>
                        <div className={styles.about__card__head__description}>
                            Миссия компании: стать надёжным другом и поставщиком владельцу судна!
                            мы поможем вам проконсультироваться и помочь в подборе судна и деталей
                        </div>
                        <div className={styles.about__card__head__bg}>
                            <Image src={gradient} alt="" />
                        </div>

                        <div className={styles.about__card__head__boxes}>
                            <div className={styles.box}>
                                <div className={styles.box__h1}>
                                    200+
                                </div>
                                <div className={styles.box__describe}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.box__h1}>
                                    86+
                                </div>
                                <div className={styles.box__describe}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.box__h1}>
                                    12+
                                </div>
                                <div className={styles.box__describe}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.box__h1}>
                                    5+
                                </div>
                                <div className={styles.box__describe}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                </div>
                            </div>
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
                                О компании: Компания Mangoose-marine предлагает полный спектр услуг в области подбора и продажи судового и навигационного оборудования. Мы стараемся работать напрямую с производителями. Всегда слышим наших Клиентов, готовы проконсультировать и подобрать соответствующее оборудование под самые сложные проекты и индивидуальные потребности.
                                В компании работают специалисты с многолетним стажем работы, которые регулярно повышают свою квалификацию.
                            </div>

                            <div className={styles.about__card__sites}>
                                <Wc />
                                <Instagramm />
                                <Facebook />
                                <Telegramm />
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
                                    autoplay={{delay:4000}}
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
            </div>
        </div>
    )
}

export default Aboutus
