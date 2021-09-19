import React from "react";
import Features from "./Feature";
import './FeatureContainer.css'

function FeatureContainer(){
    return(
    <section className="features">
    <div className="container">
     <Features src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
      heading="No Minimum Order"
      para1="Order in for yourself or for the group , with no restrictions on order value"/>

     <Features src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
      heading="Live Order Tracking"
      para1="Know where your order is at all times, from the restaurant to your doorstep"/>

    <Features src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
      heading="Lightning-Fast Delivery"
      para1="Experience Swiggy's superfast delivery  for food delivered fresh & on time"/>
    </div>
    </section>
    )}
    
    export default FeatureContainer