import { Menu } from '@headlessui/react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleLLogout = () => {
        console.log('logout')
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Menu as="div" className="relative  inline-block">
                <div>
                    <Menu.Button className="focus:outline-none">
                        <div className="cursor-pointer mt-2">
                            <RxAvatar className='text-3xl text-primary' />
                        </div>
                    </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => navigate('/dashboard')}
                                className={`${active ? 'bg-gray-100' : ''
                                    } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Dashboard
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => console.log('help')}
                                className={`${active ? 'bg-gray-100' : ''
                                    } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Help
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button onClick={handleLLogout} className={`${active ? 'bg-gray-100' : ''
                                } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Logout
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>

            {
                // Modal here 
            }

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
                        <h1 className=''>You will be logged out from your account</h1>
                    {/* <DialogContentText id="alert-dialog-description">
                    </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default NavMenu;