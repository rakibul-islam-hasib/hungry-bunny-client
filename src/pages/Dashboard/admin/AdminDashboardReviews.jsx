import React from 'react';

const AdminDashboardReviews = () => {
    return (
        <div className='w-3/4'>
            <h3 className='text-center text-2xl font-bold py-4'>Recent Reviews</h3>
            <div className="text-sm leading-6 py-2">
      <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        {/* Quote */}
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          <p>I m always on the lookout for healthy dining options, and Greens & Grains exceeded my expectations. Their salads are fresh and creative. I tried the Superfood Salad, and it was a nutritional powerhouse! The ingredients were locally sourced, and you coul</p>
        </blockquote>

        {/* Author Info */}
        <figcaption className="flex items-center space-x-4">
          <img
            src="https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg"
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              <a href="https://twitter.com/ryanflorence/status/1187951799442886656">
                <span className="absolute inset-0"></span>Wisper Jemes
              </a>
            </div>
            
          </div>
        </figcaption>
      </figure>
    </div>
            <div className="text-sm leading-6 py-2">
      <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        {/* Quote */}
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          <p>I had an amazing dining experience at Taste Haven! The food was out of this world, and the ambiance was so cozy. I highly recommend their signature dish, the Gourmet Delight. It was a burst of flavors in every bite. </p>
        </blockquote>

        {/* Author Info */}
        <figcaption className="flex items-center space-x-4">
          <img
            src="https://st3.depositphotos.com/1037987/15097/i/450/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              <a href="https://twitter.com/ryanflorence/status/1187951799442886656">
                <span className="absolute inset-0"></span>Ryan Florence
              </a>
            </div>
           
          </div>
        </figcaption>
      </figure>
    </div>
            <div className="text-sm leading-6 py-2">
      <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        {/* Quote */}
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          <p>Visited Flavors Galore for the first time, and it wont be my last! The menu had a great variety, and I decided to try the Chefs Tasting Platter Each dish was a masterpiece, beautifully presented and bursting with flavor.</p>
        </blockquote>

        {/* Author Info */}
        <figcaption className="flex items-center space-x-4">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              <a href="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg">
                <span className="absolute inset-0"></span>Willin
              </a>
            </div>
      
          </div>
        </figcaption>
      </figure>
    </div>
      
        </div>
    );
};

export default AdminDashboardReviews;