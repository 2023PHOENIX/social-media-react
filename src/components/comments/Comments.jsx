import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import "./comment.scss";
function Comments() {

    const { currentUser } = useContext(AuthContext);
    let comments = [
        {
            id: 0,
            desc: 'Amazing picture 💖💖💖',
            name: 'Justina',
            userId: 2234,
            profilePicture: 'https://wallpapers.com/images/hd/cool-profile-pictures-red-anime-fw4wgkj905tjeujb.jpg'
        },
        {
            id: 1,
            desc: 'Look you got something which is my attention',
            name: 'Paul Smith',
            userId: 2234,
            profilePicture: 'https://techtrickseo.com/wp-content/uploads/2020/08/whatsapp-dp-new.jpg'

        },
        {
            id: 12,
            desc: 'Look you got something which is my attention Look you got something which is my attention Look you got something which is my attention',
            name: 'Paul Smith',
            userId: 2234,
            profilePicture: 'https://techtrickseo.com/wp-content/uploads/2020/08/whatsapp-dp-new.jpg'

        }
    ]
    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type='text' placeholder='write a comment'></input>
                <button>Send </button>
            </div>
            {

                comments.map(user => (
                    <div className='comment'>
                        <img src={user.profilePicture} />
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