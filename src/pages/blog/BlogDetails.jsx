import { Rating } from "@mui/material";
import { FaReadme } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


function BlogDetails() {
    const blogs = useLoaderData([])
    console.log(blogs);
    return (
        <div className="mt-10 w-3/4 mx-auto">
            <h2 className="text-4xl ml-5 mb-7 font-extrabold mt-5">{blogs.blogHeading}</h2>
            <div>
        <img className="rounded-2xl mb-10" src={blogs.blogImage} alt="food image" />
            </div>
        <div className="md:w-3/4 mx-auto ">
        <div className="flex justify-between border-2 border-orange-400 pt-8 pb-8 pr-5 pl-5 rounded-2xl items-center text-center">
        <div className="flex">
        <img className="rounded-full mr-5" style={{height:50}} src={blogs.authorImage} alt="author image" />
        <div>
            <p>{blogs.authorName}</p>
            <p> khan@gmail.com</p>
            <p>{blogs.date}</p>
        </div>
        </div>
        <div>
        <p className='flex items-center'><span className='mr-2'>{blogs.time} min read</span><span><FaReadme/></span> </p>
        <Rating
      style={{ maxWidth: 140 }}
      value={blogs.rating}
      readOnly
    />
        </div>
        </div>
        <div className="mt-10">
        <p className="mb-5">{blogs.description.partOne}</p>
        <p className="mb-5">{blogs.description.partTwo}</p>
        <p className="mb-5">{blogs.description.partThree}</p>
        </div>
        </div>
        </div>
    );
}

export default BlogDetails;