import React from 'react'
import styles from '../Bestlers/braslets.module.scss'



const Pagination = ({ cartPerPage, totalCarts, paginate }) => {


    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCarts / cartPerPage); i++) {
        pageNumbers.push(i)
    }



    return (
        <div className={styles.paginationCustom}>
            <div className={styles.paginate__side}>

                {
                    pageNumbers.map((num) => {
                        return (
                            <div className={styles.page__num} onClick={() => paginate(num)}>
                                <a href="#" className={paginate ? styles.page__link : styles.page__link}>{num}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pagination
