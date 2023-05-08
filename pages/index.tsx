import Aboutus from '../Components/AboutUs/Aboutus'
import Brands from '../Components/Brands/Brands'
import { CanIHelp } from '../Components/CanIHelp/CanIHelp'
import Forwork from '../Components/ForWork/Forwork'
import  Kater  from '../Components/Kater/Kater'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <CanIHelp/>
    <Brands/>
    <Kater/>
    <Aboutus Bigtitle ='О компании'/>
    <Forwork/>
    </>
  )
}
