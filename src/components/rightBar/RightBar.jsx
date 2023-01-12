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
              <img src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg' alt="name" />
              <span> Guliver </span>
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
              <img src='https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm' alt="name" />
              <p>
                <span> Sherlock  </span>
                changed his profile picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg' alt="name" />
              <p>
                <span> Dani D. </span>
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
              <span> SemiColon</span>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://tinypng.com/images/social/website.jpg' alt="name" />
              <div className="online" />
              <span> GULLU</span>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU' alt="name" />
              <div className="online" />
              <span> Aditya</span>
            </div>
            
          </div>
          </div>
      </div>

    </div>
  )
}

export default RightBar