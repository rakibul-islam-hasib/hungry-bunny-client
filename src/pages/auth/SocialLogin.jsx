
import { Button } from '@mui/material';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginWithFacebook } from '../../redux/slices/authThunks';
import { useAuth } from '../../hooks/useAuth';
const SocialLogin = () => {
    const dispatch = useDispatch();
    const { error, user } = useAuth();
    console.log(user, error)
    const handleGoogle = () => {

    }
    const handleFacebook = async () => {
        const userCredential = await dispatch(loginWithFacebook());
        if (userCredential) {
            const userData = {
                email: userCredential.user.email,
                name: userCredential.user.displayName,
                gender: 'Not Provided',
                location: 'Not Provided',
                joined: new Date(),
                role: 'user',
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
        }
        if (error) {
            console.log(error)
            alert(error)
        }

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