import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import { districts } from '../../../utils';

const ScrollSlider = () => {
    // Duplicate the districts array to create a two-sided carousel
    const duplicatedDistricts = [...districts, ...districts];

    return (
        <div className='my-10'>
            <div className="text-center my-10">
                <h1 className="text-5xl font-bold text-gray-700"><span className='text-primary'>Popular</span> Districts</h1>
                <p className='text-sm mt-3'>Here some popular districts. We are trusted by hole Bangladesh</p>
            </div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={3000}
                direction="rtl"
                elementType='div'
                speed={7}
                margin={20}
                slideSelector='.my-hp-slide'
            >
                {duplicatedDistricts.map((district, index) => (
                    <div key={index} className="w-[200px] my-hp-slide rounded-xl relative h-[200px]">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full h-full relative bg-gray-200 flex items-center justify-center">
                                <img src={district.photo} alt="" className="h-[150px] w-[200px]" />
                            </div>
                            <div className="bottom-[50px] z-40 absolute">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full opacity-70 h-full fill-primary' viewBox="0 0 1440 320"><path className='fill-primary' fillOpacity="1" d="M0,96L60,96C120,96,240,96,360,85.3C480,75,600,53,720,85.3C840,117,960,203,1080,202.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                                    <p className="text-sm  absolute left-2 top-5 text-white font-semibold" style={{ zIndex: 50 }}>
                                        {district.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ScrollCarousel>
        </div>
    );
};

export default ScrollSlider;
