import { useSelector } from "react-redux";

const useUtils = () => {
    const { isFooter, isHero } = useSelector(state => state.utils);
    const returnObj = {
        isFooter,
        isHero
    };
    return returnObj;
};

export default useUtils;