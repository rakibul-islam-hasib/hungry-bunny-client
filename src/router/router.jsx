import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CommunityLayout from "../layout/CommunityLayout";
import Community from "../pages/community/Community";
import Error404 from "../layout/Error404";
import Restaurant from "../pages/Restaurant/Restaurant";
import Menu from "../pages/Menu/Menu";
import Faq from "../pages/faq/Faq";
import Temp from "../pages/temp/Temp";
import Blog from "../pages/blog/Blog";
import DashboardLayout from "../layout/DashboardLayout";

import UserWelcome from "../pages/dashboard/user/UserWelcome";
// import MultiStepForm from "../pages/auth/MultiStepForm";
import UserProfile from "../pages/dashboard/user/UserProfile";
import RestaurantDetails from "../pages/Restaurant/RestaurantDetails";
import RestaurantAdmin from "../pages/dashboard/user/RestaurantAdmin/RestaurantAdmin";
import Register from "../pages/auth/Register";
import OwnerProfile from "../pages/dashboard/Owner/OwnerProfile";
import OwnerWelcome from "../pages/dashboard/Owner/OwnerWelcome";
import OwnerDashLayout from "../layout/OwnerDashLayout";
import UserAddress from "../pages/dashboard/Owner/UserAddress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants",
        element: <Restaurant />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails></RestaurantDetails>,
        loader: ({ params }) => fetch(`https://hungry-bunny.vercel.app/restaurant/${params.id}`)
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/temp",
        element: <Temp />,
      },
    ],
  },
  {
    path: "/community",
    element: <CommunityLayout />,
    children: [
      {
        index: true,
        element: <Community />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <UserWelcome />,
      },
      {
        path:'admin-dashboard'
      }
      ,
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "restaurant-cp",
        element: <RestaurantAdmin />,
      }
    ],
  },

  {
    path: '/dashboard',
    element: <OwnerDashLayout />,
    children: [
      {
        index: true,
        element: <OwnerWelcome />
      },
      {
        path: 'owner-profile',
        element: <OwnerProfile />
      },
      {
        path: 'address',
        element: <UserAddress />
      },
    ]
  }
]);
