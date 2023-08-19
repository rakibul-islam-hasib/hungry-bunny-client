import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

const UserProfile = () => {
    const {user}=useAuth()
    return (
        <div>
            <h1>Mr: {user.displayName}</h1>
            
        </div>
    );
};

export default UserProfile;