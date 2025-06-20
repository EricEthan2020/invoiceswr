import React, { useState, useEffect } from 'react';
import Skeleton from "../component/Skeleton";
import { HiMiniArchiveBox } from 'react-icons/hi2';
import useSWR from 'swr';
import ProductEmpty from './ProductEmpty';
import ProductRow from './ProductRow';
import { Link } from 'react-router-dom';

const fetcher = (url) => fetch(url).then(res => res.json());

const ProductList = () => {
    const { data, error, isLoading } = useSWR(import.meta.env.VITE_BASE_URL + "/products", fetcher);

    // For preventing hydration mismatch by waiting for the component to be mounted on the client side
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Set to true after the first render on client side
    }, []);

    if (!isMounted) {
        return null; // or a loading placeholder to prevent SSR mismatch
    }

    if (isLoading) return <Skeleton />;
    console.log(data);

    return (
        <div>
            <div className="flex mb-5 justify-between">
                <form className="max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </div>
                </form>
                <Link to={"/product/create"} className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-500 text-white font-bold text-center items-center flex">Add Product +</Link>
            </div>
            <div className="border rounded-lg border-gray-200 p-5">

                <div className="relative overflow-x-scroll mt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-start  border rounded-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <th scope='col' className='px-3 py-4 text-start'>#</th>
                            <th scope='col' className='px-3 py-4 text-center'>Name</th>
                            <th scope='col' className='px-3 py-4 text-center'>Price</th>
                            <th scope='col' className='px-3 py-4 text-center'>Created_At</th>
                            <th scope='col' className='px-3 py-4 text-center'>Action</th>
                        </thead>
                        <tbody className=' text-start'>
                            {isLoading ? (
                                <Skeleton />
                            ) : (
                                data.length === 0 ? <ProductEmpty /> : data.map((el) => <ProductRow key={el.id} product={el} />)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
