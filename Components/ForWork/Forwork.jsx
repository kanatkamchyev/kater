import React, { useState } from 'react'
import * as react from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'


import styles from '../ForWork/forwork.module.scss'
import more from '../../assets/img/seemore.svg'
import SwiperButtons from './SwiperButtons'
import ProjectBox from '../Projects/ProjectBox'
import Link from 'next/link'
import { More } from '../../assets/svg/svg'



const Brands = [
  {
    id: 1,
    name: "SIMRAD",
    image: '/imgs/project.png',
    description: 'Поставка навигационного оборудования 2 комплекта на 2 катера. г.Москва',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },

  {
    id: 2,
    name: "YAMAHA",
    image: '/imgs/yaahh.png',
    description: 'Поставка лодочного мотора YAMAHA CETL 60 г. Уфа',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },

  {
    id: 3,
    name: "RAYMARINE",
    image: '/imgs/marr.png',
    description: 'Поставка картплоттера AXIOM 9+ г. Ярославль',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },

  {
    id: 4,
    name: "RAYMARINE",
    image: '/imgs/marinab.png',
    description: 'Поставка картплоттера AXIOM 9+ г. Ярославль',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },

  {
    id: 5,
    name: "LOWRANCE",
    image: '/imgs/loveuprance.png',
    description: 'Поставка картплоттера FS -9 Activ -imaging3–1 гг. Нижний Новгород',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },

  {
    id: 6,
    name: "SIMRAD",
    image: '/imgs/project.png',
    description: 'Поставка навигационого оборудования на яхту г. Ростов- на Дону',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },

]


const Forwork = () => {
  const [seeMore, setSeeMore] = useState(false)



  return (
    <div className={styles.Forwork}>
      <div className={styles.work__inner}>
        <div className={styles.work__head}>
          <div className={styles.work__head__left}>
            <p>От слов к делу,</p>
            <p>выполненные проекты</p>
          </div>
          <div className={styles.work__head__right}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus ratione in enim illum nam adipisci fugit ad praesentium error maxime </p>
                <Link href="/OurProjects">
                <p className={styles.work__seemore}>увидеть больше <More/></p>
                </Link>

          </div>
        </div>

        <div className={styles.work__bottom}>
          <react.Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4000 }}
            spaceBetween={60}
            slidesPerView="auto"
          >

            <div className={styles.projects__box}>
              {
                Brands.map((project) =>
                  <react.SwiperSlide className={styles.res_slide}>
                    <ProjectBox project={project} key={project.id} />
                  </react.SwiperSlide>
                )
              }
            </div>
            <SwiperButtons />
          </react.Swiper>
        </div>
      </div>
    </div>
  )
}

export default Forwork
