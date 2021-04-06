import React, { useEffect, useState } from 'react';
import { FaCommentDots, FaShare, FaHeart, FaBuromobelexperte } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton'

    const Card = ({addBy, url, likes, comments, title, caption, displayName, videoId, photoUrl, USER_LOGGED_IN, currentUserId}) => {
         return (
            <div className="card">
                <div className="break" />
                <div className="section">
                    <div className="user-info">
                        <img className="user-avatar" src={photoUrl} width={'100%'} alt={displayName} />
                        <div>
                            <div className="section">
                               <Link to = {`/user/${addBy}`}> 
                                <h3 className="bold">{displayName}</h3>
                                </Link>
                                <p className="username">{title}</p>

                            </div>
                                <p>{caption}</p>
                        </div>
                    </div>
                    <div className='card-button-wrapper'>
                        <FollowButton addBy = {addBy} USER_LOGGED_IN ={USER_LOGGED_IN} currentUserId= {currentUserId}/>
                    </div>
                </div>

                <video className="video" controls src={url}/>
                <div className="section socials icons-conteiner">
                    <div className='icon-wrapper'>
                        <FaHeart className="icons" />
                    </div>
                    <div className="social-tag"><span>{likes}</span></div>
                    <div className='icon-wrapper'>
                        {USER_LOGGED_IN ? <Link to={`/viewVideo/${videoId}`}>
                            <FaCommentDots className="icons" />
                        </Link> :
                            <FaCommentDots className="icons" />
                        }
                    </div>
                    <div className="social-tag"><span>{comments}</span></div>
                    <div className='icon-wrapper'>

                        <FaShare className="share" />
                    </div>
                    <div className="social-tag"><span>0</span></div>
                </div>
            </div>
        )
    }
export default Card

