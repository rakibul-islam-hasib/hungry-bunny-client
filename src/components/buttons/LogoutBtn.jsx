import React from 'react';
import './css/style.css';
import { BiLogOut } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/authThunks';
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const handleLLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutUser());
                Swal.fire(
                    'Logged out!',
                    'Your are logged out.',
                    'success'
                )
            }
        })
    }

    return (
        <button onClick={handleLLogout} className="p-2 bg-primary rounded-full ">
            <BiLogOut className='text-2xl text-white' />
        </button>
    );
};

export default LogoutBtn;