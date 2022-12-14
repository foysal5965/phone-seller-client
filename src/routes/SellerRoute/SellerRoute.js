import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../components/hooks/useSeller/useSeller';
import { AuthContext } from '../../Context/AuthProvider';
import DislplayLoading from '../../Shared/DisplayLoading/DislplayLoading';

const SellerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isSeller,isSellerLoading]= useSeller(user?.email)
    const location= useLocation()
   if(loading ||isSellerLoading){
    return <DislplayLoading></DislplayLoading>
   }
   if(user && isSeller){
    return children
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default SellerRoute;