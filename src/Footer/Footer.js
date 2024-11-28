import React from 'react'
import './Footer.css';
import logo from '../../src/assets/images/theinklogo.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footermain'>
            <div className='footer-logo-text'>
                <div className='logoicons'>
                    <div className='footerlogo'>
                        <img src={logo}></img>
                    </div>
                    <div className='allfootericons'>
                        <FaFacebook style={{ margin: '20px 10px 20px 6.3rem' }} />
                        <FaInstagram style={{ margin: '20px 10px 20px 0px' }} />
                        <FaTwitter style={{ margin: '20px 10px 20px 0px' }} />
                        <FaPinterest style={{ margin: '20px 10px 20px 0px' }} />
                    </div>
                </div>

                <div className='popularfooter'>
                    <div className='populartext'>
                        <h4>Popular Categories</h4>
                    </div>
                    <div className='footernavbar'
                    >
                        <Link className='navlink' to="#about" style={{textDecoration:'none', color:'black'}}>About</Link>
                        <Link className='navlink' to="#content" style={{textDecoration:'none', color:'black'}}>Content</Link>
                        <Link className='navlink' to="/privacy-policy" style={{textDecoration:'none', color:'black'}}>Privacy Policy</Link>
                        <Link className='navlink' to="/terms-conditions" style={{textDecoration:'none', color:'black'}}>Terms & Conditions</Link>
                        <Link className='navlink' to="/publisher-details" style={{textDecoration:'none', color:'black'}}>Publisher Details</Link>
                    </div>
                </div>
            </div>
            <div className='text-center p-3 container' style={{borderStyle:'solid', borderWidth:'0.1px 0 0 0', borderColor:'GrayText', textAlign:'center'}}>
                &copy; {new Date().getFullYear()} News |{' '}
                <a className='text-dark' style={{textDecoration:'none'}}>
                 All rights reserved
                </a>
            </div>
        </div>

    )
}

export default Footer