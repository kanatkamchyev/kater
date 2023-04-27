import Link from 'next/link'
import React, { useState } from 'react'


import SideBar from './SideBar'
import HeaderLogo, { CloseBurg, MenuBurg } from '../../assets/svg/svg'

const Header = () => {

    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <div className='Header'>
            <header className='header'>
                <div className='container'>
                    <div className={activeMenu ? 'header__inner active' : 'header__inner'}>
                        <div className='header__logos'>
                            <div className='header_logo'>
                                <HeaderLogo />
                            </div>
                            <div className={activeMenu ? 'header__burger__menu active' : 'header__burger__menu'} onClick={() => setActiveMenu(!activeMenu)}>
                                {
                                    activeMenu ?
                                        <CloseBurg /> :
                                        <MenuBurg />
                                }
                            </div>
                        </div>
                        <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                        <div className={activeMenu ? 'header_btn active' : 'header_btn'}>
                            <Link href='https://t.me/zakazmangoosemarine'>
                                <button onClick={() => setActiveMenu(false)}>Консультация</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
