import React from 'react';
import ChatMen from '../../assets/svg/ChatMen';
import CloseDownSvg from '../../assets/svg/CloseDownSvg';
import { gsap } from 'gsap';
import ChatIcoSvg from '../../assets/svg/ChatIcoSvg';
const ChatBox = () => {

  const a1 = () => {
    // Description : This function is for close the chat box . 
    const timeline = gsap.timeline({
      onComplete: () => {
        console.log('completed');
      },
    });

    timeline.to('#close-btn-chat', {
      duration: 0.01,
      ease: 'bounce.out',
      opacity: 0,
      right: '-500px',
    })
      .to('#chat-box', {
        duration: 1,
        ease: 'power3.out',
        bottom: '-1000px',
      })
      .to('#close-btn-chat', {
        duration: 0.1,
        ease: 'bounce.out',
        opacity: 0.5,
      })
      .to('#close-btn-chat', {
        duration: 0.4,
        ease: 'bounce.out',
        opacity: 1,
        right: '12px',
      })
  }
  const a2 = () => {
    // Description : This function is for open the chat box .
    const timeline = gsap.timeline({
      onComplete: () => {
        console.log('completed');
      },
    });

    timeline.to('#chat-box', {
      duration: 0.5,
      ease: 'power3.out',
      bottom: '0px',
    })
  };

  return (
    <div className='h-screen'>

      {/* Chat button */}
      <div id='close-btn-chat' className="fixed right-3 bottom-3">
        <button onClick={() => a2()} className='flex border-primary rounded-full gap-2 items-center border px-3 py-1'>
          <ChatIcoSvg />
          <span>Live Chat</span>
        </button>
      </div>

      {/* Chat box by rakib */}
      <div id='chat-box' className="fixed -bottom-[1000px] right-2">
        <div className="h-[500px] rounded-t-xl bg-orange-100 w-[300px] border border-primary ">
          <div className="header flex justify-between items-center px-6 rounded-t-xl py-3 bg-primary">
            <div className="">
              <ChatMen />
            </div>
            <div className="text-white">
              <p>Welcome To</p>
              <h1 className='text-xl font-bold'>Live chat</h1>
            </div>
            <button onClick={() => a1()} className="">
              <CloseDownSvg />
            </button>
          </div>
          {/* 
          // Body of chat box
        */}


          <div className="mt-auto border border-blue-500">
            <input type="text" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatBox;