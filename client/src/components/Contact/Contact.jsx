import React from 'react'
import './Contact.scss'

export default function Contact(){
    return(
        <div className='contactWrapper'>
        <div className="contactContainor">
            <div className="contactLeft">Contact Us</div>
            <div className="contactRight">
                <ul className='contactIconList'>
                    <li className="contactIcon">Instagram</li>
                    <li className="contactIcon">Facebook</li>
                    <li className="contactIcon">Twitter</li>
                    <li className="contactIcon">+91 8303197394/7066309111</li>
                </ul>
            </div>
        </div>
    </div>
    );
}
