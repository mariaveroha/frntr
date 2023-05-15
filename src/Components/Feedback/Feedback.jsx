import React, { useState } from "react";
import s from './Feedback.module.css'
import men from '../../Images/men.jpg'
import Review from "./Review";
const Feedback = () => {
    const [review, setReview] = useState([
        { id: 1, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 2, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 3, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
    ])
    return (
        <div className={s.feedback}>
            <p className={s.title}>what they say about our services</p>
            <div className={s.list}>
                {review.map((review, key) =>
                    <Review review={review} key={review.id} />)}
            </div>
        </div>
    )
}

export default Feedback