import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import HomePage from "./assets/pages/HomePage";
import GamePage from "./assets/pages/GamePage";
import ErrorPage from "./assets/pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
        { index: true, element: <HomePage /> },
        {   path:'/games/:slug',element:<GamePage/> },
    ],

  }
]);
export default router