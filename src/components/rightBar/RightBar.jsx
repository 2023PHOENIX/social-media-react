import React from 'react'
import "./rightBar.scss"
function RightBar() {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <span> Jane Deo</span>
            </div>
            <div className="buttons">
              <button> Accept </button>
              <button> Reject </button>
            </div>
          </div>



        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <p>
                <span> Jane Deo  </span>
                changed his profile picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <p>
                <span> Jane Deo  </span>
                changed his profile picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <p>
                <span> Jane Deo  </span>
                changed his profile picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>
        </div>


        <div className="item">
          <span>Online Friends </span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <div className="online" />
              <span> Jane Deo</span>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <div className="online" />
              <span> Jane Deo</span>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="name" />
              <div className="online" />
              <span> Jane Deo</span>
            </div>
            
          </div>
          </div>
      </div>

    </div>
  )
}

export default RightBar