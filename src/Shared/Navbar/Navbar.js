
import React, { useContext, useState } from 'react';
import { Link, useActionData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { logOut, googleSingin, user } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(res => {

      })
  }
  const handleGoogleSignin = () => {
    googleSingin()
      .then()
      .catch()
  }
  const [nav, setNav ]= useState(true)

    const handleNav =()=>{
        setNav(!nav)
    }
  const menuItem = <>
    <li><Link className='text-white' to='/home'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {user?.uid ?
      <> <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><button onClick={handleLogOut}>Logout</button></li></> :
      <li><Link to='/login'>Login</Link></li>
    }


  </>
  return (


    <div>
      <div className="navbar rounded  hover:text-gray-200 bg-gradient-to-r from-emerald-500 to-lime-500  flex justify-between mt-4">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 text-white bg-gradient-to-r from-emerald-500 to-lime-500">
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Phone Seller</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
        

      </div>
    </div>

    

  );
};

export default Navbar;