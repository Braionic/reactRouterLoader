import React from 'react'
import { Outlet, NavLink, Navigate } from 'react-router-dom'

export default function Host() {
    
  return (
    <>
    <div>
    <ol className='linklist'>
            <li><NavLink end to="/host">Dashboard</NavLink></li>
            <li><NavLink to="/host/data">Data</NavLink></li>
            <li><NavLink to="/host/prices">Prices</NavLink></li>
        </ol>
    </div>
    <Outlet />
    </>
  )
}
