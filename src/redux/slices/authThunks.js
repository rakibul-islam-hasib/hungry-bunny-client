import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { setUser, setError, setLoading } from './authSlice';
import { getAuth } from 'firebase/auth';
import { app } from '../../config/firebase/firebase.config';
import { useAuth } from '../../hooks/useAuth';

const auth = getAuth(app);
export const registerUser = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
        return userCredential;
    } catch (error) {
        dispatch(setError(error.code));
    }
    dispatch(setLoading(false));
};
export const updateName = (name) => (dispatch) => {
    dispatch(setLoading(true));
    try {
        return updateProfile(auth.currentUser, { displayName: name })
    } catch (error) {
        dispatch(setError(error.code));
    }
}
// Similar thunks for other actions...
export const loginUser = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
    }
    catch (error) {
        dispatch(setError(error.code));
    }
}
export const logoutUser = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await signOut(auth);
        dispatch(setUser(null));
    } catch (error) {
        dispatch(setError(error.code));
    }
}