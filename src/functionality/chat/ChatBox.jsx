import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ChatIcoSvg from '../../assets/svg/ChatIcoSvg';
import ChatMen from '../../assets/svg/ChatMen';
import CloseDownSvg from '../../assets/svg/CloseDownSvg';
import useUtils from '../../hooks/useUtils';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef(null);
  const { isFooter, isHero } = useUtils();
  const [isHidden, setIsHidden] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isFooter || isHero) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [isFooter, isHero]);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // console.log('Animation completed');
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

  const handleUserMessage = (message) => {
    const newMessage = { text: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    processUserMessage(message);
  };

  const processUserMessage = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    let botResponse = '';

    if (lowerCaseMessage.includes('/help')) {
      botResponse = "Hello! I'm here to help. How can I assist you?";
    } else if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
      botResponse = "Hi there! How can I assist you today?";
    } else {
      botResponse = "I'm sorry, I didn't understand that. How can I assist you?";
    }

    const newBotMessage = { text: botResponse, isUser: false };
    setMessages((prevMessages) => [...prevMessages, newBotMessage]);
  };

  return (
    <div className=''>
      <div className={`fixed right-3 bottom-3 ${isHidden ? 'hidden' : ''}`}>
        <button onClick={toggleChatBox} className={`flex border-primary bg-white dark:bg-black  dark:text-white rounded-full gap-2 items-center border px-3 py-1 `}>
          <ChatIcoSvg />
          <span className='hidden md:block'>{isOpen ? 'Close Chat' : 'Live Chat'}</span>
        </button>
      </div>

      <div ref={chatBoxRef} className={`fixed right-3 -bottom-[1000px] `}>
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
          <div className="message-container px-4 py-2">
            {messages.map((message, index) => (
              <div key={index} className={message.isUser ? 'user-message text-right px-2 py-1 bg-lime-200  right-0 flex justify-end' : 'bot-message'}>
                <div className="">
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto absolute w-full bottom-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.target.elements.message;
                if (input.value.trim() !== '') {
                  handleUserMessage(input.value);
                  input.value = '';
                }
              }}
              className='flex mx-3 mb-2 items-center gap-1'
            >
              <input
                type="text"
                name="message"
                placeholder='Type your message....'
                className='outline-none py-2 px-2 w-full rounded-full'
              />
              <button type="submit" className='px-2 py-2 font-bold text-white bg-primary rounded-[30px]'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
