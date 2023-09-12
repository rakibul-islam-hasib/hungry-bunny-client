import { useSelector } from "react-redux";

const useUtils = () => {
    const { isFooter, isHero, isCheckoutOpen } = useSelector(state => state.utils);
    const returnObj = {
        isFooter,
        isHero,
        isCheckoutOpen
    };
    return returnObj;
};

export default useUtils;