import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import ApplicationTable from '../../../components/table/ApplicationTable';
import { Tab } from '@headlessui/react';
const ManageApplications = () => {

    const axios = useAxiosSecure();

    const [applications, setApplications] = useState([]);

    console.log(applications)



    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setLoading(true);
        axios.get('/application/get')
            .then(res => {
                setApplications(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleApprove = (id) => {
        toast.promise(axios.put(`/application/status/${id}`, { status: 'approved', userRole: 'restaurant' },), {
            error: 'Error while approving application',
            success: 'Application approved successfully',
            pending: 'Approving application....',

        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }


    if (loading) return (<div>Loading...</div>)
    return (
        <>

            <div>
                <div className="w-full my-10">
                    <h1 className='text-4xl font-bold text-center'>Welcome to Application Management System</h1>
                </div>

                <Tab.Group>
                    <div className="flex justify-center my-8">
                        <Tab.List className={'mx-auto'}>
                            <Tab
                                as='button'
                                className={({ selected }) => `${selected ? 'text-white bg-primary  ' : ''} outline-none px-3 py-1 rounded-xl`}>
                                Pending
                            </Tab>
                            <Tab as='button' className={({ selected }) => `${selected ? 'text-white bg-primary  ' : ''} outline-none px-3 py-1 rounded-xl`}>Approved</Tab>
                        </Tab.List>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <ApplicationTable applications={applications.filter(application => application.status === 'pending')} handleApprove={handleApprove} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <ApplicationTable applications={applications.filter(application => application.status === 'approved')} handleApprove={handleApprove} />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
};

export default ManageApplications;