import React from "react";
import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel>
      <div className="relative">
        <img
          src="https://t4.ftcdn.net/jpg/02/44/61/19/360_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpghttps://t4.ftcdn.net/jpg/02/44/61/19/360_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpg"
          alt="Slide 1"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div className="w-2/4">
            <Fade>
              <h2 className="text-white text-6xl font-bold">
                Welcome to our Hungry Bunny
              </h2>
            </Fade>

            <Fade cascade damping={0.1}>
              <p className="text-white pt-10">
                At CuisineExpress, we are more than just a food delivery service
                we are your culinary partner, bringing the world of delectable
                dishes to your doorstep. Whether you are craving a comforting
                bowl of pasta, a sizzling plate of Asian stir-fry, or a
                mouthwatering slice of pizza, our diverse menu offerings are
                designed to tantalize your taste buds. Our mission is to bridge
                the gap between your cravings and the finest local restaurants,
                ensuring that each bite is a delightful experience.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/617364554/photo/hamburger-with-fries.jpg?s=612x612&w=0&k=20&c=t8fMIRewNFRU7YSMNWIx2axoyZNjsh0cxHM4vYMALf8="
          alt="Slide 2"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div className="w-2/4">
            <Fade>
              <h2 className="text-white text-6xl font-bold">
                Your Culinary Courier
              </h2>
            </Fade>

            <Fade cascade damping={0.1}>
              <p className="text-white pt-10">
                Introducing PlatePal, where convenience meets gourmet dining.
                Say goodbye to long lines and crowded eateries – now you can
                relish restaurant-style meals from the comfort of your home. Our
                team is dedicated to curating a selection of dishes that
                showcase a spectrum of flavors, from traditional classics to
                contemporary innovations. With a seamless online ordering
                process, real-time tracking, and prompt deliveries, PlatePal
                guarantees that every moment of your dining journey is
                characterized by satisfaction and ease.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Slide 3"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div className="w-2/4">
            <Fade>
              <h2 className="text-white text-6xl font-bold">
                Dishing Out Delight, Right to Yo
              </h2>
            </Fade>

            <Fade cascade damping={0.1}>
              <p className="text-white pt-10">
                At CuisineExpress, we are more than just a food delivery service
                – we are your culinary partner, bringing the world of delectable
                dishes to your doorstep. Whether you are craving a comforting
                bowl of pasta, a sizzling plate of Asian stir-fry, or a
                mouthwatering slice of pizza, our diverse menu offerings are
                designed to tantalize your taste buds. Our mission is to bridge
                the gap between your cravings and the finest local restaurants,
                ensuring that each bite is a delightful experience.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
