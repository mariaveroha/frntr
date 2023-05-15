import React from "react";
import s from './Review.module.css'
const Review = (props) => {
    return (
        <div className={s.review}>
            <p className={s.title}>{props.review.title}</p>
            <p className={s.text}>{props.review.text}</p>
            <div className={s.block}>
                <img className={s.photo} src={props.review.photo} />
                <div>
                    <p className={s.name}>{props.review.name}</p>
                    <p className={s.desc}>{props.review.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Review