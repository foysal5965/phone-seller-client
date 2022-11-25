import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AllUsersCard from './AllUsersCard';

const AllUsers = () => {
    const{data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const allusers = await fetch('http://localhost:5000/users')
            const data= await allusers.json();
            return data
        }
    })
    const handleDeleteUser= id=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('User deleted successfully')
            refetch()
        })
    }
    return (
        <div>
            <h2>All Active User</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map((user,i)=> <AllUsersCard
    key={user._id}
    user={user}
    i={i}
    handleDeleteUser={handleDeleteUser}
    ></AllUsersCard>)
   }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;