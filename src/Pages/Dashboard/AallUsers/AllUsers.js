import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import DislplayLoading from '../../../Shared/DisplayLoading/DislplayLoading';
import AllUsersCard from './AllUsersCard';

const AllUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        }
    });
   console.log(users)
    const handleDeleteUser= id=>{
       
        fetch(`https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/users/${id}`,{
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
            <h2 className='text-xl text-center font-semibold'>All Active User</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
   {
    users?.map((user,i)=> <AllUsersCard
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