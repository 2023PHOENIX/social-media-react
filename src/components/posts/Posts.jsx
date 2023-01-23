import React from 'react'
import Post from "../post/Post.jsx";

import {useQuery} from "react-query";
import {makeRequest} from "../../axios.js";

import Loading from "../../pages/Loading/Loading.jsx";

function Posts() {

    const {isLoading, error, data} = useQuery(["posts"], () =>
        makeRequest.get("/posts").then((res) => {
            // console.log(res.data);
            return res.data;
        }), {keepPreviousData: false},
    );

    //TODO: give some loading page to render if needed
    return (
        <div className="posts">
            {
                error ? "something went wrong" : isLoading ? <Loading/> : data.map(d => <Post post={d}
                                                                                              key={d.uniqueID}/>)
            }
        </div>
    )

}


export default Posts;