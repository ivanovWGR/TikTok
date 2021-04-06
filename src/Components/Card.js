import React, { useEffect, useState } from 'react';
import { FaCommentDots, FaShare, FaHeart, FaBuromobelexperte } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton'
import { DataBase } from '../firebase'
import {useLocation} from 'react-router-dom'





const Card = ({ addBy, url,  comments, title, caption, displayName, videoId, photoUrl, USER_LOGGED_IN, currentUserId, }) => {
    const [videoIsLiked, setIsVideoLiked] = useState(false);
    const [videoLikeByArr, setVideoLikedByArr] = useState([]);
    const [likes,setLikes] = useState(0);
    const location = useLocation();
    // console.log('Card rerrendered ', videoIsLiked)
    // console.log('Location ', location)
    useEffect(() => {
        // console.log('UserLoggedIn ', USER_LOGGED_IN)
        // console.log('currentUserId, ', currentUserId)
        if (!USER_LOGGED_IN && !currentUserId) {
            setIsVideoLiked(false)
            console.log('Inside set likes first effetc NO user and no user id')
        }else{
            DataBase.collection('videos').doc(videoId).get()
                .then((video) => {
                    if (video.exists) {
                        console.log('Inside set likes first effetc else')
                        // console.log('current video', video.data())
                        let arr = [...video.data().likedBy]
                        arr.includes(currentUserId) ? setIsVideoLiked(true) : setIsVideoLiked(false)
                        setLikes(arr.length)
                        setVideoLikedByArr([...arr])                        
                    }
                })
        }
    }, [])

    // useEffect(() => {
    //     if (USER_LOGGED_IN) {
    //         DataBase.collection('videos').doc(videoId).get()
    //             .then((video) => {
    //                 if (video.exists) {
    //                     console.log('current video', video.data())
    //                     let arr = [...video.data().likedBy]
    //                     setVideoLikedByArr([...arr])
    //                     videoLikeByArr.includes(currentUserId) ? setIsVideoLiked(true) : setIsVideoLiked(false)
    //                 }
    //             })
    //     }
    // }, [])
    

    const addToLiked = () => {
        if (!USER_LOGGED_IN) return

        let currentLikedByArr = [];
        DataBase.collection('videos').doc(videoId).get()
            .then((video) => {
                if (video.exists) {
                    console.log('arr from base', video.data().likedBy)
                    let arr = [...video.data().likedBy]
                    currentLikedByArr = [...arr]
                    console.log('currentLikeedArr,', currentLikedByArr)
                    if (!currentLikedByArr.includes(currentUserId)) {
                        currentLikedByArr.push(currentUserId)
                        console.log('video liked! arr now', currentLikedByArr)
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
                        console.log('exit')
                        let index = currentLikedByArr.indexOf(currentUserId)
                        currentLikedByArr.splice(index, 1);
                        
                        return DataBase.collection('videos').doc(videoId).update({
                            likedBy: [...currentLikedByArr],
                            numOfLikes: currentLikedByArr.length
                        })
                            .then(() => {
                                setVideoLikedByArr([...currentLikedByArr])
                                // console.log('Video deleted! inside UPDATE!!')
                                setLikes(likes - 1)
                                setIsVideoLiked(false)
                                // setButtonClicked(!buttonClicked);
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
                            <Link to = {`/user/${addBy}`}> 
                                <h3 className="bold">{displayName}</h3>
                                </Link>
                                <p className="username">{title}</p>
                            </div>
                            <p>{caption}</p>
                        </div>
               <div/>

                <div className='card-button-wrapper'>
                    <FollowButton addBy={addBy} USER_LOGGED_IN={USER_LOGGED_IN} currentUserId={currentUserId}/>
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

