import pizza from '../assets/icons/hero/icons8-pizza.svg';
import bbq from '../assets/icons/hero/icons8-bbq.svg';
import burger from '../assets/icons/hero/icons8-burger.svg';
import vegan from '../assets/icons/hero/icons8-vegan.svg';
import sushi from '../assets/icons/hero/icons8-sushi.svg';
import { CgProfile } from 'react-icons/cg';
import { FaUserEdit, FaUsers } from 'react-icons/fa';
import { BsFillPostcardFill } from 'react-icons/bs';
import { TbBrandAppleArcade } from 'react-icons/tb';
export const heroCategory = [
    {
        id: 1,
        name: 'Pizza',
        image: pizza,
    },
    {
        id: 2,
        name: 'BBQ',
        image: bbq,
    },
    {
        id: 3,
        name: 'Burger',
        image: burger,
    },
    {
        id: 4,
        name: 'Vegan',
        image: vegan,
    },
    {
        id: 5,
        name: 'Sushi',
        image: sushi,
    },
]
export const locationOptions = [
    { value: '', label: 'Select' },
    { value: 'Bagerhat', label: 'Bagerhat' },
    { value: 'Bandarban', label: 'Bandarban' },
    { value: 'Barguna', label: 'Barguna' },
    { value: 'Barishal', label: 'Barishal' },
    { value: 'Bhola', label: 'Bhola' },
    { value: 'Bogra', label: 'Bogra' },
    { value: 'Brahmanbaria', label: 'Brahmanbaria' },
    { value: 'Chandpur', label: 'Chandpur' },
    { value: 'Chapainawabganj', label: 'Chapainawabganj' },
    { value: 'Chattogram', label: 'Chattogram' },
    { value: 'Chuadanga', label: 'Chuadanga' },
    { value: "Cox's Bazar", label: "Cox's Bazar" },
    { value: 'Cumilla', label: 'Cumilla' },
    { value: 'Dhaka', label: 'Dhaka' },
    { value: 'Dinajpur', label: 'Dinajpur' },
    { value: 'Faridpur', label: 'Faridpur' },
    { value: 'Feni', label: 'Feni' },
    { value: 'Gaibandha', label: 'Gaibandha' },
    { value: 'Gazipur', label: 'Gazipur' },
    { value: 'Gopalganj', label: 'Gopalganj' },
    { value: 'Habiganj', label: 'Habiganj' },
    { value: 'Jamalpur', label: 'Jamalpur' },
    { value: 'Jashore', label: 'Jashore' },
    { value: 'Jhalokathi', label: 'Jhalokathi' },
    { value: 'Jhenaidah', label: 'Jhenaidah' },
    { value: 'Joypurhat', label: 'Joypurhat' },
    { value: 'Khagrachari', label: 'Khagrachari' },
    { value: 'Khulna', label: 'Khulna' },
    { value: 'Kishoreganj', label: 'Kishoreganj' },
    { value: 'Kurigram', label: 'Kurigram' },
    { value: 'Kushtia', label: 'Kushtia' },
    { value: 'Lakshmipur', label: 'Lakshmipur' },
    { value: 'Lalmonirhat', label: 'Lalmonirhat' },
    { value: 'Madaripur', label: 'Madaripur' },
    { value: 'Magura', label: 'Magura' },
    { value: 'Manikganj', label: 'Manikganj' },
    { value: 'Meherpur', label: 'Meherpur' },
    { value: 'Moulvibazar', label: 'Moulvibazar' },
    { value: 'Munshiganj', label: 'Munshiganj' },
    { value: 'Mymensingh', label: 'Mymensingh' },
    { value: 'Naogaon', label: 'Naogaon' },
    { value: 'Narail', label: 'Narail' },
    { value: 'Narayanganj', label: 'Narayanganj' },
    { value: 'Narsingdi', label: 'Narsingdi' },
    { value: 'Natore', label: 'Natore' },
    { value: 'Nawabganj', label: 'Nawabganj' },
    { value: 'Netrokona', label: 'Netrokona' },
    { value: 'Nilphamari', label: 'Nilphamari' },
    { value: 'Noakhali', label: 'Noakhali' },
    { value: 'Pabna', label: 'Pabna' },
    { value: 'Panchagarh', label: 'Panchagarh' },
    { value: 'Patuakhali', label: 'Patuakhali' },
    { value: 'Pirojpur', label: 'Pirojpur' },
    { value: 'Rajbari', label: 'Rajbari' },
    { value: 'Rajshahi', label: 'Rajshahi' },
    { value: 'Rangamati', label: 'Rangamati' },
    { value: 'Rangpur', label: 'Rangpur' },
    { value: 'Satkhira', label: 'Satkhira' },
    { value: 'Shariatpur', label: 'Shariatpur' },
    { value: 'Sherpur', label: 'Sherpur' },
    { value: 'Sirajganj', label: 'Sirajganj' },
    { value: 'Sunamganj', label: 'Sunamganj' },
    { value: 'Sylhet', label: 'Sylhet' },
    { value: 'Tangail', label: 'Tangail' },
    { value: 'Thakurgaon', label: 'Thakurgaon' }
];

