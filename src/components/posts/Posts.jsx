import React from 'react'
import Post from "../post/Post.jsx";

function Posts() {
    const posts = [
        {
            id: 122,
            name: "MonaLisa",
            userId: 11,
            profilePicture:
                "https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg",
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png"
            , desc: "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
        },
        {
            id: 1,
            name: "Abhishek",
            userId: 11,
            profilePicture:
                "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",

            desc: "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
        },
        {
            id: 1221,
            name: "Abhishek",
            userId: 11,
            profilePicture:
                "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            image: "https://www.bhaktiphotos.com/wp-content/uploads/2021/07/Sivan-hd-Images-1080p.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
        }
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} id={post.id}/>

            ))}
        </div>
    )
}


export default Posts;