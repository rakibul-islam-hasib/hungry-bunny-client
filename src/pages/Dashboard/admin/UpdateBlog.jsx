import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

function UpdateBlog() {
    const loadedBlog = useLoaderData()
    // console.log(loadedBlog);
    const axios = useAxiosSecure()
    const onFromSubmit = (event) => {
        event.preventDefault();
        const from = new FormData(event.target);
        const data = Object.fromEntries(from.entries());
        axios.put(`/blogs/${loadedBlog._id}`, data)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your blog has been updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="mt-14 ml-4 mr-4 mb-10">
            <Helmet>
        <title>Hungry Bunny || admin || update blog</title>
      </Helmet>
            <h2 className="text-3xl uppercase text-center mb-8 text-orange-500 font-bold">update blog information </h2>
            <form onSubmit={event => onFromSubmit(event)}>
                {/* blog headline */}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Blog Heading</h1>
                        <input
                            type="text"
                            defaultValue={loadedBlog.blogHeading}
                            className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 border-2 border-orange-500"
                            id="headline" name="blogHeading" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Reading time</h1>
                        <input
                            type="text"
                            defaultValue={loadedBlog?.time}
                            className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500"
                            name="time"
                        />
                    </div>
                </div>
                {/* blog image and date */}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Blog Image</h1>
                        <input
                            type="text"
                            defaultValue={loadedBlog?.blogImage}
                            className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500"
                            name="blogImage"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Blog Date</h1>
                        <input
                            type="date"
                            defaultValue={loadedBlog?.date}
                            className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500"
                            name="date"
                        />
                    </div>

                </div>
                {/* blog email and rating*/}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Author email</h1>
                        <input
                            type="email"
                            defaultValue={loadedBlog?.email} className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500" id="email"
                            name="email"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Blog Rating</h1>
                        <input
                            type="text"
                            defaultValue={loadedBlog?.rating} className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500"
                            name="rating"
                        />
                    </div>

                </div>
                {/* Author name and image*/}
                <div className="mb-4 md:flex gap-x-8">
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Author Name</h1>
                        <input
                            type="text"
                            defaultValue={loadedBlog?.authorName}
                            className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500"
                            name="authorName"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-1xl ">Author Image</h1>
                        <input
                            type="text"
                            defaultValue={loadedBlog?.authorImage}
                            className="text-1xl rounded-xl p-2 pl-3 w-full mt-2 mb-2 mr-5 border-2 border-orange-500"
                            name="authorImage"
                        />
                    </div>

                </div>
                {/* blog headline */}
                <div className="mb-4">
                    <div>
                        <h1 className="text-1xl ">Blog Description</h1>
                        <textarea
                            type="text"
                            defaultValue={loadedBlog?.description}
                            className="text-1xl rounded-xl p-2 pl-3 w-full h-60 mt-2 mb-2 border-2 border-orange-500"
                            id="headline"
                            name="description"
                        ></textarea>

                    </div>
                </div>
                <input type="submit" className="drop-shadow-lg uppercase text-center hover:transition hover:duration-400 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 text-1xl px-4 rounded-full w-full" value="Update Blog" />
            </form>
        </div>
    );
}

export default UpdateBlog;