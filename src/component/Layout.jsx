import React from 'react'
import { Outlet } from 'react-router-dom'
import Heading from './Headers'
import Headers from './Headers'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <main className=' lg:flex lg:flex-col p-5 lg:p-5 max-h-screen'>
        <Headers />
        <Outlet/>
        <Toaster position='top-right'/>
    </main>
  )
}

export default Layout