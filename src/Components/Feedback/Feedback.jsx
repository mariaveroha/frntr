import React, { useState } from "react";
import s from './Feedback.module.css'
import men from '../../Images/men.jpg'
import Review from "./Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
const Feedback = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'ddFeedback'
    };
    const [review, setReview] = useState([
        { id: 1, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 2, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 3, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 4, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 5, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 6, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 7, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 8, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 9, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 10, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 11, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
        { id: 12, title: 'Best planning service', text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.', photo: men, name: 'John doe', desc: 'Architect in agung podomoro land' },
    ])

    const isSmallScreen = useMediaQuery({ query: '(max-width: 611px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 612px)' })
    return (
        <div className={s.feedback}>
            <p className={s.title}>what they say about our services</p>
            {
                isBigScreen && <Slider {...settings}>
                    <div className={s.first}>
                        <div className={s.list}>
                            {review.slice(0, 3).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(3, 6).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(6, 9).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(9, 12).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                </Slider>
            }
            {
                isSmallScreen &&
                <Slider {...settings}>
                    <div className={s.first}>
                        <div className={s.list}>
                            {review.slice(0, 1).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(1, 2).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(2, 3).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(3, 4).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.first}>
                        <div className={s.list}>
                            {review.slice(4, 5).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(5, 6).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(6, 7).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(7, 8).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.first}>
                        <div className={s.list}>
                            {review.slice(8, 9).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(9, 10).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(10, 11).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.list}>
                            {review.slice(11, 12).map((review, key) =>
                                <Review review={review} key={review.id} />)}
                        </div>
                    </div>
                </Slider>

            }

        </div>
    )
}

export default Feedback