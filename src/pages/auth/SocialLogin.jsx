
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { handleFacebookRedirect, loginWithFacebook } from '../../redux/slices/authThunks';
import { useAuth } from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect } from 'react';
const SocialLogin = () => {
    const dispatch = useDispatch();
    const { error, user } = useAuth();

    useEffect(() => {
        dispatch(handleFacebookRedirect())
    }, [dispatch])

    const handleFacebook = () => {
        dispatch(loginWithFacebook())
            .then(res => {
                console.log(res, 'res something')
            })
            .catch(err => {
                console.log(err, 'err something')
            })
        const userData = {
            email: user?.email,
            name: user?.name,
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
        // const result = await axios.post('/user-info', userData);
        // console.log('Hello')
        // console.log(result.data);


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