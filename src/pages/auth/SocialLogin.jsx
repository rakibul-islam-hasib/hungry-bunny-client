
import { Button } from '@mui/material';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {

    const handleGoogle = () => {

    }
    const handleFacebook = () => {

    }


    return (
        <div className='pt-6'>

            <div className="text-center">
                <div className="divider">OR SIGN IN WITH</div>
                <div className='flex pt-3 justify-center'>
                    <button
                        onClick={handleFacebook}
                        title="Facebook"
                        
                        className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                    >
                        
                        <span className='flex gap-3 items-center relative px-10 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                        <FaFacebook className='text-2xl'></FaFacebook>

                        Facebook
                        </span>
                    </button>
                    <button
                        onClick={handleGoogle}
                        title="Google"
                        className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                    >
                        
                        <span className='flex gap-3 items-center relative px-10 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                        <FaGoogle className='text-2xl'></FaGoogle>

                        Google
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;