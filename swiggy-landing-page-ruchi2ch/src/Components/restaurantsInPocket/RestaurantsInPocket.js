import React from "react";
import './RestaurantsInPocket.css'

function RestaurantsInPocket(){
    return(
        <div className="preview">
        <div className="description">
            <h1>Restaurants in<br/> your pocket</h1> 
            <p>Order from your favorite restaurants & track<br/> on the go, with the all-new Swiggy app.</p>  
            <nav>
                <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt=""/></a>
                <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt=""/></a>
            </nav> 
        </div>
        <div className="screenshot">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>
            </div>
        </div>
    )
}

export default RestaurantsInPocket