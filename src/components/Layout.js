import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='linkcontainer'>
        <h1>Testing</h1>
        <ol className='linklist'>
            <li><NavLink className={({isActive})=> isActive? "active": null} end to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "active": null} to="/about">About</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "active": null} to="/contact">Contact</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "active": null} to="/host">Host</NavLink></li>
        </ol>
    </div>
    <Outlet />
    </>
  )
}