export const districts = [
    {
        id: 1,
        photo: 'https://i.ibb.co/5j2VFwr/Whats-App-Image-2023-07-16-at-19-42-25.jpg',
        name: 'Pabna'
    },
    {
        id: 2,
        photo: 'https://i.ibb.co/qj7j53t/Downloader-la-64f216032482f.jpg',
        name: 'Dhaka'
    },
    {
        id: 3,
        name: 'Rajshahi',
        photo: 'https://i.ibb.co/gJSbwW1/Downloader-la-64f216032482f.jpg'
    },
    {
        id: 4,
        name: 'Khulna',
        photo: 'https://i.ibb.co/tbwYnr0/Downloader-la-64f217a7436c4.jpg',
    },
    {
        id: 5,
        name: 'Barishal',
        photo: 'https://i.ibb.co/Nj34d78/Downloader-la-64f21931a1b94.jpg',
    },
    {
        id: 6,
        name: 'Barishal',
        photo: 'https://i.ibb.co/Nj34d78/Downloader-la-64f21931a1b94.jpg',
    },
    {
        id: 7,
        name: 'Barishal',
        photo: 'https://i.ibb.co/Nj34d78/Downloader-la-64f21931a1b94.jpg',
    },
    {
        id: 8,
        name: 'Barishal',
        photo: 'https://i.ibb.co/Nj34d78/Downloader-la-64f21931a1b94.jpg',
    },
]

export const adminNavItems = [
    {
        to: "/dashboard/admin-dashboard",
        icon: <CgProfile className="text-2xl" />,
        label: "Dashboard",
    },
    {
        to: "/dashboard/manage-users",
        icon: <FaUsers className="text-2xl" />,
        label: "Manage Users",
    },
    {
        to: "/dashboard/manage-riders",
        icon: <BsFillPostcardFill className="text-2xl" />,
        label: "Manage Riders",
    },
    {
        to: "/dashboard/manage-restaurant",
        icon: <TbBrandAppleArcade className="text-2xl" />,
        label: "Manage Restaurant",
    },
    {
        to: "/dashboard/user-profile",
        icon: <CgProfile className="text-2xl" />,
        label: "Manage Profile",
    },
];

export const userNavItems = [
    {
        to: "/dashboard/profile",
        icon: <CgProfile className="text-2xl" />,
        label: "User Profile",
    },
    {
        to: "/dashboard/user-profile",
        icon: <FaUserEdit className="text-2xl" />,
        label: "Manage Profile",
    },
    {
        to: "/dashboard/address",
        icon: <FaUsers className="text-2xl" />,
        label: "Address",
    },
    {
        to: "/dashboard/user-payment",
        icon: <BsFillPostcardFill className="text-2xl" />,
        label: "Payment Method",
    },
    {
        to: "/dashboard/user-security",
        icon: <TbBrandAppleArcade className="text-2xl" />,
        label: "Security",
    },
];



export  const restaurantNavItems = [
    {
      to: "/dashboard/restaurant-cp",
      icon: <CgProfile className="text-2xl" />,
      label: "Owner Dashboard",
    },
    {
      to: "/dashboard/restaurant-orders",
      icon: <FaUsers className="text-2xl" />,
      label: "Orders",
    },
    {
      to: "/dashboard/restaurant-menu",
      icon: <BsFillPostcardFill className="text-2xl" />,
      label: "Menu",
    },
    {
      to: "/dashboard/restaurant-customers",
      icon: <TbBrandAppleArcade className="text-2xl" />,
      label: "Customers",
    },
    {
      to: "/dashboard/restaurant-add-items",
      icon: <TbBrandAppleArcade className="text-2xl" />,
      label: "Add New Items",
    },
  ];
