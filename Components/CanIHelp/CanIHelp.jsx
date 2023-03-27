import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Autoplay} from "swiper";
import Image from "next/image";


import boat from "./assets/svg/boat_icon.svg";
import kater from '../../assets/img/parih.png'
import home_bg from "./assets/svg/home_bg.svg";
import styles from '../CanIHelp/help.module.scss'

export const CanIHelp = () => {

  return (
    <div className={styles.home}>
      <div className={styles.home__inner}>
        <div className={styles.home__inside}>
          <div className={styles.home_bg}>
            <Image src={home_bg} alt="" />
          </div>
          <div className={styles.home_left}>
            <div className={styles.home_title}><p>Чем я могу</p> <p>быть полезен </p> <p>вам?</p> </div>
          </div>
          <div className={styles.home_right}>
            <div className={styles.home_swiper}>
              <div className={styles.home__main__swipe}>
                <div className={styles.home_swiper_content}>
                  <Swiper
                    direction={"vertical"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{delay:4000}}
                    className={styles.mySwiper}
                  >
                    <SwiperSlide>
                      <div className={styles.home__swiper__img}>
                        <Image src={kater} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.home__swiper__img} >
                        <Image src={kater} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.home__swiper__img} >
                        <Image src={kater} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.home_catalog_class}>
                  <div className={styles.home_catalog}>
                    Каталог
                  </div>
                </div>
              </div>

              <div className={styles.home__swiper__btn}>
                <div className={styles.swiper__prev__btn}>

                </div>
                <div className={styles.swiper__circles}>
                  <div className={styles.swiper__manual}>

                  </div>

                </div>
                <div className={styles.swiper__next__btn}>

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.home_blocks}>
          <div className={styles.home_mini_block}>
            <div className={styles.home_mini_img}>
              <Image src={boat} alt="" />
            </div>
            <div className={styles.home_description}><p>Большой опыт в продаже и подбора</p> <p>деталей морских и речных судов</p>  </div>
          </div>
          <div className={styles.home_mini_block}>
            <div className={styles.home_mini_img}>
              <Image src={boat} alt="" />
            </div>
            <div className={styles.home_description}> <p>Понимание механизмов</p> <p>работы дилерской сети</p> </div>
          </div>
        </div>
      </div>
    </div>
  );
};
