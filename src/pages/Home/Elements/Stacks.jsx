import React, { useEffect, useState } from 'react';
import './css/Stack.css'
import { animate } from '../../../utils/stackAnimate';
import deliveryMen from '../../../assets/img/delivery.jpg';
import { useInView } from 'react-intersection-observer';
const Stacks = () => {

    useEffect(() => {
        return () => animate();
    }, []);
    const { ref, inView } = useInView({
        triggerOnce: false, // Only trigger once when the component comes into view
    });

    useEffect(() => {
        if (inView) {
            document.body.style.background = 'blue';
        }
        if (inView) {
            console.log('in view')
        }
        else {
            console.log('not in view')
        }
    }, [inView]);



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
        <div ref={ref} className="container stack mx-auto w-[70%] mb-4">
            <ul className="stack-cards mb-3 js-stack-cards">
                <li className={`stack-cards__item bg-blue-200 rounded-2xl shadow-md  h-[30px] js-stack-cards__item`}>
                    <div className="grid grid-cols-2">
                        <div className=" flex h-full items-center height-100%">
                            <div className="">
                                <h2>Hi this is card 1</h2>
                                <p className="display@xs"></p>
                                <p><a href="#0" className="btn btn--accent">Read more</a></p>
                            </div>
                        </div>
                        <div className="">
                            <img src={deliveryMen} alt="" />
                        </div>
                    </div>
                </li>
                <li className={`stack-cards__item  rounded-2xl shadow-md  h-[30px] js-stack-cards__item`}>
                    <div className="grid grid-cols-3">
                        <div
                            style={{ background: 'linear-gradient(90deg, rgba(214,169,110,1) 1%, rgba(232,237,97,0.7651435574229692) 54%, rgba(154,231,35,0.6138830532212884) 80%, rgba(0,255,188,0.20211834733893552) 99%)' }}
                            className=" flex h-full col-span-2 px-4 py-2 ">
                            <div className="">
                                <h6 className='text-xl'>Our delivery speed....</h6>
                                <h1 className="text-3xl mt-5">
                                    We offer supper first delivery at your door step . Maximum delivery time is 30 minutes
                                </h1>
                                <p>
                                    No time to waste, order now and get your food in 30 minutes
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 h-full w-full border">
                            <img src={deliveryMen} className='h-full' alt="" />
                        </div>
                    </div>
                </li>
                <li className={`stack-cards__item bg-blue-200 rounded-2xl shadow-md  h-[30px] js-stack-cards__item`}>
                    <div className="grid grid-cols-2">
                        <div className=" flex h-full border-4 border-blue-700">
                            <div className="px-4 py-3">
                                <h2>Hi this is card 1</h2>
                                <p className="display@xs">lorem50   </p>
                                <p><a href="#0" className="btn btn--accent">Read more</a></p>
                            </div>
                        </div>
                        <div className="">
                            <img src={deliveryMen} alt="" />
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Stacks;