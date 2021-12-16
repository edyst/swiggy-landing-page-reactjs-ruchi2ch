import React from 'react'
import './BottomFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faPinterest,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import logo from '../../Images/swiggifooter.png'

export default function BottomFooter() {

    return (
        <div className="BottomContainer">
            <div><img src={logo} width="142px" height="42px"></img></div>
            <div className="sec">&#169;2021 Swiggi</div>
            <div className="third">
            <FontAwesomeIcon  style={{paddingRight:"30px"}}icon={faFacebookF}  />
            <FontAwesomeIcon  style={{paddingRight:"30px"}}icon={faPinterest} />
            <FontAwesomeIcon  style={{paddingRight:"30px"}} icon={faInstagram} />
            <FontAwesomeIcon  style={{paddingRight:"30px"}} icon={faTwitter} />
            </div>
        </div>
    )
}
