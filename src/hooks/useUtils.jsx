import { useSelector } from "react-redux";

const useUtils = () => {
    const { isFooter, isHero, isCheckoutOpen, totalPrice, paymentInfo } = useSelector(state => state.utils);
    const returnObj = {
        isFooter,
        isHero,
        isCheckoutOpen,
        totalPrice,
        paymentInfo
    };
    return returnObj;
};

export default useUtils;