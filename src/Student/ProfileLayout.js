import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

function ProfileLayout() {
  return (
    <div style={{height:"calc(100vh - 4rem)"}} className='fixed w-full  top-16 flex'>
      {/* <div className='w-80'> */}
        <SideNav />
      {/* </div> */}
      <div className='flex-1 overflow-y-scroll'>
        <Outlet/>
      </div>
    </div>
  )
}

export default ProfileLayout