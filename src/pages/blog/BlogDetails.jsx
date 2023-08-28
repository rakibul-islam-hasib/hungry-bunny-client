import { useLoaderData } from "react-router-dom";


function BlogDetails() {
    const blogs = useLoaderData([])
    console.log(blogs);
    return (
        <div>
            
        </div>
    );
}

export default BlogDetails;