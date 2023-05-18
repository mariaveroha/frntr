import React, { useState } from "react";
import s from './Banner.module.css'
import bag from '../../Images/bag.svg'
import vector from '../../Images/vector.png'
import { useMediaQuery } from "react-responsive";
import main from '../../Images/main.jpg'
import slider1 from '../../Images/1.jpg'
import slider2 from '../../Images/2.jpg'
import slider3 from '../../Images/3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 713px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 714px)' })


    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'dd'
    };
    return (
        <div className={s.banner}>
            <div className={s.header}>
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

            <Slider {...settings}>
                <div className={s.first}>
                    <img className={s.pic} src={main} />
                </div>
                <div className={s.slide}>
                    <img className={s.pic} src={slider1} />
                </div>
                <div className={s.slide}>
                    <img className={s.pic} src={slider2} />
                </div>
                <div className={s.slide}>
                    <img className={s.pic} src={slider3} />
                </div>
            </Slider>

        </div >
    )
}

export default Banner