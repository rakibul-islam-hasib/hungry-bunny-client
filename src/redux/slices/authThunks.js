import { FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { setUser, setError, setLoading } from './authSlice';
import { getAuth } from 'firebase/auth';
import { app } from '../../config/firebase/firebase.config';

const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();
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
export const updateName = (name) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await updateProfile(auth.currentUser, { displayName: name });
        // Dispatch any success action if needed
    } catch (error) {
        dispatch(setError(error.code));
    }
    dispatch(setLoading(false));
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
        dispatch(setLoading(false));
    }
}
export const logoutUser = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await signOut(auth);
        dispatch(setUser(null));
    } catch (error) {
        dispatch(setError(error.code));
        dispatch(setLoading(false));
    }
}
export const loginWithFacebook = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        // Login with facebook
       const userCredential =  await signInWithPopup(auth, facebookProvider);
         dispatch(setUser(userCredential.user));
    } catch (error) {
        dispatch(setError(error.code));
        dispatch(setLoading(false));
    }
}
