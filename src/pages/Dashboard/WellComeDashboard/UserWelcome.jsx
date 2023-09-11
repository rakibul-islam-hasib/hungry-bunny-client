import React from 'react';
import { FaBook, FaCartPlus, FaWallet } from 'react-icons/fa';
import { FcCollaboration, FcMenu } from 'react-icons/fc';
import { useAuth } from '../../../hooks/useAuth';
import useUserSecure from '../../../hooks/useUserSecure';
const UserWelcome = () => {

    const { user: firebaseUser } = useAuth()

    const [user] = useUserSecure()
    console.log(firebaseUser)
    console.log(user)
    return (
        <div className="">
            <h1>Welcome , {firebaseUser?.displayName}</h1>
        </div>
    );
};

export default UserWelcome;