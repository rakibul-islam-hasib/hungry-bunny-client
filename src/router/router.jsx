import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element : <About />
            }
        ]
    }
])