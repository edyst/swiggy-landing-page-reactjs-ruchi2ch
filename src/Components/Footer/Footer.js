import React from 'react'
import FooterHead from './FooterHead'
import './Footer.css'
import FooterMid from './FooterMid'
import BottomFooter from './BottomFooter'

export default function Footer() {
    return (
        <div className="Footer">
           <FooterHead/>
           <hr/>
           <FooterMid/>
           <hr/>
           <BottomFooter/>
        </div>
    )
}

