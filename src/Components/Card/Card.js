import React from 'react';
import './Card.css'


const Card = ({meal}) => {
   const { strMeal,strMealThumb,strCategory,strArea}=meal
    return (
        <div className='card'>
            <img src={strMealThumb} alt="Food Image" />
            <h1>{strMeal}</h1>
            <h4>Category: {strCategory}</h4>
            <h4>Origin:{strArea}</h4>
        </div>
    );
};

export default Card;