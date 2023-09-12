import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { fetchdata } from '../../api';
import { fakeauth } from '../requireauth';
export async function loader(){
    await fakeauth()
    return fetchdata()
    
}

export default function Dashboard() {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>Dashboard</div>
  )
}
