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
    description:'Созданы для того, чтобы приносить людям  радость, комфорт и удовлетворение , когда они находятся на воде. Скорость  на воде за неё отвечает двигатель, который разгонит Ваш катер  до 80/100 км/ч. Скорость на воде ощущается совершенно по другому. Современные двигатели бывают 2-х тактные и 4-х тактные. 4-х тактные более экономичны и мощнее. Мощность двигателя у некоторых моделей может доходить до 450 л.с.',
    delivery:' У нас Вы сможете заказать лодочный мотор на ваш катер из представленного модельно ряда, мы также поможем Вам подобрать нужную модель под ваш катер. Срок поставки мотора составляет 20-25дней.',
    brands : [
      {
        id: 1,
        img:'/imgs/yamaha.svg',
        link: '/imgs/YAMAHA.pdf'
      },
      {
        id: 2,
        img:'/imgs/suzuki.svg',
        link: '/imgs/SUZUKI.pdf'

      }
    ],
    power : [ 'Минимальная мощность от 9.9л.с. до 60 л.с.', 'Средняя мощность от 90 л.с до 200 л.с', 'Максимальная мощность от 225 л.с. – до 450 л.с.'    ]
  },

  {
    id: 2,
    img: '/imgs/gps.png',
    title: 'Троллинговые электромоторы',
    description:'Созданы для того, чтобы приносить людям радость, комфорт и удовлетворение, когда они находятся на воде. Троллинговый мотор, применяется рыбаками на катерах для ловли методом троллинга, то есть на движущуюся приманку или наживку. Троллинговый мотор — это своего рода электронный якорь, который удержит катер на заданных координатах по GPS. Мотор избавит Вас от физического поднимания и отпускания якоря лебёдкой или вручную.',
    delivery: 'У нас Вы сможете заказать троллинговый мотор на ваш катер из представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель под ваш катер. Срок поставки электромотора составляет 20-25дней.',
    brands : [
      {
        id: 1,
        img:'/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'

      },
      {
        id: 2,
        img:'/imgs/suzuki.svg',
        link: '/imgs/SUZUKI.pdf'

      },

      {
        id: 3,
        img:'/imgs/yamaha.svg',
        link: '/imgs/YAMAHA.pdf'

      },

      {
        id: 4,
        img:'/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'

      }
    ],

    power: [' Тяговитая мощность электромотора от 9.9л.с. до 60 л.с.', 'Длинна вала электромотора- штанга от 120 см до 183 см', ' Электропитание электромотора от 24 вольт до 36 вольт. ']
  },

  {
    id: 3,
    img: '/imgs/dizel.png',
    title: ' Судовые дизель генераторы ',
    description:'Судовой дизель-генератор — это автономный источник переменного тока для организации основного, вспомогательного или аварийного питания энергосистемы речного или морского судна. Ключевое отличие такого генератора от стандартного индустриального - наличие дополнительного контура охлаждения забортной водой, в остальном по функционалу и характеристикам они схожи. С помощью дизель генератора Вы сможете на своём катере задействовать больше источников электропотребления (чайник, кондиционер, холодильник, плита и др.)',
    delivery: 'У нас Вы сможете заказать судовой дизель генератор на ваш катер из представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель под ваш катер. Срок поставки электромотора составляет 20-25дней.',
    brands:[
      {
        id: 1,
        img: '/imgs/paguro.png',
        link: '/imgs/'


      },

      {
        id: 2,
        img: '/imgs/fisherpanda.png',
        link: 'imgs/'


      },

      {
        id:3,
        img: '/imgs/westerbeke.png',
        link: 'imgs/'


      },

      {
        id: 4,
        img: '/imgs/whisper.png',
        link: '/imgs/'


      },
    ],

    power : [ 'Непрерывная Мощность генератора от 4 кВт. до 60 квт', ' Выходное напряжение - 230 В / 50 Гц', 'Рекомендованная батарея стартера 12 вольт до 36 вольт.'    ]

  },

  {
    id: 4,
    img: '/imgs/exolot.png',
    title: 'Эхолоты/ Картплоттеры /Многофункциональные дисплеи',
    description:'Картплоттер/МФД — это незаменимый друг на воде, с помощью встроенного эхолота он отображает глубину, помогает ориентироваться на воде с помощью встроенного GPS модуля. Современные картплоттеры имеют встроенные WIFI и Bluetooth модули. В картплоттеры можно загружать профессиональные   навигационные карты С- MAP, NAVIONICS, GARMIN, MaxSea, которые помогут ориентироваться на воде. К картплоттеру можно подключить РЛС (радиолокационную станцию, гидравлический, тросовый автопилот, троллинговый мотор, тепловизор, морскую радиостанцию, АИС, датчик скорости ветра, датчик скорости, Сонары с 3D отображением, в режиме реального времени, вперёд смотрящий датчик, вывести данные двигателя и др. оборудование. ',
    delivery: '',
    brands:[

      {
        id:1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'

      },

      {
        id:2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'

      },

      {
        id:3,
        img: '/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'

      },

      {
        id:4,
        img: '/imgs/humminbird.svg',
        link: '/imgs/HUMMINBIRD.pdf'

      },

      {
        id:5,
        img: '/imgs/furuno.png',
        link: '/imgs/FURUNO.pdf'

      },
    ],

    power : ['Диагональ экрана от 5 дюймов. до 24 дюймов', 'Поддержка преобразователей PANOPTIX, ACTIVE TARGET, 3D VISION,', 'ACTIV-IMAGING, Forward scan ', 'Врезные в панель или  установка на кронштейн ', 'Встроенный модуль WIFI/ GPS/ Bluetooth','Поддержка   протоколов сети NMEA 2000/ ETHERNET/ SEATOLK', 'Поддержка навигационных карт С – MAP,  NAVIONICS. ']
  },

  {
    id: 5,
    img: '/imgs/radar.png',
    title: 'Радиолокационные станции/радары/РЛС',
    description:' Радиолокационная станция помогает судоводителю ориентироваться на воде в тёмное время суток, когда видимость менее 1 км, когда туман или сильный дождь. РЛС отображает все объекты, которые находятся в зоне видимости РЛС на поверхности воды- например топляк, плавучее бревно, буй, торчащее из воды дерево и др. РЛС помогает определить кратчайшее расстояние до цели, а также помогает предотвратить столкновение с другими объектами путём их отслеживания до сближения по MARPA. Современные РЛС закрытого типа не используют магнетрон, следовательно у них очень низкое излучение, которое позволяет использовать РЛС на стоянках в маринах. ',
    delivery: 'У нас Вы сможете заказать РЛС на ваш катер и представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель по вашему запросу. Консультацию проводит ведущий эксперт по навигационному оборудованию. Срок поставки товара составляет 20-25дней.',
    brands:[
      {
        id: 1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'


      },

      {
        id: 2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'


      },

      {
        id:3,
        img: '/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'


      },

      {
        id: 4,
        img: '/imgs/humminbird.svg',
        link: '/imgs/HUMMINBIRD.pdf'


      },

      {
        id: 5,
        img: '/imgs/furuno.png',
        link: '/imgs/FURUNO.pdf'


      },
    ],
    
    power: ['Дальность видимости 24 -48 морских миль', '   Скорость вращения антенны 24 -60 оборотов', 'Отслеживание целей MARPA (от 10 до 20 целей)', ' ШИРИНА ЛУЧА: до 5,2° по горизонтали, до 25° по вертикали', ' Низкое излучение', 'Интеграция с картплоттером по WIFI']
  },

  {
    id: 6,
    img: '/imgs/pilot.png',
    title: 'Автопилоты гидравлические / тросовые/румпельные ',
    description:'Автопилот – предназначен для районов плавания, на акваториях, где нет поворотов и извилистых участков. Обычно автопилоты применяют на океанах, морях, больших озёрах, водохранилищах. Судоводитель задаёт курс автопилоту и судно идёт по заданному курсу. Судоводитель в это время может заниматься своими делами, не нужно держать штурвал руками. Автопилот, не сможет обойти препятствие если оно появится еа заданном курсе, поэтому судоводитель всегда должен это понимать не отходить на долго от штурвала. Автопилот удачное решение для комфортного пребывания на воде.',
    delivery: 'У нас Вы сможете заказать Автопилот на ваш катер и представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель по вашему запросу. Консультацию проводит ведущий эксперт по навигационному оборудованию. Срок поставки товара составляет 10-15дней',
    brands:[
      {
        id:1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'

      },

      {
        id:2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'

      },

      {
        id:3,
        img: '/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'

      },
    ],

    power : [' Создание маршрута «в одно касание»' , 'VRF (Virtual Rudder Feedback).', ' Насос от 0,8 л (49 куб. дюймов) / литра в минуту', 'Электронный компас ', 'Для катеров от 6 м до 30 метров', 'Независимый контроллер управления']
  },

  {
    id: 7,
    img: '/imgs/station.png',
    title: 'Электронная АнтеннаGPS /компаc ',
    description:'незаменимый помощник для Вас, если у Вашего катера алюминиевая рубка, сигнал GPS может затухать, внешняя антенна помогает усиливать сигнал, моментально ловит спутники, работает с GLONASS. Электронная антенна для определения положения и курса. Обеспечивает чрезвычайно точное и быстрое обновление данных о местоположении и скорости судна, точное определение направления судна на любой скорости и наложение радара на навигационную карту. Данные о курсе, скорости поворота, тангаже и крене через NMEA 2000®.',
    delivery: 'У нас Вы сможете заказать электронную антеннуGPS / компас  на ваш катер и представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель по вашему запросу. Консультацию проводит ведущий эксперт по навигационному оборудованию. Срок поставки товара составляет 10-15дней.',
    brands:[
      {
        id: 1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'


      },

      {
        id: 2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'


      },

      {
        id:3,
        img: '/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'


      },

      {
        id: 4,
        img: '/imgs/furuno.png',
        link: '/imgs/FURUNO.pdf'


      },
    ],
     
    power : ['Поддерживает GPS и ГЛОНАСС', 'Обновления с частотой 10 Гц', ' Водонепроницаемая', ' Датчик положения и направления NMEA 2000®', 'Компактная, надежная конструкция ', 'Встроенный электронный компас', ' Точность курса ±2° после калибровки']
  },

  {
    id: 8,
    img: '/imgs/hide.jpg',
    title: 'Морские/речные Радиостанции/АИС класса B ',
    description:'Радиостанция незаменимый помощник на борту любого судоводителя. С помощью радиостанции осуществляется общение с диспетчерами и другими судами на акватории, в которой Вы находитесь. По радиостанции Вы можете вызвать встречное или проходящее судно, запросить помощь. Если Вы пересекаете водные гарницы, Вам нужен АИС класса B – который инденфицирует Ваше судно по коду MMSI. Береговые охранные службы будут Вас видеть на свих радарах. Радиостанции могут быть уже со встроенным АИС класса B. ',
    delivery: 'У нас Вы сможете заказать  морскую или речную радиостанцию на ваш катер и представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель по вашему запросу. Консультацию проводит ведущий эксперт по навигационному оборудованию. Срок поставки товара составляет 10-15дней.',
    brands:[
      {
        id: 1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'

      },

      {
        id: 2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'


      },

      {
        id:3,
        img: '/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'


      },

      {
        id: 4,
        img: '/imgs/simrad.png',
        link: '/imgs/SIMRAD.pdf'


      },

      {
        id: 5,
        img: '/imgs/furuno.png',
        link: '/imgs/FURUNO.pdf'


      },
    ],
    
    power : ['  Внутренний GPS', 'ЖК-дисплей высокой четкости ', 'Одобрено DSC класса D', 'Клавиши выделенного канала 16', 'Несколько режимов сканирования', ' Простая установка на кронштейн или врезка ']
  },


  {
    id: 9,
    img: '/imgs/target.png',
    title: 'Системы PANOPTIX/ACTIVE TARGET, 3D, Сонары- вклеиваемые, транцевые, врезные в корпус, сетевые NMEA 2000',
    description:'Преобразователи, трандьюсеры это незаменимый помощник любому судоводителю, датчики отображают глубину, температуру, скорость относительно воды, рельеф и структуру дна в проекциях 2D и 3D, а также сетевые преобразователи, которые работают по сети NMEA 2000. Технологии развиваются и сейчас появились трандьюсеры в режиме реального времени, Вы можете видеть, что происходит под водой с помощью систем Live Scope™, PANOTIX, ACTIV TARGET.  Для безопасного подхода к незнакомым участкам во избежание попадания судна на мель применяют вперёдсмотрящие датчики FORWARD SCAN.  Датчики –делятся на категории: врезные в корпус, вклеиваемые, транцевые устанавливаются на транец судна.  По материалу преобразователи бывают пластиковые, бронзовые, нержавеющая сталь. ',
    delivery: 'У нас Вы сможете заказать  датчик , трандьюсер   на ваш катер и представленного ниже модельно ряда, мы также поможем Вам подобрать нужную модель по вашему запросу. Консультацию проводит ведущий эксперт по навигационному оборудованию. Срок поставки товара составляет 10-15дней.',
    brands:[
      {
        id: 1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'

      },

      {
        id: 2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'

      },

      {
        id:3,
        img: '/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'


      },

      {
        id: 4,
        img: '/imgs/simrad.png',
        link: '/imgs/SIMRAD.pdf'


      },
    ],
     
    power: [' Четкое изображение рыбы и структуры ', 'Высокое разрешение (до 1,2 МГц) SideScan и DownScan', 'Изображение рельефа дна в проекции 2D', 'Live Scope™, PANOTIX, ACTIV TARGET', 'Forward scan', 'REAL VISION 3D']
  },


  {
    id: 10,
    img: '/imgs/display.png',
    title: 'Индикаторный цифровой дисплей ',
    description:'с помощью мультисенсорного дисплея, вы можете выбирать наиболее важную информацию о судне с любого устройства на борту, подключенного к NMEA 2000®. К ним относятся число оборотов в минуту, скорость относительно земли, скорость ветра, скорость относительно воды, уровень топлива, триммер, давление масла, количество моточасов, расход топлива, экономия топлива и температура.  Может работать, как автономный приборный дисплей и контроллер автопилота на борту небольших судов.',
    delivery: '',
    brands:[
      {
        id: 1,
        img: '/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'


      },

      {
        id: 2,
        img: '/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'


      },

      {
        id:3,
        img: '/imgs/raymaine.svg',
        link: '/imgs/RAYMARINE.pdf'

      },

      {
        id: 4,
        img: '/imgs/simrad.png',
        link: '/imgs/SIMRAD.pdf'

      },
    ],

    power: [' Отображение данных по сети NMEA 2000', 'Мультисенсорный цифровой дисплей', ' Независимый контролер управления']
  },

  {
    id: 11,
    img: '/imgs/nmea.png',
    title: 'Сетевые решения NMEA 2000/ETHERNET',
    description:'Объединить оборудование в одну навигационную систему помогают сетевые кабеля, переходники, удлинители, разветвители, хабы, тройники, терминаторы.',
    delivery: 'У каждого производителя сетевые кабели соответствуют мировым стандартам. Цифровые данные от оборудования, подключаемого в единую сеть, передаются по CAN шине по сетевому протоколу NMEA 0183, NMEA 2000. Оборудование, подключённое в единую сеть в, которое передаёт данные не просто цифровые, а с картинкой в видео потоке передаётся по мировому стандарту протоколу ETHERNET. Важно, правильно создать единую сеть на катере и подключить всё оборудование. Без кабелей, переходников, удлинителей это сделать невозможно. Особенно если на катере два поста управления',
    brands:[
      {
        id:1 ,  
        img:'/imgs/lowrance.svg',
        link: '/imgs/LOWRANCE.pdf'

      },

      {
        id:2 ,
        img:'/imgs/garmin.svg',
        link: '/imgs/GARMIN.pdf'

      },

      {
        id:3 ,
        img:'/imgs/raymarine.svg',
        link: '/imgs/RAYMARINE.pdf'

      },

      {
        id:4 ,
        img:'/imgs/humminbird.svg',
        link: '/imgs/HUMMINBIRD.pdf'

      },

      {
        id:5 ,
        img:'/imgs/furuno.png',
        link: '/imgs/FURUNO.pdf'

      }
    ],

    power : ['']
  },

  {
    id: 12,
    img: '/imgs/plita.png',
    title: 'Интерцепторы/ транцевые плиты',
    description:'',
    delivery:'',

  },

  {
    id: 13,
    img: '/imgs/system.png',
    title: ' Морские Системы кондиционирования',
    description:'',
    delivery: '',
    brands:[
      
    ]
  },

  {
    id: 14,
    img: '/imgs/kachka.png',
    title: 'Гироскопические стабилизаторы качки',
    description:'',
    delivery: '',

  },

  {
    id: 15,
    img: '/imgs/kachka.png',
    title: 'Телескопические кран-балки /платформы/ трапы,',
    description:'',
    delivery: '',
    brands:[
      
    ]
  },

  {
    id: 16,
    img: '/imgs/kachka.png',
    title: 'Судовые люки и двери',
    description:'',
    delivery: '',
    brands:[
      
    ]
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
