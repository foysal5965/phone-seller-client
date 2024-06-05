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
import AllUsers from '../../Pages/Dashboard/AallUsers/AllUsers'
import AdminRoute from "../AdminRoute/AdminRoute";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Blog from "../../Pages/Blogs/Blog";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/category')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/category')
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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/category/:id',
                element:<PrivetRoute><CategoryPhone></CategoryPhone></PrivetRoute>,
                loader:({params})=>fetch(`https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/category/${params.id}`)
            },
        ]

    },

    {
        path:'/dashboard',
        element:<PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
           {
            path:'/dashboard/my-orders',
            element:<MyOrders></MyOrders>
           },
           {
            path:'/dashboard/allUser',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
           },
           {
            path:'/dashboard/allsellers',
            element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
           },
           {
            path:'/dashboard/addproducts',
            element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
           },
           {
            path:'/dashboard/myproducts',
            element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
           },
           {
            path:'/dashboard/payment/:id',
            element:<Payment></Payment>,
            loader:({params})=>fetch(`https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/orders/payment/${params.id}`)
           },
        ]
    }
])
export default router