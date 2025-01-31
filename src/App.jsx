import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Meals from './components/Meals/Meals';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';



let x = createBrowserRouter([
  {path: "" , element: <Layout />,children :[
    {index:true , element: <Meals />},
    {path: "sidebar" , element: <Sidebar />},
    {path: "title" , element: <Title />},
    {path: "footer" , element: <Footer />},
    {path: "Categories" , element: <Categories />},
    {path: "products/:id" , element: <Products />}
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
