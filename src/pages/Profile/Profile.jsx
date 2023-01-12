import React from 'react'

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./profile.scss";
import Posts from "../../components/posts/Posts.jsx"


function Profile() {
    return (
        <div className='profile'>
            <div className="images">
                <img
                    src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="" className='coverImage'/>
                <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" alt=''
                     className='profilePicture'/>
            </div>

            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href='#'>
                            <FacebookTwoToneIcon fontSize='large'/>
                        </a>
                        <a href='#'>
                            <LinkedInIcon fontSize='large'/>
                        </a>
                        <a href='#'>
                            <InstagramIcon fontSize='large'/>
                        </a>
                        <a href='#'>
                            <PinterestIcon fontSize='large'/>
                        </a>


                    </div>
                    <div className="center">
                        <span>John Deo</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon fontSize='small'/>
                                India
                            </div>
                            <div className="item">
                                <LanguageIcon fontSize='small'/>

                                lama.dev
                            </div>
                        </div>
                            <button>Follow</button>
                    </div>
                    <div className="right">
                        <a href='#'>
                            <EmailOutlinedIcon fontSize='large'/>
                        </a>

                        <a href='#'>
                            <MoreVertIcon fontSize='large'/>
                        </a>


                    </div>
                </div>
            <Posts/>
            </div>

        </div>
    )
}

export default Profile