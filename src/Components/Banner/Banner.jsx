import React from "react";
import s from './Banner.module.css'
import bag from '../../Images/bag.svg'
import vector from '../../Images/vector.png'
import { useMediaQuery } from "react-responsive";
const Banner = () => {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 713px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 714px)' })
    return (
        <div className={s.banner}>
            {
                isBigScreen &&
                <div className={s.nav}>
                    <a href="#" className={s.logo}>shady rhymes</a>
                    <div className={s.list} >
                        <div className={s.flex}>
                            <a className={s.item} href="#">Furniture </a>
                            <img src={vector} />
                        </div>
                        <a className={s.item} href="#">Shop</a>
                        <a className={s.item} href="#">About Us</a>
                        <a className={s.item} href="#">Contact</a>
                    </div>
                    <img src={bag} className={s.bag} />
                </div>
            }
            {
                isSmallScreen &&
                <div className={s.nav}>
                    <a href="#" className={s.logo}>shady rhymes</a>
                    <div className={s.list} >
                        <div className={s.flex}>
                            <a className={s.item} href="#">Furniture </a>
                            <img src={vector} />
                        </div>
                        <a className={s.item} href="#">Shop</a>
                        <a className={s.item} href="#">About Us</a>
                        <a className={s.item} href="#">Contact</a>
                        <img src={bag} className={s.bag} />
                    </div>
                </div>
            }

            <p className={s.title}>Make Your Interior More Minimaistic & Modern</p>
            <p className={s.subtitle}>Bringing interiors to life, understanding the person or people living in a home is far greater need in design.</p>
            <div className={s.blockI}>
                <input placeholder="Search Furniture" className={s.input}></input>
            </div>
        </div>
    )
}

export default Banner