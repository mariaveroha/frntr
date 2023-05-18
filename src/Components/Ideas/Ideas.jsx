import React, { useState } from "react";
import s from './Ideas.module.css'
import idea from '../../Images/idea.svg'
const Ideas = () => {

    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const [isShown3, setIsShown3] = useState(false)
    const [isShown4, setIsShown4] = useState(false)
    const [isShown5, setIsShown5] = useState(false)
    const toggleFIeldset1 = () => setIsShown1(!isShown1);
    const toggleFIeldset2 = () => setIsShown2(!isShown2);
    const toggleFIeldset3 = () => setIsShown3(!isShown3);
    const toggleFIeldset4 = () => setIsShown4(!isShown4);
    const toggleFIeldset5 = () => setIsShown5(!isShown5);

    return (
        <div className={s.ideas}>
            <div className={s.block}>
                <div className={s.text}>
                    <p className={s.title}>Visualize your ideas with us</p>
                    <p className={s.subtitle}>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us</p>
                    <div>
                        <div>
                            <div onClick={toggleFIeldset1} className={s.flex}>
                                <span >Modern</span>
                                {isShown1 && <span>-</span>}
                                {!isShown1 && <span>+</span>}
                            </div>
                                <p className={isShown1 ? s.descActive + s.desc : s.desc}>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p> 
                            <div onClick={toggleFIeldset2} className={s.flex}>
                                <span className={s.item}>Contemporary</span>
                                {isShown2 && <span>-</span>}
                                {!isShown2 && <span>+</span>}
                            </div>
                            <p className={isShown2 ? s.descActive + s.desc : s.desc}>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>

                            <div onClick={toggleFIeldset3} className={s.flex}>
                                <span className={s.item}>Minimalis</span>
                                {isShown3 && <span>-</span>}
                                {!isShown3 && <span>+</span>}
                            </div>
                            <p className={isShown3 ? s.descActive + s.desc : s.desc}>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>



                            <div onClick={toggleFIeldset4} className={s.flex}>
                                <span className={s.item}>Industrial</span>
                                {isShown4 && <span>-</span>}
                                {!isShown4 && <span>+</span>}
                            </div>
                            <p className={isShown4 ? s.descActive + s.desc : s.desc}>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>


                            <div onClick={toggleFIeldset5} className={s.flex}>
                                <span className={s.item}>See more catagory</span>
                                {isShown5 && <span>-</span>}
                                {!isShown5 && <span>+</span>}
                            </div>
                            <p className={isShown5 ? s.descActive + s.desc : s.desc}>Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.   </p>

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