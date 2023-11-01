import   './Sidebar.css'
import {FaBars} from 'react-icons/fa'
import logo from  './../../images/logo.svg'
import blogger from  './../../images/blogger.svg'
import gallery from './../../images/gallery.svg'
import lamp from './../../images/lamp.svg'
import booking from './../../images/menu-board.svg'
import inbox from './../../images/INBOX.svg'
import explore from './../../images/search-status.svg'
import  food from './../../images/directbox-notif.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Sidebar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen (!isOpen);
  return (
    <div style={{width: isOpen ? "25%" : "10%"}} className='HJ-sidebar'>
      <div className='HJ-sidebar-title'>
        <div  style={{ display: isOpen ? "block" : "none"}} className='HJ-sidebar-brand'>
          <img  src={logo} alt="logo" />
        </div>
        <div style={{marginLeft : isOpen ? "50px" : "0px"}} className='HJ-bars'>
          < FaBars onClick={toggle}/>
        </div>

      </div>
      
      <ul className='HJ-sidebar-list'>
        <li className='HJ-sidebar-list-item'><img  src={blogger} alt='blogger' />
          <Link to='/Blog' style={{ display: isOpen ? "block" : "none"}} >Blogs</Link>
          </li>
        <li className='HJ-sidebar-list-item' ><img src={gallery} alt='gallery' />
          <Link to='/gallery' style={{ display: isOpen ? "block" : "none"}} >Gallery</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img src={lamp} alt='rooms' />
          <Link to='/room' style={{ display: isOpen ? "block" : "none"}} >Rooms</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img src={booking} alt='booking' />
          <Link to='/booking' style={{ display: isOpen ? "block" : "none"}} >Booking</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img src={explore} alt='explore' />
          <Link to='/explore' style={{ display: isOpen ? "block" : "none"}} >Explore</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img src={food} alt='food' />
          <Link to='/food' style={{ display: isOpen ? "block" : "none"}} >Foods</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img src={inbox} alt='inbox' />
          <Link to='/inbox' style={{ display: isOpen ? "block" : "none"}} >Inbox</Link>
        </li>
      </ul>

      
      </div>
  )
}

export default Sidebar 