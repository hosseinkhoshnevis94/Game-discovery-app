import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import HomePage from "./assets/pages/HomePage";
import GamePage from "./assets/pages/GamePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { index: true, element: <HomePage /> },
        {   path:'/games/:id',element:<GamePage/> },
    ],

  }
]);
export default router