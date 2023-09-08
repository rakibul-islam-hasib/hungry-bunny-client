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
                <div className="mb-4">
                    <div>
                    <h1 className="text-2xl ">Blog Headline</h1>
                    <input type="text" className="text-2xl rounded-xl p-2 pl-3 w-full mt-2 mb-2" id="headline" {...register('headline')} />
                    </div>
                </div>
               
            </form>
        </div>
    );
}

export default UpdateBlog;