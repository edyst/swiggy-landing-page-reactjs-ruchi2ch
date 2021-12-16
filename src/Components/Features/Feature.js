import React from 'react'
import './Feature.css'

function Feature(props){
 return(
     <div className="single-feature">
         <img alt="alternate" src={props.src} />
         <h2>{props.heading}</h2>
          <p>{props.para1}</p>

     </div>
 )
}
export default Feature