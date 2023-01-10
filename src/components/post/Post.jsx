import {Link} from "react-router-dom";
import "./post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Comments from "../comments/Comments";
function Post({post}) {

    const [Liked,setLiked] = useState(false);
    const [commentBar,setCommentBar] = useState(false);
   
    return (
        <div className="post">
            <div className='container'>

                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePicture} alt=""/>
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{post.name}</span>
                            </Link>

                            <span className="date">1m ago</span>
                        </div>

                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className='content'>

                    <p>{post.desc}</p>
                    <img src={post.image} alt=""/>
                </div>


                <div className="info">
                    <div className="item">
                        {(!Liked) ? <FavoriteBorderRoundedIcon onClick={() => {setLiked(!Liked)}}/> : <FavoriteRoundedIcon onClick={() => {setLiked(!Liked)}}/>}
                        12 Likes
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon onClick={()=>{setCommentBar(!commentBar)}}/>
                        27 comments
                    </div>
                    <div className="item">
                        <ShareIcon/>
                    </div>
                </div>
                {commentBar && <Comments/>}
            </div>
        </div>
    )
}


export default Post;