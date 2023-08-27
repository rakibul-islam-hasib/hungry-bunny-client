import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ChatIcoSvg from '../../assets/svg/ChatIcoSvg';
import ChatMen from '../../assets/svg/ChatMen';
import CloseDownSvg from '../../assets/svg/CloseDownSvg';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        console.log('Animation completed');
      },
    });

    if (chatBoxRef.current) {
      if (isOpen) {
        timeline.to(chatBoxRef.current, {
          duration: 0.5,
          ease: 'power3.out',
          bottom: '0px',
        });
      } else {
        timeline.to(chatBoxRef.current, {
          duration: 0.5,
          ease: 'power3.out',
          bottom: '-1000px',
        });
      }
    }
  }, [isOpen]);

  const toggleChatBox = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className='h-screen'>
      <div className="fixed right-3 bottom-3">
        <button onClick={toggleChatBox} className='flex border-primary dark:text-white rounded-full gap-2 items-center border px-3 py-1'>
          <ChatIcoSvg />
          <span>{isOpen ? 'Close Chat' : 'Live Chat'}</span>
        </button>
      </div>

      <div ref={chatBoxRef} className={`fixed bottom-0 right-2 `}>
        <div className="h-[500px] rounded-t-xl relative bg-orange-100 w-[300px] border border-primary">
          <div className="header flex justify-between items-center px-6 rounded-t-xl py-3 bg-primary">
            <div className="">
              <ChatMen />
            </div>
            <div className="text-white">
              <p>Welcome To</p>
              <h1 className='text-xl dark:text-white font-bold'>Live chat</h1>
            </div>
            <button onClick={toggleChatBox} className="">
              <CloseDownSvg />
            </button>
          </div>
          <div className="mt-auto border border-blue-500 absolute w-full bottom-0">
            <form action="">
              <input type="text" placeholder='' />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
