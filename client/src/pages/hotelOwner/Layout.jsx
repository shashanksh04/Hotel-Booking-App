import React from 'react'
import NavBar from '../../components/hotelOwner/NavBar'
import SideBar from '../../components/hotelOwner/SideBar'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <NavBar />
      <div className='flex h-full'>
        <SideBar />
        <div className='flex-1 p-4 md:px-10 pt-10 h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout