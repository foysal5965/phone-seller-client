import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../components/hooks/useAdmin/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]= useAdmin(user?.email)
    const location= useLocation()
   if(loading ||isAdminLoading){
    return <h3>loading</h3>
   }
   if(user && isAdmin){
    return children
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;