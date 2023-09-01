import React from 'react';
import { FaBook, FaCartPlus, FaWallet } from 'react-icons/fa';
import { FcCollaboration, FcMenu } from 'react-icons/fc';
import { useAuth } from '../../../hooks/useAuth';
const UserWelcome = () => {

    const { user: firebaseUser } = useAuth()


    console.log(firebaseUser)

    return (
        <div className="">
            <h1>Welcome , {firebaseUser?.displayName}</h1>
        </div>
    );
};

export default UserWelcome;