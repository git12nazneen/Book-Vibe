import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import ListedBook from './Components/ListedBook';
import PageRead from './Components/PageRead';
import BookDetail from './Components/BookDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listedBooks',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pageRead',
        element:<PageRead></PageRead>
      },
      {
        path:'/book/:id',
        element:<BookDetail></BookDetail>,
        loader: ()=> fetch('fakedata.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
