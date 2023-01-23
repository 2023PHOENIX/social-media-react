import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext';
import "./comment.scss";
import {useQuery} from "react-query";
import {makeRequest} from "../../axios.js";

function Comments({postID}) {

    const {currentUser} = useContext(AuthContext);

    const {isLoading, error, data} = useQuery(["comments"],()=>
        makeRequest.get("/comments?postId=" + postID).then((res)=>{
            return res.data;
        })
    )
    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePicture} alt=""/>
                <input type='text' placeholder='write a comment'></input>
                <button>Send</button>
            </div>
            {

                comments.map(user => (
                    <div className='comment'>
                        <img src={user.profilePicture}/>
                        <div className="info">
                            <span>{user.name}</span>
                            <p>{user.desc} </p>
                        </div>

                        <span className='date'>1hr ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments