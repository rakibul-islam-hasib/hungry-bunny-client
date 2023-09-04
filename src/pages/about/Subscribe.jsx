import { FaEnvelope } from "react-icons/fa";

function Subscribe() {
    return (
        <div className="mt-20 flex mb-20">
            <div className="md:w-1/2">
                <img src="https://bslthemes.com/html/quickeat/assets/img/illustration-4.png" alt="" />
            </div>
            <div className="md:w-1/2 font-bold pt-7 ml-10 pr-6 pb-5">
                <h1 className="text-5xl ">Get the menu of your favorite restaurants every day</h1>
        <div className="flex">
        <input className="mt-10 text-2xl p-3 rounded-2xl" type="email" placeholder="Enter your email" />
        <button className="drop-shadow-lg uppercase hover:transition hover:duration-400 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            Subscribe
          </button>
        </div>
            </div>
        </div>
    );
}

export default Subscribe;