import React from 'react';
// import 'scroll-carousel/dist/scroll.carousel.min.css';
import ScrollCarousel from 'scroll-carousel-react';
import { districts } from '../../../utils';
const ScrollSlider = () => {


    return (
        <div>
            <ScrollCarousel

                autoplay
                autoplaySpeed={3000}
                // smartSpeed
                direction="rtl"
                elementType='div'
                speed={7}
                margin={20}
            // onMove={(progress) => {
            //     if (progress > 50 && progress < 60)
            //         console.log('Scrolling', progress);
            // }}
            >
                {

                    districts.map((district, index) => <div key={district.id} className="w-[200px] rounded-xl relative h-[200px]">
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
                    </div>)

                }
            </ScrollCarousel>
        </div>
    );
};

export default ScrollSlider;