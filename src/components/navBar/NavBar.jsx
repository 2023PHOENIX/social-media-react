import React, {useContext} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {Link} from 'react-router-dom';
import {Home, Search} from '@mui/icons-material';
import "./navBar.scss";
import {DarkModeContext} from "../../context/darkModeContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";


function NavBar() {

    const {darkMode,toggle} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);
    const handleDarkMode = () => {
        toggle();
    }
    return (
        <div className='navbar'>
            <div className="left">
                <Link to='/' style={{textDecoration: "none"}}>
                    <span>Fake</span>
                </Link>
                <Home/>
                {(darkMode) ? <DarkModeOutlinedIcon onClick={handleDarkMode}/> : <LightModeIcon onClick={handleDarkMode}/>}
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
                    <img src={currentUser.profilePicture} alt='img'/>
                    <span> {currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar