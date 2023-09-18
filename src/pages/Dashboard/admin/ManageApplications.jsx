import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import ApplicationTable from '../../../components/table/ApplicationTable';
import { Tab } from '@headlessui/react';
import { useTitle } from '../../../hooks/useTitle';
import useUserSecure from '../../../hooks/useUserSecure';
import { Helmet } from 'react-helmet-async';

const ManageApplications = () => {
    useTitle('Manage Applications');
    const axios = useAxiosSecure();

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user] = useUserSecure()

    useEffect(() => {
        setLoading(true);
        axios
            .get('/application/get')
            .then((res) => {
                setApplications(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleApprove = (id) => {
        toast
            .promise(
                axios.put(`/application/status/${id}`, { status: 'approved', userRole: 'restaurant' }),
                {
                    error: 'Error while approving application',
                    success: 'Application approved successfully',
                    pending: 'Approving application....',
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const tabs = [
        { name: 'Pending', filter: (application) => application.status === 'pending', first: true },
        { name: 'Approved', filter: (application) => application.status === 'approved' },
        { name: 'Rejected', filter: (application) => application.status === 'rejected' },
        { name: 'All', filter: () => true, last: true },
    ];

    if (loading) return <div>Loading...</div>;
    return (
        <>
        <Helmet>
        <title>Hungry Bunny || admin || manage application</title>
      </Helmet>
            <div>
                <div className="w-full my-10">
                    <h1 className="text-4xl font-bold text-center">Welcome to Application Management System</h1>
                </div>

                <Tab.Group>
                    <div className="flex justify-center my-8">
                        <Tab.List className={'mx-auto'}>
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab.name}
                                    as="button"
                                    className={({ selected }) =>
                                        `${selected ? `text-white bg-primary border-y  border-primary ` : 'border border-primary'} outline-none px-3 py-1  `
                                    }
                                >
                                    {tab.name}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                    <Tab.Panels>
                        {tabs.map((tab) => (
                            <Tab.Panel key={tab.name}>
                                <ApplicationTable applications={applications.filter(tab.filter)} handleApprove={handleApprove} />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
};

export default ManageApplications;