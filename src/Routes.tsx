import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Article from "./pages/Article";

import Layout from "./components/Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/tools",
                element: <About />
            },
            {
                path: "/:course",
                element: <Course />
            },
            {
                path: "/:course/:module/:article",
                element: <Article />
            }
        ]
    }
]);
