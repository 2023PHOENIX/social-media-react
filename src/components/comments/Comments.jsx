import React, {useContext, useState} from 'react'
import {AuthContext} from '../../context/AuthContext';
import "./comment.scss";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {makeRequest} from "../../axios.js";
import moment from "moment";

function Comments({postID}) {
    const [desc,setDesc] = useState();
    const {currentUser} = useContext(AuthContext);

    const {isLoading, error, data} = useQuery(["comments"], () =>
        makeRequest.get("/comments?postID=" + postID).then((res) => {
            return res.data;
        }),{keepPreviousData : false},
    );
     const queryClient = useQueryClient();

    const mutation = useMutation(
        (newComment) => {
            return makeRequest.post("/comments", newComment);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["posts"]);
            },
        }
    );
    const handleClick = async (e) => {
        e.preventDefault();

        mutation.mutate({desc,postID})
        setDesc("");
    };

    console.log(data);

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePicture} alt=""/>
                <input type='text' placeholder='write a comment' onChange={(e)=> setDesc(e.target.value)}></input>
                <button onClick={handleClick}>Send</button>
            </div>
            {
                isLoading ? "loading" :
                    !isLoading && data && data.map(comment => (
                        <div className='comment'>
                            <img src={comment.profilePicture}/>
                            <div className="info">
                                <span>{comment.name}</span>
                                <p>{comment.desc_} </p>
                            </div>

                            <span className='date'>{moment(comment.createdAt).fromNow()}</span>
                        </div>
                    ))
            }
        </div>
    )
}

export default Comments