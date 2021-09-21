import React,{useState,useEffect} from "react";
import './Timer.css'

function Timer(){
    
    let array=["Hungry?", "Unexpected guests?", "Cooking gone wrong?", "Movie marathon?","Game night?","Late night at office?"];
     const [change,setChange]=useState(array[0]);
       useEffect(()=>{
           loop();
       },[])

       function loop()
       {
           var i=0;
           setInterval(
               ()=>{
                   if(i==5)
                   {
                       i=0;
                   }
                   if(i<5)
                   {
                       setChange(array[i]);
                       i++;
                   }
               },2500)
       }
       return(
           <div>
               <h1 className="h1">{change}</h1>
           </div>
       )





    
}
export default Timer;