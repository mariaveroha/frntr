import React from "react";
import s from './Footer.module.css'
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.flex}>
                <div className={s.column}>
                    <a className={s.title}>Features</a>
                    <a className={s.item}>Our Features</a>
                    <a className={s.item}>Pricing</a>
                    <a className={s.item}>Affiliate Program</a>
                    <a className={s.item}>Press Kit</a>

                </div>
                <div className={s.column}>
                    <a className={s.title}>Support</a>
                    <a className={s.item}>Account</a>
                    <a className={s.item}>Help</a>
                    <a className={s.item}>Contact Us</a>

                </div>

                <div className={s.column}>
                    <a className={s.title}>Legal</a>
                    <a className={s.item}>Privacy Policy</a>
                    <a className={s.item}>Terms of  Use</a>
                    <a className={s.item}></a>
                </div>

                <div className={s.column}>
                    <a className={s.title}>Social Media</a>
                    <a className={s.item}>Twitter</a>
                    <a className={s.item}>Product Hunt</a>
                    <a className={s.item}>Instagram</a>
                    <a className={s.item}>Github</a>
                </div>
            </div>

            <p className={s.copyright}>Copyright 2021 @shady rhymes</p>

        </div>
    )
}

export default Footer