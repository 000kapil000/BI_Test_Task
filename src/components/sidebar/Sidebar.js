import React from 'react'
import './Sidebar.css';
import { PiSquaresFourFill } from 'react-icons/pi';
import { MdOutlineLightMode } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineSick } from 'react-icons/md';
import { BiSolidFlask } from 'react-icons/bi';
import { FcDonate } from 'react-icons/fc';
import { AiFillMessage } from 'react-icons/ai';
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="icon top-icon"><MdOutlineLightMode/></div>
    <div className="center-icons">
      <div className="center-icon"><PiSquaresFourFill/></div>
      <div className="center-icon"><MdOutlineSick/></div>
      <div className="center-icon"><BiSolidFlask/></div>
      <div className="center-icon"><FcDonate/></div>
      <div className="center-icon"><AiFillMessage/></div>
    </div>
    <div className="icon bottom-icon"><CiSettings/></div>
  </div>
  )
}

export default Sidebar