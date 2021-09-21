import React from 'react'
import Nav from './Nav'
import Form from './Form'
import './Left.css'

export default function Left() {
    return (
        <div className="main">
            <div className="main-left">
            <Nav/>
            <Form/> 
            </div>
            <div className="main-right"></div>

        </div>
    )
}
