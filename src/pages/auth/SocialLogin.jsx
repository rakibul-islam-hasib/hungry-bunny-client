
import { Button } from '@mui/material';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginWithFacebook } from '../../redux/slices/authThunks';
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../config/firebase/firebase.config';
import { useAuth } from '../../hooks/useAuth';
const SocialLogin = () => {
    const dispatch = useDispatch();
    const { error, user } = useAuth();
    
    const handleGoogle = () => {

    }
    const handleFacebook = async () => {
        const userCredential = await dispatch(loginWithFacebook());
        console.log(userCredential)
        console.log(error)
    }


    return (
        <div className='pt-6'>

            <div className="text-center">
                <div className="divider">OR SIGN IN WITH</div>
                <div className='flex gap-4 pt-3 justify-center'>
                    <button
                        onClick={handleFacebook}
                        title="Facebook"

                        className=' px-4 flex items-center py-2 gap-3 rounded-xl border-2 border-primary'
                    >
                        <FaFacebook className='text-2xl'></FaFacebook>

                        Facebook
                    </button>

                    <button
                        onClick={handleFacebook}
                        title="Facebook"

                        className=' px-3 flex items-center py-2 gap-3 rounded-xl border-2 border-primary'
                    >
                        <FaGoogle className='text-2xl'></FaGoogle>

                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;