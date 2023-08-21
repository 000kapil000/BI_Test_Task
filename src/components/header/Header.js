
import React from 'react'
import './Header.css';
import Profile from "../../image/profile.jpg"  
import { BiBell } from 'react-icons/bi'
import { BiExit } from 'react-icons/bi'
import { TbMinusVertical } from 'react-icons/tb'
import {FiChevronDown } from 'react-icons/fi'
import {AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="header">
    <div className="left-text">
      <h1 className="left-text-main">covid-19</h1>
      <h4 className="left-text-second">Live Traker Dashboard</h4>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search..."/>
      <div className="search-icon"><AiOutlineSearch/></div>
    </div>
    <div className="right-icons">
      <div className="profile-icon"> 
      <img src={Profile} alt="profile" className="profile-image"/>
      </div>
      <div className="down"><FiChevronDown/></div>
      <div className="bar"><TbMinusVertical/></div>
      <div className="ball-icon"><BiBell/></div>
      <div className="additional-icon"><BiExit/></div>
    </div>
  </div>
  )
}

export default Header