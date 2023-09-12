import React from 'react';

const ApplicationTable = ({ applications = [], handleApprove }) => {
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
                            {application.userEmail}
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">Status</span>
                            {application.status}
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
