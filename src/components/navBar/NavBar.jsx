import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
import { Home, Search } from '@mui/icons-material';
import "./navBar.scss"
function NavBar() {
  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{textDecoration:"none"}}>
                <span>Fake</span>
            </Link>
            <Home/>
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <div className='search'>
                <SearchOutlinedIcon/>
                <input type='text' placeholder='Search..!'/>
            </div>          
        </div>
        <div className="right">
            <Person3OutlinedIcon/>
            <MailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className='user'>
                <img src='#' alt='img'/>
                <span> Abhi S.</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar