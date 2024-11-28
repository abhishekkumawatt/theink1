import React from 'react'
import './App.css';
import logo from '../src/assets/images/theinklogo.jpg';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearchSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <div className=''>
 <div className='logobutton container-fluid'>
        <div className='allheadericons ' >
          <FaFacebook style={{ margin: '20px 10px 20px 0px' }} />
          <FaInstagram style={{ margin: '20px 10px 20px 0px' }} />
          <FaTwitter style={{ margin: '20px 10px 20px 0px' }} />
          <FaPinterest style={{ margin: '20px 10px 20px 0px' }} />
        </div>
        <div className='dropdownbutton'>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              LANGUAGE
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
              <Dropdown.Item href="#/action-2">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div  className='logonavbar'>
      <div className='theinklogo'>
      <Navbar.Brand><Link className='NvaLink' to='/'><img src={logo}/></Link></Navbar.Brand>
      </div>
      <div className='navbar'>
      <Navbar>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='navlink' to="/" style={{textDecoration:'none', color:'black', margin:'.5rem 0 0 1rem'}}>HOME</Link>
            <Nav.Link href="#education">EDUCATION</Nav.Link>
            <Nav.Link href="#politics">POLITICS</Nav.Link>
            <Nav.Link href="#sports">SPORTS</Nav.Link>
            <Nav.Link href="#travel">TRAVEL</Nav.Link>
            <Nav.Link href="#art">ART</Nav.Link>
            <Nav.Link href="#state">STATE</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div className='searchicon'>
      <IoSearchSharp />
      </div>
    </div>

    </div>
  )
}