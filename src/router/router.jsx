import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CommunityLayout from "../layout/CommunityLayout";
import Community from "../pages/community/Community";
import Error404 from "../pages/errors/Error404";
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
import MultiStepForm from "../pages/auth/MultiStepForm";
import TeamInfo from "../pages/Team/TeamInfo";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
// import UserProfile from "../pages/dashboard/user/UserProfile";
import UserAddress from "../pages/dashboard/user/UserAddress";
import UserPayment from "../pages/dashboard/user/UserPayment";
import UserSecurity from "../pages/dashboard/user/UserSecurity";

import AdminOrder from "../pages/Dashboard/RestaurantAdmin/AdminOrder/AdminOrder";
import AdminMenu from "../pages/Dashboard/RestaurantAdmin/AdminMenu/AdminMenu";
import AdminCustomers from "../pages/Dashboard/RestaurantAdmin/AdminCustomers/AdminCustomers";
import NormalProfile from "../pages/Dashboard/user/NormalProfile";
import UserProfile from "../pages/Dashboard/user/UserProfile";
import AdminAddItems from "../pages/Dashboard/RestaurantAdmin/AdminAddItems";
import ForRestaurant from "../pages/Dashboard/applications/ForRestaurant";
import PrivateRoute from "./PrivateRoute";
import ManageApplications from "../pages/Dashboard/admin/ManageApplications";

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
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
        loader: ({ params }) =>
          fetch(`https://hungry-bunny.vercel.app/restaurant/${params.id}`),
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
        loader: ({ params }) => fetch(`https://hungry-bunny.vercel.app/blogs/${params.id}`)
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
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },

      /*------------------------------------------------------------
      -----------------Restaurant Owner Dashboard-------------------
      -------------------------------------------------------------*/
      {
        path: "restaurant-cp",
        element: <RestaurantAdmin />,
      },
      {
        path: "/dashboard/restaurant-orders",
        element: <AdminOrder />,
      },
      {
        path: "/dashboard/restaurant-add-items",
        element: <AdminAddItems />,
      },
      {
        path: "/dashboard/restaurant-menu",
        element: <AdminMenu />,
      },
      {
        path: "/dashboard/restaurant-customers",
        element: <AdminCustomers />,
      },

      /*------------------------------------------------------------
---------------------Normal User Dashboard--------------------
-------------------------------------------------------------*/
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "address",
        element: <UserAddress />,
      },
      {
        path: 'user-payment',
        element: <UserPayment />
      },
      {
        path: 'user-security',
        element: <UserSecurity />
      },
      {
        path: 'profile',
        element: <NormalProfile />
      },
      {
        path: '/dashboard/application/for-restaurant',
        element: <PrivateRoute><ForRestaurant /></PrivateRoute>,
      },
      {
        path: 'manage-applications',
        element: <PrivateRoute><ManageApplications /></PrivateRoute>,
      }

    ],
  },
]);
