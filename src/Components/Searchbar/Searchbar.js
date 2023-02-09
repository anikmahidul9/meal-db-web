import React, { useEffect, useState } from 'react';
import './Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Searchbar = ({placeholder}) => {
    const[search,setSearch]= useState("");
    const[myMeal,setMeal]=useState([]);
    const Meal=() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=>{setMeal(data.meals);setSearch(""); setMeal(data.meals);console.log(data)} )
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        Meal();
    }
    return (
        <div className='search'>
            <div className="searchInputs">
                <input type="text" placeholder= {placeholder} 
                onChange={(e)=> setSearch(e.target.value)}
                value={search}
                 />
                <div className="searchIcon">
                <FontAwesomeIcon onClick={onSubmit} icon={faSearch}></FontAwesomeIcon>
                </div>
            </div>
            <div className="container">

            <div className='shop-container'>
                {
                    myMeal.map(meal =><Card 
                        key={meal.idMeal}
                        meal={meal}
                        >

                    </Card>)
                }
            </div>
            <div className="cart-container">
                <Cart props={myMeal.strMeal}></Cart>
            </div>
                </div>

            
        </div>
    );
};

export default Searchbar;