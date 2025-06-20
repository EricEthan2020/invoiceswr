import React from 'react'
import { Link } from 'react-router-dom'

const VoucherList = () => {
  return (
    <div>
          <div>
                    <div className="flex mb-5 justify-between">
                            <form className="max-w-md">
                                <label forhtml="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">ရှာရန်</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ရှာရန်" required />
                                </div>
                            </form>
                            <Link to={"/sales"} className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-500 text-white font-bold">ရောင်းရန် </Link>
                        </div>
                    <div className="border rounded-lg border-gray-200 p-5">
                        
                        <div className="relative overflow-x-auto mt-3">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">
                                           customer name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Created At :
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td scope="row" className="px-6 py-4 font-bold text-gray-900 bg-gradient-to-r to-gray-500 whitespace-nowrap dark:text-white">1</td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           kyaw
                                        </th>
                                        <td className="px-6 py-4">
                                            kya@gmail.com
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td className="px-6 flex justify-center gap-2 py-4">
                                            <button className=' flex justify-center items-center font-bold'>....</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
                    </div>
                </div>
    </div>
  )
}

export default VoucherList