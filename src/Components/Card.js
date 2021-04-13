import React, { useEffect, useState } from 'react';
import { FaCommentDots, FaShare, FaHeart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton'
import { DataBase } from '../firebase'

const Card = ({ addBy, url, comments, title, caption, displayName, videoId, photoUrl, USER_LOGGED_IN, currentUserId, }) => {
    const [videoIsLiked, setIsVideoLiked] = useState(false);
    const [videoLikeByArr, setVideoLikedByArr] = useState([]);
    const [likes, setLikes] = useState(0);


    useEffect(() => {
        let mounted = true;
        if (!USER_LOGGED_IN && !currentUserId) {
            setIsVideoLiked(false)
        } else {
            DataBase.collection('videos').doc(videoId).get()
                .then((video) => {
                    if (video.exists && mounted) {
                        let arr = [...video.data().likedBy]
                        arr.includes(currentUserId) ? setIsVideoLiked(true) : setIsVideoLiked(false)
                        setLikes(arr.length)
                        setVideoLikedByArr([...arr])
                    }
                })
        }
        return () => mounted = false;//changedMouted
    }, [currentUserId, USER_LOGGED_IN, videoId])


    const addToLiked = () => {
        if (!USER_LOGGED_IN) return

        let currentLikedByArr = [];
        DataBase.collection('videos').doc(videoId).get()
            .then((video) => {
                if (video.exists) {
                    let arr = [...video.data().likedBy]
                    currentLikedByArr = [...arr]
                    if (!currentLikedByArr.includes(currentUserId)) {
                        currentLikedByArr.push(currentUserId)
                        setVideoLikedByArr([...videoLikeByArr, currentUserId])
                        return DataBase.collection('videos').doc(videoId).update({
                            likedBy: [...currentLikedByArr],
                            numOfLikes: currentLikedByArr.length
                        })
                            .then(() => {
                                // console.log('videoLiked! inside UPDATE!!')
                                setIsVideoLiked(true)
                                setLikes(likes + 1)
                                // setButtonClicked(!buttonClicked);
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    } else {                        
                        let index = currentLikedByArr.indexOf(currentUserId)
                        currentLikedByArr.splice(index, 1);

                        return DataBase.collection('videos').doc(videoId).update({
                            likedBy: [...currentLikedByArr],
                            numOfLikes: currentLikedByArr.length
                        })
                            .then(() => {
                                setVideoLikedByArr([...currentLikedByArr])
                                setLikes(likes - 1)
                                setIsVideoLiked(false)
                                
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                }
            })
    }


    return (
        <div className="card">
            <div className="break" />
            <div className="section">
                <div className="user-info">
                    <img className="user-avatar" src={photoUrl} width={'100%'} alt={displayName} />
                    <div>
                        <div className="section">
                            <Link to={`/user/${addBy}`}>
                                <h3 className="bold">{displayName}</h3>
                            </Link>
                            <p className="username">{title}</p>
                        </div>
                        <p>{caption}</p>
                    </div>
                    <div />
                </div>
                <div className='card-button-wrapper'>
                    <FollowButton addBy={addBy} USER_LOGGED_IN={USER_LOGGED_IN} currentUserId={currentUserId} />
                </div>
            </div>

            <video className="video" controls src={url} />
            <div className="section socials icons-conteiner">
                <div className='icon-wrapper'>
                    <button onClick={addToLiked} style={{
                        border: 'none',
                        outline: 'none',
                        background: 'transparent'
                    }}>
                        <FaHeart className={videoIsLiked ? "iconsLiked" : "icons"} />
                    </button>

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

