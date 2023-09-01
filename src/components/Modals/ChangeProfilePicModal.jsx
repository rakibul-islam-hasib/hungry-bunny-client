import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { storage } from '../../config/firebase/firebase.config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { toast } from 'react-hot-toast';
const ChangeProfilePicModal = ({ isOpen, onClose, onSuccess }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleRemoveClick = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };

    const handleProfilePicChange = (file) => {
        setIsLoading(true);
        const imgId = v4();
        const imagesRef = ref(storage, `images/${imgId + selectedFile?.name}`);

        const test = uploadBytes(imagesRef, file).then((snapshot) => {
            toast.loading('Uploading...');
            getDownloadURL(ref(storage, `images/${imgId + selectedFile?.name}`))
                .then((url) => {
                    if (url) {
                        onSuccess(url);
                        setIsLoading(false);
                        onClose();
                    }
                    else {
                        toast.error('Something went wrong , please try again later');
                        setIsLoading(false);
                    }
                })
        });
        toast.promise(test, {
            loading: 'Uploading...',
            success: 'Your pic has been uploaded successfully',
            error: 'Something went wrong , please try again later',
        });
    };
    return (
        <Transition.Root show={isOpen} as={React.Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={onClose}
            >
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
                        className="bg-white p-8 rounded-lg md:min-w-[300px] shadow-lg"
                    >
                        <div className="w-full h-full flex gap-5">
                            <div className="w-[150px] h-[150px] border ">
                                {
                                    previewUrl ? <img src={previewUrl} alt="Selected file preview" className="w-full h-full object-cover" /> :
                                        <div className='h-full w-full flex justify-center items-center'>
                                            <h1>Your awesome pic</h1>
                                        </div>
                                }
                            </div>
                            <div className="">
                                <h1>Hey , {user?.displayName}</h1>
                                {/* Remove image button */}
                                {previewUrl && (
                                    <div className="mt-4">
                                        <button
                                            onClick={handleRemoveClick}
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Remove image
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* File upload form */}
                        <div className="mt-6">
                            <label htmlFor="fileInput" className="block font-medium text-gray-600">
                                Upload a file:
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-2 border border-primary p-1"
                            />
                        </div>


                        <div className="flex justify-end mt-6">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 mr-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    // Pass the selectedFile to the onSuccess handler
                                    // handleFileChange();
                                    handleProfilePicChange(selectedFile);
                                }}
                                disabled={!selectedFile || isLoading}
                                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                            >
                                {isLoading ? 'Uploading...' : 'Upload'}
                            </button>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ChangeProfilePicModal;