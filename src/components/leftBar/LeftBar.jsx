import React from 'react'
import "./leftBar.scss";
function LeftBar() {
  return (
    <div className='leftbar'>
    <div className="container">
        <div className="menu">
            <div className="user">
                <img src='#' alt='yo'/>
                <span>Abhi S.</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Friends</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Group</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>MarketPlace</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Watch</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Memories</span>
            </div>
            
        </div>

        <hr></hr>
        <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Event</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Gaming</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Video</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Message</span>
            </div>
        </div>

        <hr/>
        <div className="menu">
            <span>Others</span>
            <div className="item">
                <img src='#' alt='span'/>
                <span>FundRaiser</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Tutorial</span>
            </div>
            <div className="item">
                <img src='#' alt='span'/>
                <span>Course</span>
            </div>

        </div>
    </div>
    
    </div>
  )
}

export default LeftBar