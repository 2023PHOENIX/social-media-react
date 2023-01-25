import {Link} from "react-router-dom";
import "./post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareIcon from '@mui/icons-material/Share';
import {useContext, useState} from "react";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Comments from "../comments/Comments";
import {makeRequest} from "../../axios.js";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {AuthContext} from "../../context/AuthContext.jsx";
import {FavoriteBorderRounded} from "@mui/icons-material";

function Post({post}) {
    const [commentBar, setCommentBar] = useState(false);

    const {currentUser} = useContext(AuthContext);

    const {isLoading, error, data} = useQuery(["likes", post.uniqueID], () =>

        makeRequest.get("/likes?postID=" + post.uniqueID).then((res) => {
            return res.data;
        })
    );

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (liked) => {
            if (liked) {

                return makeRequest.delete("/likes?postID=" + post.uniqueID);
            } else {
                return makeRequest.post("/likes", {postID: post.uniqueID});
            }
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["likes"]);
            },
        }
    );


    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.userID, 0))
    }

    return (
        <div className="post">
            <div className='container'>

                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePicture} alt="NULL"/>
                        <div className="details">
                            <Link to={`/profile/${post.userId_p}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{post.name}</span>
                            </Link>

                            <span className="date">{post.createdAt}</span>
                        </div>

                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className='content'>

                    <p>{post.desc_}</p>
                    <img src={"./upload/" + post.img} alt=""/>
                </div>


                <div className="info">
                    <div className="item">
                        {!isLoading && data.includes(currentUser.userID, 0) ?
                            <FavoriteRoundedIcon style={{color: 'red'}} onClick={handleLike}/> :
                            <FavoriteBorderRoundedIcon onClick={handleLike}/>}
                        {data ? data.length : 0}
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon onClick={() => {
                            setCommentBar(!commentBar)
                        }}/>
                     
                    </div>
                    <div className="item">
                        <ShareIcon/>
                    </div>
                </div>
                {commentBar && <Comments postID={post.uniqueID}/>}
            </div>
        </div>
    )
}


export default Post;