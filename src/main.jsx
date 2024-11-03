/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayOut/MainLayout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Coffes from './Components/Coffees/Coffes';
import Dashboard from './Components/Dashboard/Dashboard';
import CoffeeCards from './Components/CoffeCards/CoffeeCards';
import CoffeeDetails from './Components/CoffeeDetails/CoffeeDetails';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
       {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children:[
          {
            path:"/",
            element:<CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json')
          },
          {
            path:"/category/:category",
            element:<CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json')
          }
        ]
       },

       {
        path: "/coffees",
        element: <Coffes></Coffes>,
        loader: () => fetch('/coffees.json')
       },

       {
        path: "coffees/:coffeId",
        element:<CoffeeDetails></CoffeeDetails>,
        loader:() => fetch('/coffees.json')
       },

       {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        loader:() => fetch('/coffees.json')
        
       }


    ]
    
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <Toaster/>
  </StrictMode>,
)
