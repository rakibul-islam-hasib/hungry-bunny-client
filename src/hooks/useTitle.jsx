import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} || Hungry Bunny`;
    }, [title]);


    return (
        <div>
            
        </div>
    );
};

export default useTitle;
