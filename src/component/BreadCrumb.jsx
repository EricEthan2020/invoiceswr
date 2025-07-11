import React from 'react'
import { HiChevronRight, HiMiniHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ currentPageTitle ,links}) => {
  return (
    <div className=' w-full flex gap-3 mb-5'>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to={"/"} className="inline-flex gap-2 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <HiMiniHome />
              မူလ
            </Link>
          </li>
          {links.length > 0 &&
            links.map((link, index) => (
              <li key={index} aria-current="page">
                <Link to={link.path} className="flex items-center">
                  <HiChevronRight />
                  {link.title}
                </Link>
              </li>
            ))
          }
          <li aria-current="page">
            <div className="flex font-bold items-center">
              <HiChevronRight />
              <span className="ms-1 text-md font-bold text-blue-500 md:ms-2 dark:text-gray-400 ">{currentPageTitle}</span>
            </div>
          </li>
        </ol>
      </nav>

    </div>
  )
}

export default BreadCrumb