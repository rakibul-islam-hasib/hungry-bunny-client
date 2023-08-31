import { Rating } from "@mui/material";
import { FaArrowRight, FaReadme } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


function BlogDetails() {
    const blogs = useLoaderData([])
    console.log(blogs);
    return (
        <div className="md:flex mt-10 mx-auto dark:text-white">
        <div className="md:w-[60%]">
            <h2 className="text-4xl ml-5 mb-7 font-extrabold mt-5">{blogs.blogHeading}</h2>
        <img className="rounded-2xl mb-10" src={blogs.blogImage} alt="food image" />
        <div className="flex justify-between border-2 border-orange-400 pt-5 pb-5 pr-5 pl-5 rounded-2xl items-center text-center">
        <div className="flex">
        <img className="rounded-full mr-5" style={{height:50}} src={blogs.authorImage} alt="author image" />
        <div className="text-left text-2xl">
            <p>{blogs.authorName}</p>
            <p>{blogs.email}</p>
            <p>{blogs.date}</p>
        </div>
        </div>
        <div className="text-left">
        <p className='flex items-center'><span className='mr-2'>{blogs.time} min read</span><span><FaReadme/></span> </p>
        <Rating
      style={{ maxWidth: 140 }}
      value={blogs.rating}
      readOnly
    />
        </div>
        </div>
        <div className="mt-10">
        <p className="mb-5">{blogs?.description.partOne}</p>
        <p className="mb-5">{blogs?.description.partTwo}</p>
        <p className="mb-5">{blogs?.description.partThree}</p>
        </div>
        <div>
            <div className="flex justify-between">
        <input type="text"  className='w-[45%] rounded-3xl drop-shadow-lg pt-4 pb-4 text-2xl dark:text-black pl-5' placeholder='your name' />
        <input type="email"  className='w-[45%] rounded-3xl drop-shadow-lg pt-4 pb-4  text-2xl dark:text-black pl-5' placeholder='your email' />

            </div>
            <textarea type='text' name="" className="w-full drop-shadow-lg mt-5 mb-4 rounded-3xl pt-4 pb-4 border-0 text-2xl dark:text-black pl-5" id="" cols="100" placeholder="leave your comment" rows="5"></textarea>
            <input type="submit" value="send" className="w-full mb-20 text-white hover:text-orange-500 border-2 border-orange-500 bg-orange-500 hover:bg-white rounded-3xl text-3xl font-bold pt-2 pb-2"/>
        </div>
        </div>
        <div className="md:w-[40%] mt-16 md:ml-10">
            <h2 className="text-4xl text-center font-bold mb-10">Recent Blogs</h2>
            <div className="flex">
                <img style={{width: 200}} className="rounded-xl" src="https://media.istockphoto.com/id/1394233089/photo/creative-idea-and-innovation-concept.webp?b=1&s=170667a&w=0&k=20&c=6HT0Tmv4gUudW9FBvP-r-lkMY3xnL-uDM03fG4ne1jo=" alt="" />
                <div className="ml-5">
                <h3 className="text-2xl font-bold">Savoring Street Food: A Global Gastronomic Adventure</h3>
                <div className="flex">
                    
                    <p className="mr-16">date</p>
                    <p>reading time</p>
                </div>
                    <button className="text-2xl mt-3 border-0 font-bold items-center text-orange-400 flex"><span>read more</span> <span className="ml-3"><FaArrowRight/> </span></button>
                </div>
            </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5">
            <img src="https://media.istockphoto.com/id/1426039616/photo/text-faq-on-wooden-blocks-with-letters-on-a-white-background-reflection-of-the-caption-on-the.jpg?s=2048x2048&w=is&k=20&c=w_doApBfw2GzUDCfujNbshmKf918fVscTjJQnSBhWMc=" alt="" />
            <img src="https://media.istockphoto.com/id/1485822550/photo/futuristic-cpu-and-question-icon-vibrant-modern-colours-future-technology-background-with.webp?b=1&s=170667a&w=0&k=20&c=kEl-Gn3uDKukGGKRJtOZN93UaC03EIn7auEBgAqKWI8=" alt="" />
            <img src="https://media.istockphoto.com/id/1394233089/photo/creative-idea-and-innovation-concept.webp?b=1&s=170667a&w=0&k=20&c=6HT0Tmv4gUudW9FBvP-r-lkMY3xnL-uDM03fG4ne1jo=" alt="" />
            <img src="https://media.istockphoto.com/id/1420741132/photo/creative-abstract-question-mark-hologram-and-hands-typing-on-computer-keyboard-on-background.webp?b=1&s=170667a&w=0&k=20&c=JB6QvrvooQHHUoF1c9Yl2XkGBeZfWr3uirUXt7isW4M=" alt="" />
        </div> */}
        </div>
        </div>
    );
}

export default BlogDetails;