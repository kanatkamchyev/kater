import React, { useEffect, useState } from 'react'
import { SortArrow } from '../../assets/svg/svg'


import Bestler from './Bestler'
import styles from '../Bestlers/braslets.module.scss'
import Pagination from './Pagination'


const Details = [
  {
    id: 1,
    img: '/imgs/motor.png',
    title: 'Подвесные бензиновые моторы',
  },

  {
    id: 2,
    img: '/imgs/gps.png',
    title: 'Тролинговые GPS моторы',

  },

  {
    id: 3,
    img: '/imgs/dizel.png',
    title: ' Морские Дизель генераторы с водяным охлаждением',

  },

  {
    id: 4,
    img: '/imgs/exolot.png',
    title: 'Эхолоты/ Картплоттеры /Многофункциональные дисплеи',

  },

  {
    id: 5,
    img: '/imgs/radar.png',
    title: 'Радиолокационные станции/радары/РЛС',
  },

  {
    id: 6,
    img: '/imgs/pilot.png',
    title: 'Автопилоты гидравлические / тросовые/румпельные ',
  },

  {
    id: 7,
    img: '/imgs/kompas.png',
    title: 'Внешние электронные GPS антенны/компасы',
  },

  {
    id: 8,
    img: '/imgs/station.png',
    title: 'Морские/речные Радиостанции/АИС класса B ',
  },


  {
    id: 9,
    img: '/imgs/target.png',
    title: 'Системы PANOPTIX/ACTIVE TARGET, 3D, Сонары- вклеиваемые, транцевые, врезные в корпус, сетевые NMEA 2000',
  },


  {
    id: 10,
    img: '/imgs/display.png',
    title: 'Индикаторные дисплеи',
  },

  {
    id: 11,
    img: '/imgs/nmea.png',
    title: 'Сетевые решения NMEA 2000/ETHERNET',
  },

  {
    id: 12,
    img: '/imgs/plita.png',
    title: 'Интерцепторы/ транцевые плиты',
  },

  {
    id: 13,
    img: '/imgs/system.png',
    title: ' Морские Системы кондиционирования',
  },

  {
    id: 14,
    img: '/imgs/kachka.png',
    title: 'Гироскопические стабилизаторы качки',
  },

  {
    id: 15,
    img: '/imgs/kachka.png',
    title: 'Телескопические кран-балки /платформы/ трапы,',
  },

  {
    id: 16,
    img: '/imgs/kachka.png',
    title: 'Судовые люки и двери',
  },
]




const Brestlers = () => {


  //Pagination
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cartPerPage,] = useState(8)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      setData(Details)
      setLoading(false)
    }
    getData()
  }, [])


  const lastCartIndex = currentPage * cartPerPage
  const firstCartIndex = lastCartIndex - cartPerPage
  const currentCart = data.slice(firstCartIndex, lastCartIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)



  return (
    <div className={styles.Brestlers}>
      <div className={styles.brestler__head}>
        <div className={styles.brestler__title}>
          Бестселлеры
        </div>
      </div>

      <div className={styles.brestler__inner}>
        <Bestler cart={currentCart} loading={loading} />
        <Pagination cartPerPage={cartPerPage} paginate={paginate} totalCarts={data.length} />
      </div>

    </div>
  )
}

export default Brestlers 
