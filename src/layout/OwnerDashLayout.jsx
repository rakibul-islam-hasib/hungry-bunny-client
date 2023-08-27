import React, { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { BsFillPostcardFill } from 'react-icons/bs';
import { TbBrandAppleArcade } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';

const userNavItems = [
    { to: "/dashboard/owner-profile", icon: <CgProfile className="text-2xl" />, label: "Manage Profile" },
    { to: "/dashboard/address", icon: <FaUsers className="text-2xl" />, label: "Address" },
    { to: "/dashboard/manage-class", icon: <BsFillPostcardFill className="text-2xl" />, label: "Payment Method" },
    { to: "/dashboard/manage-applications", icon: <TbBrandAppleArcade className="text-2xl" />, label: "Security" },
];

const OwnerDashLayout = () => {
    const [open, setOpen] = useState(true);


    const role = 'owner';
    return (
        <div className="flex bg-[#f1ecea]">
            <div
                className={`${open ? "w-72 overflow-y-auto" : "w-[90px] overflow-auto"
            }  h-screen p-5 hidden md:block pt-8 relative duration-300`}
            >
                <div className="flex gap-x-4 items-center">
                    <img
                        src='https://i.ibb.co/26dQJcm/musical-note.png'
                        onClick={() => setOpen(!open)}
                        className={`cursor-pointer h-[40px] duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && "scale-0"
                            }`}
                        onClick={() => setOpen(!open)}
                    >
                        HUNGRY BUNNY
                    </h1>
                </div>
                {/* Nav links  */}
                {
                    role === 'owner' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {role === 'owner' && userNavItems.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                        `flex ${isActive ? "bg-primary text-white " : "text-[#413F44]"
                                        }  duration-150 rounded-md p-2 cursor-pointer hover:bg-primary  hover:text-white  font-bold text-sm items-center gap-x-4  `
                                    }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                <ul className="pt-6">
                    <p className={`ml-3 uppercase text-light-gray-4 ${!open && "hidden"}`}><small>Useful Links</small></p>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                }  duration-150 rounded-md inline-flex p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                            }
                        >
                            <BiLogInCircle className='text-2xl' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Logout
                            </span>
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="h-screen overflow-y-auto px-8 flex-1">
                {/* <NavBar /> */}
                <ScrollRestoration />
                <Outlet />

            </div>
        </div>
    );
};

export default OwnerDashLayout;