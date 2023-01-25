import React, {useContext} from 'react'

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
import {useQuery} from "react-query";
import {makeRequest} from "../../axios.js";
import {useLocation} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";


function Profile() {

    const userID = useLocation().pathname.split("/")[2];


    const {currentUser} = useContext(AuthContext);

    const {isLoading, error, data} = useQuery(["user"], () => makeRequest.get("/users/find/" + userID).then((res) => {
        return res.data;
    }));

    const {data: RelationshipData} = useQuery(["user"], () => makeRequest.get("/relationships?followedUserId=" + userID).then((res) => {
        return res.data;
    }));


    console.log(RelationshipData);
    const updateFollower = () => {
        // update the follower in backend
    }

    return (!isLoading && !error && <div className='profile'>
        <div className="images">
            <img
                src={data.coverPicture}
                alt="" className='coverImage'/>
            <img src={data.profilePicture} alt=''
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
                    <span>{data.name}</span>
                    <div className="info">
                        <div className="item">
                            <PlaceIcon fontSize='small'/>
                            {data.city}
                        </div>
                        <div className="item">
                            <LanguageIcon fontSize='small'/>

                            {data.website}
                        </div>
                    </div>
                    {currentUser.userID === data.userID ? <button>update </button> :
                        <button onClick={updateFollower}>Follow</button>}
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

    </div>)
}

export default Profile