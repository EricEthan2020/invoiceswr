import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
   <Link to={url} className=' flex flex-col rounded-lg text-center items-center bg-blue-600 text-3xl text-white font-bold p-5'>
   {icon}
   <br />
   {name}
   </Link>
  )
}

export default ModuleBtn