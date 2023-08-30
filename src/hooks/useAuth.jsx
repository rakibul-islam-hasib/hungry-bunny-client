import { useSelector } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

export const useAuth = () => {
    const { user, error, loading } = useSelector(state => state.auth);
    const returnObj = {
        user,
        error,
        loading,
        setUser,
        
    }
    return returnObj;
}