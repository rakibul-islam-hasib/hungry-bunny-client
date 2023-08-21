import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const commentsData = [
    {
        id: 1,
        author: 'User1',
        text: 'This is the first comment.',
    },
    {
        id: 2,
        author: 'User2',
        text: 'Another interesting comment here.',
    },
    // Add more fake comments...
];

const CommentModal = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg p-6 shadow-lg"
                >
                    <Dialog.Title className="text-lg font-bold mb-4">Comments</Dialog.Title>
                    <div className="space-y-4">
                        {commentsData.map((comment) => (
                            <div key={comment.id} className="border p-3 rounded-lg">
                                <p className="text-gray-600 font-semibold">{comment.author}</p>
                                <p className="text-gray-800">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="mt-4 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-lg"
                    >
                        Close
                    </button>
                </motion.div>
            </div>
        </Dialog>
    );
};

export default CommentModal;
