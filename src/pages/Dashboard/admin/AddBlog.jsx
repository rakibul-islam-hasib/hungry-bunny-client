import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function AddBlog() {
    const axios = useAxiosSecure()
    const { register, handleSubmit } = useForm()

    const onSubmit =() =>{
        
    }
    return (
        <div className="mt-14 ml-4 mr-4 mb-10">
        <h2 className="text-3xl uppercase text-center mb-8 text-orange-500 font-bold">create new blog</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* blog headline */}
            <div className="mb-4">
                <div> 
                    <label htmlFor="Blog Heading">Blog Heading</label>
                <input type="text" placeholder="write blog heading" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2" id="headline" {...register('blogHeading', {required: true})} />
                </div>
            </div>
            {/* blog image and date */}
            <div className="mb-4 md:flex gap-x-8">
                <div className="md:w-1/2">
                <label htmlFor="Blog Image">Blog Image</label>
                <input type="text" placeholder="give blog Image" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="blogImage" {...register('blogImage', {required: true})} />
                </div>
                <div className="md:w-1/2">
                <label htmlFor="Blog Date">Blog Date</label>
                <input type="date"  placeholder="choice the date" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="date" {...register('date', {required: true})} />
                </div>
                
            </div>
            {/* blog email and rating*/}
            <div className="mb-4 md:flex gap-x-8">
                <div className="md:w-1/2">
                <label htmlFor="author email">author email</label>
                <input type="email" placeholder="write author email" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="email" {...register('email', {required: true})} />
                </div>
                <div className="md:w-1/2">
                <label htmlFor="Blog Rating">Blog Rating</label>
                <input type="number" placeholder="write blog rating number" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="rating" {...register('rating', {required: true})} />
                </div>
                
            </div>
            {/* Author name and image*/}
            <div className="mb-4 md:flex gap-x-8">
                <div className="md:w-1/2">
                <label htmlFor="Author Name">Author Name</label>
                <input type="text" placeholder="write author name" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="email" {...register('authorName', {required: true})} />
                </div>
                <div className="md:w-1/2">
                <label htmlFor="Author Image">Author Image</label>
                <input type="text" placeholder="give author image url" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="rating" {...register('authorImage', {required: true})} />
                </div>
                
            </div>
           {/* blog headline */}
           <div className="mb-4">
                <div>
                <label htmlFor="Blog Description">Blog Description</label>
            <textarea type="text" placeholder="write blog description" className="text-1xl rounded-xl p-2 pl-3 w-full h-60 mt-2 mb-2" id="headline" {...register('description', {required: true})} ></textarea>
                
                    </div>
            </div>
            <input type="submit" className="drop-shadow-lg uppercase text-center hover:transition hover:duration-400 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 text-2xl px-4 rounded-full w-full" value="add new Blog"/>
        </form>
    </div>
    );
}

export default AddBlog;