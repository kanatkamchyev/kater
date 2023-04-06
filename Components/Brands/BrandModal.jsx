import React from 'react'


import styles from '../Brands/brands.module.scss'


const BrandModal = ({active, setActive, item}) => {

    console.log(item);
  return (
    <div className={active ? 'BrandModal active' : 'BrandModal'} onClick={() => setActive(false)}>
      <div className={active? 'BrandModal__con active': 'BrandModal__con'} onClick={(e) => e.stopPropagation()}>
      <div className="dalbaep" onClick={() => setActive(false)}>
        {item.title}
      </div>
      </div>
    </div>
  )
}

export default BrandModal
