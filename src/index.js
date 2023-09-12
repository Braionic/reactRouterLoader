import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Host from './components/Host/Host';
import Dashboard from './components/Host/Dashboard';
import Data from './components/Host/Data';
import Prices from './components/Host/Prices';
import Login from './components/Login';
import { loader as Dashboardloader } from './components/Host/Dashboard';
import { fakeauth } from './components/requireauth';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  <Route index element={<App />} />
  <Route path='About' element={<About />} />
  <Route path='Contact' element={<Contact />} />
  <Route path='Host/' element={<Host />}  loader={async ()=> await fakeauth() }>
    <Route index element={<Dashboard />} loader={Dashboardloader} />
    <Route path='data' element={<Data />} loader={async ()=> await fakeauth() } />
    <Route path='prices' element={<Prices />} loader={async ()=> await fakeauth() } />
  </Route>
  <Route path='login' element={<Login />} />
  </Route>
))
root.render(
  
    
  <RouterProvider router={router} />
    
   
);

