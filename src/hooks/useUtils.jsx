import { useSelector } from "react-redux";

const useUtils = () => {
    const { isFooter } = useSelector(state => state.utils);
    const returnObj = {
        isFooter,
    };
    return returnObj;
};

export default useUtils;