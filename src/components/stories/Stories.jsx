import React, { useContext } from 'react'
import "./stories.scss";
import { AuthContext } from "../../context/AuthContext.jsx";
function Stories() {
    //DUMMY DATA 
    const stories = [
        {
            id: 1,
            name: "Achal",
            img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id: 2,
            name: "JOSHI",
            img: "https://pixlr.com/images/index/remove-bg.webp"
        },
        {
            id: 3,
            name: "John Snow",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjOkn2Ef2RE4zKQP8vnVAKQ2pNQBi2mhN2A&usqp=CAU"
        }

    ];
    
    const {currentUser} = useContext(AuthContext);
    return (
        <div className='Stories'>
        <div className="story" key={10}>
                    <img src={currentUser.profilePicture} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story => (
                <div className="story" key = {story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}


        </div>
    )
}

export default Stories;