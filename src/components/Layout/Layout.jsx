import React from 'react'
import style from "./Layout.module.scss"
import { Outlet } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
import Footer from '../Footer/Footer';



export default function Layout() {
  return (
   <>
<Sidebar />

<div className={style.all}>

  <Outlet  />
 
</div>

<Footer />
   </>
  )
}
