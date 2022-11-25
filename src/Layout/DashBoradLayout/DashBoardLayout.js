import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const DashBoardLayout = () => {

    return (
        <>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
               

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoardLayout;