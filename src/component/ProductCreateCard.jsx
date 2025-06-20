import React from 'react'
import Container from './Container'
import BreadCrumb from './BreadCrumb'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const ProductCreateCard = () => {
  const { register,
    handleSubmit,formState:{
      errors
    } } = useForm();
  const handleCreateProduct = (data) => {
    console.log(data);
  };
  return (
    <div className=' bg-stone-200 p-5 rounded-lg w-full md:w-2/3'>
      <h1 className=' text-3xl font-bold mb-3'>Create New Product</h1>
      <p className=' mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corporis?</p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className=' mb-5'>
          <label htmlFor="Product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
          <input {...register("product_name")} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg.apple" required />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
          <input {...register("price")} min={1} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg.5000" required />
          <div className="flex items-center mt-4">
            <input {...register("all_correct")} required id="all-correct" value="" type="checkbox" className="w-4 h-4 text-blue-600" />
            <label htmlFor="all_correct" className=' ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Make sure all fields are filled
            </label>
          </div>

        </div>
        <Link to={'/products'} className=' py-2.5 px-5 text-sm text-red-600 border-red-500 font-bold border hover:text-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg'>Cancel</Link>
        <button type="submit" className=' py-2.5 px-5 text-sm ml-5 text-blue-600 border-blue-500 font-bold border hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg'>Submit</button>
      </form>

    </div>
  )
}

export default ProductCreateCard