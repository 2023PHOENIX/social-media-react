import React from 'react'

function Stories() {
    //DUMMY DATA 
    const stories = [
        {
            id: 1,
            name: "Achal Shrivastava",
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

    return (
        <div className='Stories'>
            {stories.map(story => (
                <div className="story">
                    <span>{story.name}</span>
                    <img src={story.img} alt="" />
                </div>
            ))}


        </div>
    )
}

export default Stories;