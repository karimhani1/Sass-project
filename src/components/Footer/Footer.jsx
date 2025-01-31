import React from 'react'
import style from '../Footer/Footer.module.scss'
import { Link } from 'react-router-dom'
import image from "../../assets/Recipe.png"

export default function Footer() {
  return (
    <>
    <footer className={style.bg}>
<div className='container'>
<div className={style.box}>
    <Link to="/">
    <img src={image} alt="" />
    <span className={style.recipe}>Recipe</span>
    </Link>
 <span className={style.route}>Route</span>
</div>
<hr className={style.space} />
<span className={style.parent}>© 2025 <Link className={style.link} to="https://www.facebook.com/EINagy">Nagy Osama™</Link>
. All Rights Reserved.
</span>
</div>
    </footer>
    
    </>
  )
}
