import React from "react";
import s from './Card.module.css'
const Card = (props) => {
    return (
        <div className={s.card}>
            <p className={s.title}>{props.card.title}</p>
            <p className={s.text}>{props.card.text}</p>
      <div className={s.block}> <a href="#" className={s.info}>more info</a></div>      
        </div>
    )
}

export default Card