import React from 'react'
import { IoPerson } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit';


export const Header = () => {

    const bag = useSelector((store) => store.bag)
    console.log("Bag Contains",bag);
  return (  
    <>
    
    <header>
        <div className="logo_container">
            <Link to="/" href="#"><img className="myntra_home" src="/public/images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a  href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon"><p className='search-icon'><IoSearch /></p></span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>

        <div className="action_bar">
            <div className="action_container">
            {/* <IoPerson /> */}
            <IoPersonOutline />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <GoHeart />
                <span className="action_name">Wishlist</span>
            </div>
            
            <Link className="action_container" to="/bag">
            <HiOutlineShoppingBag />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
    
    </>
  )
}
