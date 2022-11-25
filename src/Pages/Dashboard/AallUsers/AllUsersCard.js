import React from 'react';

const AllUsersCard = ({user,i,handleDeleteUser}) => {
    return (
        <>
            <tr>
    <th>{i+1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.role}</td>
    <td><button onClick={()=>handleDeleteUser(user._id)}  className='btn btn-sm rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'>Delete</button></td>
  </tr>
        </>
    );
};

export default AllUsersCard;