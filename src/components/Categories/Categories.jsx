import axios from 'axios'
import style from "./Categories.module.scss"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
const [categories, setcategories] = useState([])

function getCategories(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((res) => {
      setcategories(res.data.categories)
      console.log(res.data.categories);
      
      })
  }
  
   useEffect(() => {
    getCategories()
    }, [])
  



  return (
   <>
   {categories.map((categories) => <ul key={categories.idCategory} className={style.styling}>
    <li className={style.category}>
        <Link to={`products/${categories.strCategory}`}>{categories.strCategory}</Link>
    </li>
   </ul>)}
   
   
   </>
  )
}
