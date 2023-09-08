import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

function UpdateBlog() {
    const loadedBlog = useLoaderData()
    console.log(loadedBlog);
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) =>{

    }
    return (
        <div className="mt-10 ml-4 mr-4">
            <h2>update info {loadedBlog.blogHeading}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* blog headline */}
                <div className="mb-4">
                    <div>
                    <h1 className="text-2xl ">Blog Heading</h1>
                    <input type="text" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2" id="headline" {...register('blogHeading')} />
                    </div>
                </div>
                {/* blog image and date */}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                    <h1 className="text-2xl ">Blog Image</h1>
                    <input type="text" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="blogImage" {...register('blogImage')} />
                    </div>
                    <div className="md:w-1/2">
                    <h1 className="text-2xl ">Blog Date</h1>
                    <input type="text" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="date" {...register('date')} />
                    </div>
                    
                </div>
                {/* blog email and rating*/}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                    <h1 className="text-2xl ">Author email</h1>
                    <input type="email" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="email" {...register('email')} />
                    </div>
                    <div className="md:w-1/2">
                    <h1 className="text-2xl ">Blog Rating</h1>
                    <input type="number" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="rating" {...register('rating')} />
                    </div>
                    
                </div>
                {/* Author name and image*/}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                    <h1 className="text-2xl ">Author Name</h1>
                    <input type="text" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="email" {...register('authorName')} />
                    </div>
                    <div className="md:w-1/2">
                    <h1 className="text-2xl ">Author Image</h1>
                    <input type="text" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5" id="rating" {...register('authorImage')} />
                    </div>
                    
                </div>
               
            </form>
        </div>
    );
}

export default UpdateBlog;