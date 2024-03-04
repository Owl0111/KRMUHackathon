import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {createBrowserRouter, RouterProvider, Router} from 'react-router-dom';
import Login from './pages/Login';
import GetUserLocation from './Hooks/UseUserLocation';
import Register from './pages/Register';
const router  = createBrowserRouter(
  [
    {
    path:'/',
    element: <div>audkhgkjsdfgjlakjl</div>
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/register',
      element: <Register/>
    }
]
)
function App() {
  console.log(GetUserLocation() )
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}


export default App
