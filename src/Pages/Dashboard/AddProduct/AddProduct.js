import React, { useContext } from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { user } = useContext(AuthContext)
  const imagebbKey = process.env.REACT_APP_imagebb
const navigate= useNavigate()
  // console.log(imagebbKey)
  const addProduct = data => {
    console.log(data.image[0])
    const image = data.image[0];
    // console.log(image)
    // console.log(data)
    const formData = new FormData()
    formData.append("image", image);
    // console.log(formData)
    fetch(`https://api.imgbb.com/1/upload?key=${imagebbKey}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        if (imageData.success) {
          const product = {
            seler_name: data.seller,
            email: data.email,
            name: data.name,
            condition: data.select,
            phone: data.phone,
            location: data.location,
            category_id: data.selectCategory,
            original_price: data.originalPrice,
            resel_price: data.newPrice,
            yearsOf_use: data.yearsOfpurchase,
            img:imageData.data.url
          }
          fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                'content-type':'application/json',
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(result=>{
          console.log(result)
            toast.success('product added ')
            navigate('/dashboard/myproducts')
        })
        }
      })
      .catch(er => console.log(er))


  }
  return (
    <div className='flex  items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Add A New Product</h1>
          <p className='text-sm text-gray-400'>Fill Up The Form</p>
        </div>
        <form
          onSubmit={handleSubmit(addProduct)}
          noValidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Seler
              </label>
              <input
                {...register("seller")}
                type='text'
                name='sellername'
                readOnly
                defaultValue={user?.displayName}
                id='sellerName'
                required
                placeholder='Enter Product Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email
              </label>
              <input
                {...register("email")}
                type='Email'
                readOnly
                defaultValue={user.email}
                name='email'
                id=''
                required
                placeholder='Enter Product Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Products Name
              </label>
              <input
                {...register("name")}
                type='text'

                name='name'
                id=''
                required
                placeholder='Enter Product Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            <label htmlFor='' className='block mb-2 text-sm'>
              Products Condition
            </label>
            <select name='select' {...register("select")} className="select select-bordered w-full max-w-xs">
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>

            <div>
              <label htmlFor='' className='block mb-2 text-sm'>
                Mobile N0
              </label>
              <input
                {...register("phone")}
                required
                type=''
                name='phone'
                id=''
                placeholder='Enter Your Phone Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Location
                </label>
              </div>
              <input
                {...register("location")}
                type=''
                name='location'
                id=''
                required
                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='' className='text-sm'>
                  Products Category
                </label>
              </div>
              <select name='selectCategory' {...register("selectCategory")} className="select select-bordered w-full max-w-xs">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Original Price
                </label>
              </div>
              <input
                {...register("originalPrice")}
                type=''
                name='originalPrice'
                id=''
                required
                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  New Price
                </label>
              </div>
              <input
                {...register("newPrice")}
                type=''
                name='newPrice'
                id=''
                required
                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Years of Purchase
                </label>
              </div>
              <input
                {...register("yearsOfpurchase", { required: true })}
                type=''
                name='yearsOfpurchase'
                id=''

                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Upload Product Picture
                </label>
              </div>
              <input type='file' {...register("image", { required: true })} className="input input-bordered w-full max-w-xs px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900" placeholder="" />
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <PrimaryButton
                type='submit'
                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
              >
                Add Now
              </PrimaryButton>
            </div>
          </div>
        </form>



      </div>
    </div>
  );
};

export default AddProduct;