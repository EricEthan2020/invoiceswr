import React, { useState } from 'react'
import Container from './Container'
import BreadCrumb from './BreadCrumb'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ring2 } from 'ldrs'
import toast from 'react-hot-toast'
import useSWR from 'swr'
ring2.register();

const fetcher = (url) => fetch(url).then(res => res.json());
const ProductEditcard = () => {

  const { id } = useParams();
  const { data, isLoading } = useSWR(import.meta.env.VITE_BASE_URL + "/products/"+id, fetcher);
  const [sending, setSending] = useState(false);
  const { register,
    handleSubmit } = useForm();

    const navigate = useNavigate();
  const handleCreateProduct = async (data) => {
    setSending(true);
    data.created_at = new Date().toISOString();
    await fetch(import.meta.env.VITE_BASE_URL + "/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          product_name:data.product_name,
          price:data.price,
          created_at: new Date().toISOString(),
        }
      ),
    });
    setSending(false);
    toast.success("Product Edit successfully");
    if(data.back_to_product_list){
      navigate("/products");
    }
  };
  return (
    <div className=' bg-stone-200 p-5 rounded-lg w-full md:w-2/3'>
      <h1 className=' text-3xl font-bold mb-3'>Create New Product</h1>
      <p className=' mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corporis?</p>

      {
        isLoading ? <h1>Loading</h1> :
          <form onSubmit={handleSubmit(handleCreateProduct)}>
            <div className=' mb-5'>
              <label htmlFor="Product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
              <input {...register("product_name")} defaultValue={data?.product_name} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg.apple" required />
            </div>
            <div className=' mb-5'>
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input {...register("price")} min={1} type="number" defaultValue={data?.price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg.5000" required />
              <div className=" mt-4">
                <div className=' flex gap-4'>
                  <input {...register("all_correct")} type="checkbox" />
                  <span>Make all complete fill?</span>
                </div>
                  <div className=' flex gap-4'>
                    <label htmlFor="back_to_product_list"></label>
                  <input {...register("back_to_product_list")} checked type="checkbox" id="back_to_product_list" />
                  <span>Return to product page?</span>
                </div>
                
                
              </div>
            </div>
            <Link to={'/products'} className=' py-2.5 px-5 text-sm text-red-600 border-red-500 font-bold border hover:text-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg'>Cancel</Link>
            <button type="submit"
              className=' inline-flex gap-3 py-2.5 px-5 text-sm ml-5 text-blue-600 border-blue-500 font-bold border hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg'>
              <span>Save</span>
              {sending && (

                <l-ring-2
                  size="20"
                  stroke="5"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="black"
                ></l-ring-2>)}
            </button>
          </form>
      }

    </div>
  )
}

export default ProductEditcard