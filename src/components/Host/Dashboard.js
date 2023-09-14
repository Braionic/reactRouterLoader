import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { fetchdata } from '../../api';
import { fakeauth } from '../requireauth';

export async function loader({request}){
 
    await fakeauth(request)
    return fetchdata()
    
}

export default function Dashboard() {
    const data = useLoaderData()
    console.log(data)
  return (
    <>
    <div>Dashboard</div>
    <h1>{data}</h1>
    </>
  )
}
