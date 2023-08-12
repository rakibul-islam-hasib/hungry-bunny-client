import React, { useEffect } from 'react';
import './css/Stack.css'
import { animate } from '../../../utils/stackAnimate';
const Stacks = () => {



    useEffect(() => {
        return () => animate();
    }, []);



    const cardData = [
        {
            title: "Card One",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imageSrc: "assets/img/img-1.jpg",
            theme: "default",
            color: "bg-blue-400",
        },
        {
            title: "Card Two",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imageSrc: "assets/img/img-2.jpg",
            theme: "default",
            color: "bg-blue-600",
        },
        {
            title: "Card Three",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imageSrc: "assets/img/img-3.jpg",
            theme: "default",
            color: "bg-red-400",
        },
        {
            title: "Card Four",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imageSrc: "assets/img/img-3.jpg",
            theme: "default",
            color: "bg-blue-700",
        },
    ];
    return (
        <div className="container stack mx-auto w-[70%] mb-4">
            <ul className="stack-cards mb-3 js-stack-cards">
                {
                    cardData.map((card, index) => {
                        return (
                            <li data-theme={card.theme} className={`stack-cards__item ${card.color} rounded-2xl shadow-md  h-[30px] js-stack-cards__item`} key={index}>
                                <div className="grid grid-cols-2">
                                    <div className=" flex h-full items-center height-100%">
                                        <div className="">
                                            <h2>{card.title}</h2>
                                            <p className="display@xs">{card.description}</p>
                                            <p><a href="#0" className="btn btn--accent">Read more</a></p>
                                        </div>
                                    </div>

                                    <div className="col-6 height-100%">
                                        {/* <img className="block width-100% height-100% object-cover" src={card.imageSrc} alt="Image description" /> */}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

                <li className={`stack-cards__item bg-blue-200 rounded-2xl shadow-md  h-[30px] js-stack-cards__item`}>
                    <div className="grid grid-cols-2">
                        <div className=" flex h-full items-center height-100%">
                            <div className="">
                                <h2>Hi this is card 1</h2>
                                <p className="display@xs"></p>
                                <p><a href="#0" className="btn btn--accent">Read more</a></p>
                            </div>
                        </div>

                        <div className="col-6 height-100%">
                            
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Stacks;