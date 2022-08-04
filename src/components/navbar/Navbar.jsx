import './navbar.css';
import React,{useState} from 'react';
import logo from '../../assets/logo.png';
import {RiCloseLine,RiMenu3Line} from 'react-icons/ri'
const Menu=()=>(
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT</a></p>
    <p><a href="#possibility">Open AT</a></p>
    <p><a href="#features">Case Studies</a></p>  
    <p><a href="#blog">Library</a></p>
  </>
)
export const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
         <div className="gpt3_navbar-links_logo">
           <img src={logo} alt="logo" />
         </div>
         <div className="gpt3_navbar-links_container">
          <Menu/>
         </div>
         <div className="gpt3_navbar-sign">
           <p>Sign in</p>
           <button type="button">Sign Up</button>
         </div>
         <div className="gpt3_navbar-menu">
              {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
              : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
              }
              {toggleMenu && (
                <div class="gpt3_navbar-menu_container scale-up-center">
                  <div className="gpt3_navbar-menu_container-links">
                    <Menu/>
                    <div className="gpt3_navbar-menu_container-links-sign">
                          <p>Sign in</p>
                          <button type="button">Sign Up</button>
                    </div>
                  </div>
                </div>
              )}
         </div>
      </div>
    </div>
  )
}
