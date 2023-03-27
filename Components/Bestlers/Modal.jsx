import React from 'react'
import Image from 'next/image'


import suzuki from '../../assets/img/suzuki.svg'
import yamaha from '../../assets/img/yamaha.svg'
import mercury from '../../assets/img/mercury.svg'
import { ClosePopUp } from '../../assets/svg/svg'
import styles from '../Bestlers/braslets.module.scss'
import Brands from './Brands'


const Modal = ({ active, setActive, item }) => {

    const { brands, title, description, delivery, } = item

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className={styles.right__modal__content}>
                    <div className={styles.flex__brand}>
                        <div className={styles.flexed__img}>
                            <Image src={item.img} width='200' height='300'/>
                        </div>
                        <div className={styles.moda__petrol__content}>
                            <div className={styles.modal__right__title}>
                                {title}
                            </div>
                            <div className={styles.modal__right__describe}>
                                {description}
                            </div>

                            <div className={styles.modal__right__describe}>
                                {delivery}
                            </div>
                        </div>

                    </div>


                    <div className={styles.modal__content__brands}>
                        <div className={styles.modal__right__title}>
                            Бренды
                        </div>

                        <div className={styles.modal__right__describe}>
                            Мы поставляем моторы из этих брендов
                        </div>
                        <div className={styles.modal__right__brandimg}>
                            {
                                brands && brands.map((brand) => <Brands brand={brand} key={brand.id} />)
                            }
                        </div>
                    </div>

                    <div className={styles.modal__content__motors}>
                        <div className={styles.modal__right__title}>
                            Моторы
                        </div>

                        <div className={styles.about__content__theirgun}>
                            <div className={styles.content__motor__power}>
                                Высокая мощность - 800 - 1200 сил
                            </div>
                            <div className={styles.content__motor__power}>
                                Средняя мощность - 450 - 800 сил
                            </div>
                            <div className={styles.content__motor__power}>
                                Низкая мощность -  до 450 сил
                            </div>
                        </div>
                        <div className={styles.content__modal__call}>
                            <button>Позвонить</button>
                        </div>
                    </div>

                </div>

                <div className={styles.modal__content__closes} onClick={() => setActive(false)}>
                    <ClosePopUp />
                </div>
            </div>
        </div>
    )
}

export default Modal
