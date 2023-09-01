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

import UserWelcome from "../pages/dashboard/WellComeDashboard/UserWelcome";
// import MultiStepForm from "../pages/auth/MultiStepForm";
// import UserProfile from "../pages/dashboard/user/UserProfile";
import RestaurantDetails from "../pages/Restaurant/RestaurantDetails";
import RestaurantAdmin from "../pages/dashboard/RestaurantAdmin/RestaurantAdmin";
import Register from "../pages/auth/Register";
import BlogDetails from "../pages/blog/BlogDetails";
// import UserAddress from "../pages/dashboard/Owner/UserAddress";
import Profile from "../pages/dashboard/NormalUser/Profile";
import MultiStepForm from "../pages/auth/MultiStepForm";
import TeamInfo from "./TeamInfo";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import UserProfile from "../pages/dashboard/user/UserProfile";
import UserAddress from "../pages/dashboard/user/UserAddress";

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
        element: <MultiStepForm />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/restaurant/${params.id}`)
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/blogs',
        element: <Blog />
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: "/temp",
        element: <Temp />,
      },
      {
        path: '/team-info',
        element: <TeamInfo />
      }
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
      /*------------------------------------------------------------
      -----------------WebSite Admin  Dashboard-------------------
      -------------------------------------------------------------*/
      {
        path: 'admin-dashboard',
        element: <AdminDashboard />
      },
      {
        path: 'manage-users',
        element: <ManageUsers />
      },


      /*------------------------------------------------------------
      -----------------Restaurant Owner Dashboard-------------------
      -------------------------------------------------------------*/
      {
        path: "restaurant-cp",
        element: <RestaurantAdmin />,
      },


      /*------------------------------------------------------------
      ---------------------Normal User Dashboard--------------------
      -------------------------------------------------------------*/
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: 'address',
        element: <UserAddress />
      },

    ],
  },



]);