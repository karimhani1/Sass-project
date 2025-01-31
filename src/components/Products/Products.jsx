import axios from 'axios'
import style from "./Products.module.scss"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Title from '../Title/Title'
import Categories from '../Categories/Categories'

export default function Products() {
    const [product, setproduct] = useState(null)
    let { id,category } = useParams()
    
    function getproduct(id) {

        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
          .then((res) => {
            setproduct(res.data.meals)
            console.log(res);
            
          })
          .catch((res) => { })
      }
    
      useEffect(() => {
        getproduct(id)
      }, [id ,category])

  return (
    <>
    <Title/>

    <div className={style.main}>
    {product?.map((product)=>
    <div  key={product?.idMeal} className={style.looping}>
<img className={style.image} src={product?.strMealThumb} alt="" />
<h3 className={style.name}>{product?.strMeal}</h3>
  </div>)}
  
    </div>
    
    </>
  )
}
