import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
    <div className="nav">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPMGDF7UGsme8WBuFxEwG8H-Ys4nW7TbOBFXG4H36Q11Ccbmc0tvVK_RU4N9-EI2GQ&usqp=CAU" alt="logo" class="logo-main"/>
        <div class="login-cont">
            <a class="login-button" href=" ">Login</a>
            <a class="signup-button" href=" ">Sign up</a>
        </div>
    </div>
    )
}
