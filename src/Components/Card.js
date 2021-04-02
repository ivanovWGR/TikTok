import React from 'react';
import { FaCommentDots, FaShare, FaHeart, FaBuromobelexperte } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Card = ({ videoUrl, likes, comments, title, fullName, caption, date, videoId }) => {


    return (
        <div className="card">
            <div className="break" />
            <div className="section">
                <div className="user-info">
                    <img className="user-avatar" src='https://pbs.twimg.com/profile_images/1245370888830279687/Yg52KzMm.jpg' width={'100%'} alt='username' />

                    <div>
                        <div className="section">
                            <h3 className="bold">{title}</h3>
                            <p className="username">{fullName}</p>
                            {/* <p>{date}</p> */}
                        </div>
                        <p>{caption}</p>
                    </div>
                </div>

                <div className='card-button-wrapper'>
                    <button className='follow-button'>Follow</button>
                </div>
            </div>
            <video className="video" controls src={videoUrl}
            />

            <div className="section socials icons-conteiner">
                <div className='icon-wrapper'>
                    <FaHeart className="icons" />

                </div>
                <div className="social-tag"><span>{likes}</span></div>
                
                
                <div className='icon-wrapper'>                    
                <Link to={`/viewVideo/${videoId}`}>
                    <FaCommentDots className="icons" />
                    </Link>
                </div>
                
                <div className="social-tag"><span>{comments}</span></div>
                <div className='icon-wrapper'>

                    <FaShare className="share" />
                </div>
                <div className="social-tag"><span>Share</span></div>
            </div>
        </div>
    )
}

export default Card