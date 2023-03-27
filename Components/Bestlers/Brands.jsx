import styles from '../Bestlers/braslets.module.scss'
import Image from 'next/image'


const Brands = ({brand}) => {

    return(
        <div className={styles.modal__brand__imgages} key={brand.id}>
        <div className={styles.inside__urna}>
            <div className={styles.image__xz}>
            <Image src={brand.img} alt="" width='190' height='100' />
            </div>
            <div className={styles.download}>
                <button><a href={brand.link} download>Скачать ассортимент</a> </button>
            </div>
        </div>
    </div>
    )
}

export default Brands