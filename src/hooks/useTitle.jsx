import { useEffect } from "react";

/**
 * Sets the document title with the provided title and appends the app name.
 * @param {string} title - The title to be set for the document.
 */
export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Hungry Bunny`;
    }, [title]);
}
