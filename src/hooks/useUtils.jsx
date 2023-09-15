import { useSelector } from "react-redux";

const useUtils = () => {
    const { isFooter, isHero, isCheckoutOpen , totalPrice} = useSelector(state => state.utils);
    const returnObj = {
        isFooter,
        isHero,
        isCheckoutOpen, 
        totalPrice
    };
    return returnObj;
};

export default useUtils;