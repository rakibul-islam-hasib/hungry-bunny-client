import { FacebookAuthProvider, createUserWithEmailAndPassword, getRedirectResult, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from 'firebase/auth';
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
    // const axios = useAxiosFetch();
    dispatch(setLoading(true));
    dispatch(setError(''));
    try {
        // Login with facebook
        const userCredential = await signInWithRedirect(auth, facebookProvider);
        if (userCredential.user) {
            const userData = {
                email: userCredential.user.email,
                name: userCredential.user.displayName,
            }
            // const result = await axios.post('/user-info', userData);
            // console.log(result)
            dispatch(setUser(userCredential.user));
        }
    } catch (error) {
        dispatch(setError(error.code));
        console.log(error.code)
        dispatch(setLoading(false));
    }
}

// You need to set up an observer to get the user data after the redirect is complete
export const handleFacebookRedirect = () => async (dispatch) => {
    try {
        // Get the redirect result
        const userCredential = await getRedirectResult(auth);

        if (userCredential.user) {

            const userData = {
                email: userCredential.user.email,
                name: userCredential.user.displayName,
                gender: 'N/A',
                location: 'N/A',
                joined: new Date(),
                role: 'user',
                method: 'facebook',
                phone: {
                    p1: '',
                    p2: ''
                },
                address: '',
                following: [],
                followers: [],
                likedPost: [],
                isVerified: false,
                photo: 'https://i.ibb.co/txQbC7p/casual-life-3d-profile-picture-of-person-in-glasses-and-orange-shirt.png',
            }
            // TODO : Replace with server URL : https://
            fetch('http://localhost:5000/user-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
            dispatch(setUser(userCredential.user));
        }
    } catch (error) {
        dispatch(setError(error.code));
        console.log(error.code);
    } finally {
        dispatch(setLoading(false));
    }
};