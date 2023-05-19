import React from "react";
import s from './Ideas.module.css'
import idea from '../../Images/idea.svg'
const Ideas = () => {
    return (
        <div className={s.ideas}>
            <div className={s.block}>
                <div className={s.text}>
                    <p className={s.title}>Visualize your ideas with us</p>
                    <p className={s.subtitle}>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us</p>
                    <div>
                        <div className={s.accordion}>
                            <section>
                                <input type="checkbox" className={s.accordion__checkbox} id="accordion-heading-1" />
                                <label className={s.accordion__heading} htmlFor="accordion-heading-1">Modern</label>
                                <div className={s.accordion__content}>
                                    <p>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>

                                </div>
                            </section>

                            <section>
                                <input type="checkbox" className={s.accordion__checkbox} id="accordion-heading-2" />
                                <label className={s.accordion__heading} htmlFor="accordion-heading-2">Contemporary</label>
                                <div className={s.accordion__content}>
                                    <p>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>
                                </div>
                            </section>

                            <section>
                                <input type="checkbox" className={s.accordion__checkbox} id="accordion-heading-3" />
                                <label className={s.accordion__heading} htmlFor="accordion-heading-3">Minimalis</label>
                                <div className={s.accordion__content}>
                                    <p>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>
                                </div>
                            </section>
                            <section>
                                <input type="checkbox" className={s.accordion__checkbox} id="accordion-heading-4" />
                                <label className={s.accordion__heading} htmlFor="accordion-heading-4">Industrial</label>
                                <div className={s.accordion__content}>
                                    <p>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>
                                </div>
                            </section>

                            <section>
                                <input type="checkbox" className={s.accordion__checkbox} id="accordion-heading-5" />
                                <label className={s.accordion__heading} htmlFor="accordion-heading-5">See more catagory</label>
                                <div className={s.accordion__content}>
                                    <p>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={idea} className={s.img} />
                </div>
            </div>

        </div>
    )
}

export default Ideas