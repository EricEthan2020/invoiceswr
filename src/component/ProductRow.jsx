import React from 'react'
import toast from 'react-hot-toast';
import { BiMinus } from 'react-icons/bi';
import { HiMiniArchiveBox, HiMiniPencilSquare } from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import { useSWRConfig } from 'swr';

const ProductRow = ({ product: { id, product_name, created_at, price } }) => {
  const { mutate } = useSWRConfig();
  const handleDelete = async () => {
    await fetch(import.meta.env.VITE_BASE_URL + `/products/${id}`, {
      method: "DELETE",
    })
    mutate(import.meta.env.VITE_BASE_URL + `/products`)
  toast.error("ဖျက်ပြီးပါပြီ။");
  }
  const date = new Date(created_at);
  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })
  const currentTime = date.toLocaleTimeString("en-GB", {
    minute: "2-digit",
    hour12: true,
    hour: "2-digit",
    second: "2-digit"
  })
  return (
      <tr className="bg-white odd:bg-gray-200 even:bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <td scope="row" className="px-4 py-3 font-bold text-gray-900 bg-gradient-to-r to-gray-500 whitespace-nowrap dark:text-white">{id}</td>
        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {product_name}
        </th>
        <td className="px-4 py-3">
          {price}
        </td>
        <td className="px-4 py-3">
          <p>{currentDate}</p>
          <p>{currentTime}</p>
        </td>
        <td className="px-3 flex gap-2 py-4 justify-center items-center">
          <Link to={`/product/edit/${id}`} className=' border py-2 px-3 rounded-lg bg-green-500 font-bold text-white'><HiMiniPencilSquare /></Link>
          <button className=' py-2 px-3 bg-red-400 font-bold rounded-lg text-white' onClick={handleDelete}><HiMiniArchiveBox /></button>
        </td>
      </tr>
  )
}

export default ProductRow