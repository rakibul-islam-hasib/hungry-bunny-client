import { useForm } from "react-hook-form";

function BlogUpdate() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) =>{

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex">
                <div className="">
                    <label htmlFor="blog title">Blog Headline</label>
        <input type="text" className="w-full rounded-xl" id="headline" {...register('headline')}/>
                </div>
                <div className="">
                    <label htmlFor="email">Email</label>
        <input type="email" className="w-full rounded-xl" id="email" {...register('email')}/>
                </div>
                </div>
                <div className="flex">
                <div className="">
                    <label htmlFor="blog title">Reading Time</label>
        <input type="text" className="md:w-full rounded-xl" id="time" {...register('time')}/>
                </div>
                <div className="">
                    
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
  Upload file
</label>
<input
  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
  id="file_input"
  type="file"
/>

                </div>
                </div>
                <div className="flex">
                <div className="">
                    <label htmlFor="blog title">Blog Headline</label>
        <input type="text" className="md:w-1/2 rounded-xl" id="headline" {...register('headline')}/>
                </div>
                <div className="">
                    <label htmlFor="blog title">Blog Headline</label>
        <input type="text" className="md:w-1/2 rounded-xl" id="headline" {...register('headline')}/>
                </div>
                </div>
        <input type="submit" value="blog update" />
            </form>
        </div>
    );
}

export default BlogUpdate;