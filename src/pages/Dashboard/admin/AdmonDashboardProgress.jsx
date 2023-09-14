import React from 'react';

const AdmonDashboardProgress = () => {
    return (
        <div className="max-w-xl mx-auto p-4 mt-16 w-full">
        <h4 className="text-2xl md:text-5xl dark:text-white font-bold mb-6">Earnig Type</h4>
  
        <div className="mb-7">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Restaurant</span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
          </div>
          <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" stroke="#FF6464" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '79.2px, 100px' }}></path>
          </svg>
        </div>
  
        <div className="mb-7">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Home Delivary</span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
          </div>
          <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" stroke="#9272D4" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '94.05px, 100px' }}></path>
          </svg>
        </div>
  
        <div className="mb-7">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Online Order</span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
          </div>
          <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
            <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
            <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" stroke="#5185D4" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '64.35px, 100px' }}></path>
          </svg>
        </div>
  
      
      </div>
    );
};

export default AdmonDashboardProgress;