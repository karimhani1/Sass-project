import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Meals from './components/Meals/Meals';




let x = createBrowserRouter([
  {path: "" , element: <Layout />,children :[
    {index:true , element: <Meals />},
    {path: "meals/:id" , element: <Meals />},
    {path: "meals" , element: <Meals />},
   
   
   
  ] }
])



function App() {
 

  return (
    <>
   
   <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
