import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const NavBars = [
    {
        name: 'Главная',
        link: '/',
    },

    {
        name: 'Каталог',
        link: '/Catalog',
    },


    {
        name: ' Про нас',
        link: '/About',
    },

    {
        name: 'Проекты',
        link: '/OurProjects',
    },


    {
        name: 'Контaкты',
        link: '/Contacts',
    },

]


const SideBar = ({ activeMenu, setActiveMenu }) => {
    const router = useRouter()

    return (
        <div className={activeMenu ? 'header_nav active' : 'header_nav'}>
            {
                NavBars.map(({ name, link }) => (
                    <Link
                        key={name}
                        href={link}
                        className={router.pathname === link ? 'header_nav_bar active' : 'header_nav_bar'}
                        onClick={() => setActiveMenu(false)}
                    >
                        {name}
                    </Link>
                ))
            }
        </div>
    )
}

export default SideBar
