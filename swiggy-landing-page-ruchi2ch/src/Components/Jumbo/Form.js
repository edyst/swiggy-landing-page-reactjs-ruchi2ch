import React from 'react'
import './Form.css'
import Timer from './Timer.js'

export default function Form() {
    return (
        <div className="form">
            <Timer/>
            <h3>Order food from favourite restaurants near you.</h3>
            <div className="ip">
            <input type="text" 
            placeholder="Enter your delivery location" />
            <button className="btnOrange">FIND FOOD</button>
            </div>
            <h3 className="secondh3">Popular cities in India</h3>
            <div class="popularCities">
                <a href=" " class="dark">Ahmedabad </a>
                <a href=" "class="light">Bangalore </a>
                <a href=" "class="dark">Chennai </a>
                <a href=" "class="light">Delhi </a>
                <a href=" "class="dark">Gurgaon </a>
                <a href=" "class="light">Hyderabad </a>
                <a href=" "class="dark">Kolkata </a>
                <a href=" "class="light">Mumbai </a>
                <a href=" "class="dark">Pune </a>
                <a href=" "class="light">& more. </a>
            </div>
        </div>
    )
}
