import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CommunityLayout from "../layout/CommunityLayout";
import Community from "../pages/community/Community";
import Register from "../pages/auth/Register";
import Error404 from "../layout/Error404";
import Restaurant from "../pages/Restaurant/Restaurant";
import Menu from "../pages/Menu/Menu";
import Faq from "../pages/faq/Faq";
import Temp from "../pages/temp/Temp";
import Blog from "../pages/blog/Blog";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../layout/dashboard/userDashboard/UserProfile";

import UserWelcome from "../pages/dashboard/user/UserWelcome";
import MultiStepForm from "../pages/auth/MultiStepForm";

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
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants',
        element: <Restaurant />
      },
      {
        path: "/register",
        element: <MultiStepForm />,
      },
      {
        path: '/restaurant',
        element: <Restaurant />
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
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/temp',
        element: <Temp />
      }
    ],
  },
  {
    path: '/community',
    element: <CommunityLayout />,
    children: [
      {
        index: true,
        element: <Community />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <UserWelcome />
      },
      {
        path: 'user-profile',
        element: <UserProfile />
      }
    ]
  }
]);
