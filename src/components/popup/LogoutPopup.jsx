import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import { logoutUser } from '../../redux/slices/authThunks';


const LogoutPopup = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const handleLLogout = () => {
        
        console.log('logout')
        setOpen(true);
        
        dispatch(logoutUser());
        setOpen(false);
        
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <span className='text-xl font-bold'>Are you sure you want to logout</span>
            </DialogTitle>
            <DialogContent>
                <h1 className=''>You will be logged out from your account </h1>
                <p> and you can not revert it</p>
                {/* <DialogContentText id="alert-dialog-description">
            </DialogContentText> */}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <button className='px-6 py-2 bg-red-500 rounded-lg text-white' onClick={handleLLogout} autoFocus>

                    Agree
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default LogoutPopup;