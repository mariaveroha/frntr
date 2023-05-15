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
                        <div>
                            <a href="#"  className={s.flex}>
                                <span >Modern</span>
                                <span>-</span>
                            </a>
                            <p className={s.desc}>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.
                            </p>
                            <a href="#"  className={s.flex}>
                                <span className={s.item}>Contemporary</span>
                                <span>+</span>
                            </a>
                            <a href="#"  className={s.flex}>
                                <span className={s.item}>Minimalis</span>
                                <span>+</span>
                            </a>
                            <a href="#"  className={s.flex}>
                                <span className={s.item}>Industrial</span>
                                <span>+</span>
                            </a>
                            <a href="#" className={s.flex}>
                                <span className={s.item}>See more catagory</span>
                                <span>+</span>
                            </a>

                        </div>

                    </div>


                </div>
                <img src={idea} className={s.img} />
            </div>
        </div>
    )
}

export default Ideas