import React from 'react'
import style from '../Sidebar/Sidebar.module.scss'
import image from "../../assets/logo-BfNap0Pe.png"
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <>
    <div className='side'>

        <div className='box'>
            <div>
                <img src={image} alt="Recipe" />
            </div>

            <ul>
                <li className={style.bg}>
                    <Link to="">
                    <i className="fa-solid fa-utensils"></i>
                    <span>Meals</span>
                    </Link>
             </li>
             <li>
                    <Link to="">
                    <i className="fa-solid fa-utensils"></i>
                    <span>Ingredients</span>
                    </Link>
             </li>
             <li>
                    <Link to="">
                    <i className="fa-solid fa-utensils"></i>
                    <span>Area</span>
                    </Link>
             </li>
            </ul>
        </div>
    </div>
    
    
    </>
  )
}
