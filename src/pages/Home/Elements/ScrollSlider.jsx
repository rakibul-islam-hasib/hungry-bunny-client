import React from 'react';
// import 'scroll-carousel/dist/scroll.carousel.min.css';
import ScrollCarousel from 'scroll-carousel-react';
const ScrollSlider = () => {
    

    return (
        <div>
            <ScrollCarousel
                
                autoplay
                autoplaySpeed={8}
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                    <div key={item} className="item h-[150px] w-[150px] bg-blue-600">
                        {item}
                    </div>
                ))}
            </ScrollCarousel>
        </div>
    );
};

export default ScrollSlider;