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
import Eror from './Components/Eror';
import Review from './Components/Review';
import COntact from './Components/COntact';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<Eror></Eror>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listedBooks',
        element:<ListedBook></ListedBook>,
        loader:()=> fetch('/fakedata.json')
      },
      {
        path:'/pageRead',
        element:<PageRead></PageRead>,
        loader:()=> fetch('/fakedata.json'),
      },
      {
        path:'/book/:id',
        element:<BookDetail></BookDetail>,
        loader: ()=> fetch('/fakedata.json')
      },
      {
        path:'/contact',
        element:<COntact></COntact>,
      },
      {
        path:'/review',
        element: <Review></Review>,
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
