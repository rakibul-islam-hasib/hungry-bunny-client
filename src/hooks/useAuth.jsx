import { useSelector } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

/**
 * A custom hook that returns the user, error, loading state and setUser function from the auth state in the Redux store.
 * @returns {{user: Object, error: Object, loading: boolean, setUser: Function}} An object containing the user, error, loading state and setUser function.
 */
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