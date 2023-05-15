import React from "react";
import s from './Home.module.css'
import idea from '../../Images/idea.svg'
const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.block}>
                <img src={idea} className={s.img} />
                <div className={s.text}>
                    <p className={s.title}>Make room feel homey</p>
                    <p className={s.subtitle}>We help people not only to make the room at home better, but we help people to feel a more homey and comfortable room, you don’t have to worry about the result because of these interiors are made by people who are professionals in their dields with an elegant and lucuriois style and with premium quality materials

                        Contact us if you are interested in working with us</p>
                    <input placeholder="Insert your email address" className={s.input}></input>
                </div>
            </div>
        </div>
    )
}

export default Home