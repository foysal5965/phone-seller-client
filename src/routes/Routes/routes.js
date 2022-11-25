import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoradLayout/DashBoardLayout";
import Main from "../../Layout/Main/Main";
import CategoryPhone from "../../Pages/CategoryPhone/CategoryPhone/CategoryPhone";

import MyOrders from "../../Pages/Dashboard/Myorders/MyOrders";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/login/Login";
import Signup from "../../Pages/Signup/Signup";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/category')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/category')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/category/:id',
                element:<PrivetRoute><CategoryPhone></CategoryPhone></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]

    },

    {
        path:'/dashboard',
        element:<PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
           {
            path:'/dashboard',
            element:<MyOrders></MyOrders>
           }
        ]
    }
])
export default router