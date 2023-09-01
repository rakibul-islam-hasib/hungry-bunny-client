import React, { useEffect, useState } from 'react';
// import './css/Stack.css'
import { animate } from '../../../utils/stackAnimate';
import deliveryMen from '../../../assets/img/delivery.jpg';
import { useInView } from 'react-intersection-observer';
import freshFood from '../../../assets/img/food.jpg';
import freshFood1 from '../../../assets/img/food-1.jpg';

const Stacks = () => {

    useEffect(() => {
        return () => animate();
    }, []);
    const { ref, inView } = useInView({
        triggerOnce: false, // Only trigger once when the component comes into view
    });

    // useEffect(() => {
    //     if (inView) {
    //         document.body.style.backgroundColor = 'blue';
    //     }
    //     if (inView) {
    //         console.log('in view')
    //     }
    //     else {
    //         console.log('not in view')
    //     }
    // }, [inView]);
    const stackCards = [
        {
            bgColor: "bg-orange-300",
            title: "Our delivery speed....",
            subtitle: "We offer supper first delivery at your door step . Maximum delivery time is 30 minutes",
            description: "No time to waste, order now and get your food in 30 minutes",
            image: deliveryMen
        },
        {
            bgColor: "bg-lime-500",
            title: "Fresh Food....",
            subtitle: "Need fresh food? We got you covered . We offer fresh food at your door step . Just remember to order",
            description: "We have a wide range of fresh food to choose from many shop. We also offer fresh fruits and vegetables",
            image: freshFood
        },
        {
            bgColor: "bg-cyan-500",
            title: "Any Kind of food",
            subtitle: "Let us know what you want and we will deliver it to you. We have a wide range of food to choose from",
            description: "Nothing is impossible with us. Just order and we will deliver it to you within 30 minutes",
            image: freshFood1
        }
    ];
    return (
        <div ref={ref} className="container stack mx-auto md:w-[70%] mb-4">
            <ul className="stack-cards mb-3 js-stack-cards">
                {stackCards.map((card, index) => (
                    <li key={index} className={`stack-cards__item rounded-2xl shadow-md js-stack-cards__item`}>
                        <div className="grid grid-cols-3">
                            <div className={`flex w-full h-full ${card.bgColor} col-span-2 px-4 py-2`}>
                                <div className="">
                                    <h6 className='text-xl font-bold'>{card.title}</h6>
                                    <h1 className="text-3xl font-bold mt-5">
                                        {card.subtitle}
                                    </h1>
                                    <p>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 h-full w-full border">
                                <img src={card.image} className='h-full' alt="" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stacks;