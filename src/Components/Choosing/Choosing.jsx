import React, { useState } from "react";
import s from './Choosing.module.css'
import Card from './Card'
const Choosing = () => {
    const [card, setCard] = useState([
        {id: 1, title: 'Professionalism',  text: 'We deliver the final work with great professional way.'},
        {id: 1, title: 'Smooth workflow',  text: 'We provide the most easy smoth workflow of interior design.'},
        {id: 1, title: 'Trusted Platform',  text: 'People trust us since we openend the company'},
        {id: 1, title: 'Qualified employee',  text: 'Our employees are the best of the field from the city'}
    ])
    return (
        <div className={s.choose}>
            <p className={s.title}>Why Choosing Us</p>
            <div className={s.cards}>
                {card.map((card, key)=> 
                <Card card = {card}/>
                )}
            </div>
        </div>
    )
}

export default Choosing