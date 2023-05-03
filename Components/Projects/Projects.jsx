import React from 'react'
import ProjectBox from './ProjectBox'

import styles from './Projects.module.scss'


const Projects = [
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
    image: '/imgs/yamaha.png',
    description: 'Поставка лодочного мотора YAMAHA CETL 60 г. Уфа',
    company: 'Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%. Поставляет подвесные бензиновые двигатели в полной комплектации от официального',
    date: '11.05.2022'
  },
]

const Prolects = () => {
  return (
    <div className={styles.Projects}>
      <div className="Our__projects">
        <div className={styles.project__title}>
          Наши <b>проекты</b>
        </div>
        <div className={styles.project__describe}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit animi, laboriosam, vitae quis, maiores neque quas placeat eveniet fuga provident! Blanditiis quaerat architecto voluptates officiis laudantium molestiae reprehenderit culpa!
        </div>
         <div className={styles.projects__box}>
          {
            Projects.map((project) => 
              <ProjectBox project={project} key={project.id} />
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Prolects
