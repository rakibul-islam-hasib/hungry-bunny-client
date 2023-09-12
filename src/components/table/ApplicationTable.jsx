import React from 'react';
import moment from 'moment';
import en from 'javascript-time-ago/locale/en';
import TimeAgo from 'javascript-time-ago';

const ApplicationTable = ({ applications = [], handleApprove }) => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US');

    if (applications.length === 0) return <div>No applications found</div>


    return (
        <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                    <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                    <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
                    <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Status
                    </th>
                    <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                    <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody className="block md:table-row-group">
                {
                    applications.map((application, index) => <tr key={application._id} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                                Name
                            </span>
                            {application.restaurant_name}
                        </td>

                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                                Email
                            </span>
                            {
                                moment(application.applicationDate || new Date()).format('DD/MM/YYYY')

                            }
                            <span className='mx-2'>/</span>
                            {
                                timeAgo.format(new Date(application.applicationDate), 'twitter')
                            }
                            <span className='ml-2'>ago</span>
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">Status</span>
                            <span
                                className={`${application.status === 'pending' && 'text-red-500 border-2 border-red-500'} 
                                ${application.status === 'approved' && 'text-green-500 border-2 border-green-500'}
                                pt-1 px-2 rounded-lg uppercase cursor-pointer  font-bold`}>{application.status}</span>
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                            <button
                                onClick={() => handleApprove(application._id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Approve</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    );
};

export default ApplicationTable;
