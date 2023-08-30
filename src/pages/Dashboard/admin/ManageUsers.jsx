
import useAllUsers from '../../../hooks/useAllUsers';
import ManageUsersTable from './ManageUsersTable';
const ManageUsers = () => {

    const [users]=useAllUsers()
    return (
        <div className=''>
            <h1>Total User: {users.length}</h1>
            <div className='flex justify-between my-5 mb-8'>
                <h1>Manage Users</h1>

                <div className=''>
                    <input
                        type="text"
                        placeholder="Search User here"
                        className="border border-red-400 border-blue-700 focus:border-pink-400 focus:outline-none px-20  py-2 rounded-full" />
                        <button className='absolute right-14 mt-2'>Search  </button>
                </div>

            </div>
            <ul className='flex items-center  justify-between py-4 font-bold w-full'>
                <li className='w-2/5'>User Info</li>
                <li className='w-1/5'>User Role</li>
                <li className='w-1/5'>Action</li>
            </ul>

            <div className="list-disc list-inside text-sm">
                {users.map((userData, index) => <ManageUsersTable key={index} userData={userData} />)}
            </div>
        </div>
    );
};

export default ManageUsers;