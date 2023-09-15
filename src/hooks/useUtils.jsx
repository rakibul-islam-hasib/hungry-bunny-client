import { useSelector } from "react-redux";

const useUtils = () => {
    const { isFooter, isHero, isCheckoutOpen, totalPrice, paymentIntent } = useSelector(state => state.utils);
    const returnObj = {
        isFooter,
        isHero,
        isCheckoutOpen,
        totalPrice,
        paymentIntent
    };
    return returnObj;
};

export default useUtils;