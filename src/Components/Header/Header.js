import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h2>FoodMeal</h2>
                <div>
                    <a href="Shop">Shop</a>
                    <a href="Order ">Order</a>
                    <a href="Inventory">Inventory</a>
                    <a href="About">About</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;