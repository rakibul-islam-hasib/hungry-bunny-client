// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Dialog, Transition } from '@headlessui/react';
// import { MdDriveFileRenameOutline } from 'react-icons/md';

// const UserProfile = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     return (
//         <>
//             <div className="mt-6">
//                 <div className="">
//                     <h1 className='text-2xl'>Photo : </h1>
//                     <img className='h-[200px] w-[200px]' src="https://i.ibb.co/5M0BDy4/No-thing.png" alt="" />
//                     <button
//                         onClick={openModal}
//                         className="px-3 mt-2 -py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//                     >
//                         Change Photo
//                     </button>

//                 </div>
//                 <div className="mt-6">
//                     <h1 className='text-base'>Name : </h1>
//                     <div className="flex items-center gap-3">
//                         <p className='text-2xl'>Hasib Hossain</p>
//                         <button
//                             onClick={openModal}
//                             className="px-1 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//                         >
//                             <MdDriveFileRenameOutline className='text-xl' />
//                         </button>
//                     </div>

//                 </div>
//                 <div className="mt-6">
//                     <h1 className='text-base'>Email : </h1>
//                     <div className="flex items-center gap-3">
//                         <p className='text-2xl'>boraborhasib@gmail.com</p>
//                         <button
//                             onClick={openModal}
//                             className="px-1 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//                         >
//                             <MdDriveFileRenameOutline className='text-xl' />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <h1 className='text-base'>Phone : </h1>
//                     <div className="flex items-center gap-3">
//                         <p className='text-2xl'>1 : 01319373523</p>
//                         <button
//                             onClick={openModal}
//                             className="px-1 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//                         >
//                             <MdDriveFileRenameOutline className='text-xl' />
//                         </button>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <p className='text-2xl'>2 : 01319373523</p>
//                         <button
//                             onClick={openModal}
//                             className="px-1 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//                         >
//                             <MdDriveFileRenameOutline className='text-xl' />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <h1 className='text-base'>Address : </h1>
//                     <p className='text-2xl'>House : 1, Road : 1, Block : A, Mirpur : 1, Dhaka : 1216</p>
//                 </div>
//                 <div className="mt-6">
//                     <h1 className='text-base'> : </h1>

//                 </div>
//             </div>

//             <div className=" flex items-center justify-center">
//                 <Transition.Root show={isOpen} as={React.Fragment}>
//                     <Dialog
//                         as="div"
//                         className="fixed inset-0 z-10 overflow-y-auto"
//                         onClose={closeModal}
//                     >
//                         <div
//                             className="flex items-center justify-center min-h-screen"
//                         >
//                             <Transition.Child
//                                 as={motion.div}
//                                 initial={{ opacity: 0, scale: 0.5 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
//                                 className="bg-white p-8 rounded-lg md:w-[300px] shadow-lg"
//                             >
//                                 {/* Your form components go here */}
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-bold mb-2">
//                                         Profile Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         className="w-full outline-none px-3 py-2 placeholder-gray-400 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 font-bold mb-2">
//                                         Profile Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         className="w-full outline-none px-3 py-2 placeholder-gray-400 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                                     />
//                                 </div>
//                                 {/* ... other form fields ... */}
//                                 <div className="flex justify-end mt-6">
//                                     <button
//                                         onClick={closeModal}
//                                         className="px-4 py-2 mr-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         onClick={closeModal}
//                                         className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//                                     >
//                                         Save
//                                     </button>
//                                 </div>
//                             </Transition.Child>
//                         </div>
//                     </Dialog>
//                 </Transition.Root>
//             </div>
//         </>
//     );
// };

// export default UserProfile;
