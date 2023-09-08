import { FaEnvelope } from "react-icons/fa";

function Subscribe() {
    return (
        <div className="mt-20 flex mb-20 dark:text-white">
            <div className="md:w-1/2">
                <img src="https://bslthemes.com/html/quickeat/assets/img/illustration-4.png" alt="" />
            </div>
            <div className="md:w-1/2 font-bold pt-7 ml-10 pr-6 pb-5">
                <h1 className="text-5xl ">Get the menu of your favorite restaurant every day</h1>
        <div className="flex mt-10">
        <input className="text-2xl dark:text-black p-3 rounded-2xl" type="email" placeholder="Enter your email" />
        <button className="drop-shadow-lg uppercase hover:transition hover:duration-400 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white text-white font-bold rounded-2xl flex items-center text-2xl ml-3 pr-3 pl-3">
            Subscribe
          </button>
        </div>
            </div>
        </div>
    );
}

export default Subscribe;