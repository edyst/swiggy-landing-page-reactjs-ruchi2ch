import React from 'react'
import './Feature.css'

function Features(props){
 return(
     <div className="feature">
         <img alt="alternate" src={props.src} />
         <h2>{props.heading}</h2>
          <p>{props.para1}</p>
          {/* <p>{props.para2}</p>   */}
     </div>
 )
}
export default Features