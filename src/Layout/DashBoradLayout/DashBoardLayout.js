import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../components/hooks/useAdmin/useAdmin';
import useSeller from '../../components/hooks/useSeller/useSeller';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa";

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const[isSeller]= useSeller(user?.email)
    return (
        <>
            <Navbar></Navbar>
            <div >
                {/* <FaArrowRight htmlFor="dashboard-drawer" className='btn ' /> */}
                <label htmlFor="dashboard-drawer" className="btn w-40 "><FaArrowRight/></label>
                </div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>


                </div>
               
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    
                        {user && <li><Link className='text-xl font-semibold' to='/dashboard'>My Orders</Link></li>}
                        {
                            isAdmin && <>
                            <li><Link className='text-xl font-semibold' to='/dashboard/allUser'>All Users</Link></li>
                             <li><Link className='text-xl font-semibold' to='/dashboard/allsellers'>All Sellers</Link></li>
                            </>
                        }
                        {
                            isSeller && <><li><Link className='text-xl font-semibold' to='/dashboard/addproducts'>Add Products</Link></li>
                            <li><Link className='text-xl font-semibold' to='/dashboard/myproducts'>My Products</Link></li></>
                        }

                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoardLayout;