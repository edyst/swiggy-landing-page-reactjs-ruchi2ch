import React from 'react'
import './FooterHead.css'

export default function FooterHead() {
    return (
      <section className="FooterHead-features">
      <div className="footerHead-container">
      <section>
        <ul>
          <li className="heading">company</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Swiggi Blog</li>
          <li>Bug Bounty</li>
          <li>Swiggi Super</li>
          <li>Swiggi Corporate</li>
          <li>Swiggi Instamart</li>
        </ul>
      </section>
      <section>
        <ul>
          <li className="heading">contact</li>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </section>

      <section>
        <ul>
          <li className="heading">legal</li>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Offer Terms</li>
          <li>Phishing & Fraud</li>
        </ul>
      </section>

      <section>
        <ul>
           <li><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"/></li>
           <li><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"/></li>
        </ul>
      </section>
    </div>
    </section>
    )
}
