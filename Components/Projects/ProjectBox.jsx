import React from 'react'
import { useState } from 'react'

import { Avito, ClosePopUp, More, Telegramm } from '../../assets/svg/svg'
import styles from './Projects.module.scss'


const ProjectBox = ({ project }) => {

    const [activeBox, setActiveBox] = useState(false)

    return (
        <div className={styles.project__box}>
            <div className={styles.project__box__inside}>
                {
                    activeBox ?
                        <div className={styles.project__hide_active}>
                            <div className={styles.close__project} onClick={() => setActiveBox(false)}>
                                <ClosePopUp/>
                            </div>
                            <div className={styles.project__name}>
                                {project.name}
                            </div>

                            <div className={styles.project__describe}>
                                {project.description}
                            </div>

                            <div className={styles.project__describe}>
                                {project.company}
                            </div>

                            <div className={styles.otzyv__avito}>
                                <div className={styles.otzyv__title}>
                                    Отзывы:
                                </div>
                                <div className={styles.otzyv__imgs}>
                                    <a href="https://www.avito.ru/user/81511eb6d229b1e175bc8934f1432565/profile?src=sharing"><Avito/></a>
                                    <a href="https://t.me/zakazmangoosemarine"><Telegramm/></a>
                                </div>
                            </div>

                            <div className={styles.project__data}>
                                {
                                    project.date
                                }
                            </div>

                        </div>
                        :
                        <>
                            <div className={styles.project__image}>
                                <div className={styles.img}>
                                    <img src={project.image} alt="" />
                                </div>
                                <div className={styles.otzyv} onClick={() => setActiveBox(true)}>
                                Отзыв <More/>
                                </div>
                            </div>

                            <div className={styles.project__name}>
                                {project.name}
                            </div>

                            <div className={styles.project__describe}>
                                {project.description}
                            </div>
                        </>

                }



            </div>
        </div>
    )
}

export default ProjectBox
