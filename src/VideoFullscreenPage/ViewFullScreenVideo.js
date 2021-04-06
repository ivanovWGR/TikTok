import ReactDOM from "react-dom"
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Carousel } from 'antd';
import viewPageStyles from "./ViewFullScreenVideo.module.scss"
import { FaCommentDots, FaHeart, FaMusic, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { GrClose } from 'react-icons/gr'
import { DataBase } from "../firebase";
import CommentDiv from './CommentDiv';
import FollowButton from '../Components/FollowButton'
import { notification, Button } from "antd";
let nextVideoBtnPressed = false;

let nextVideoIndex = 0;

// TO DO VALIDATION UP TO 200 letters for comment, enter to triger uploading. Styling.
export default function VideoFullScreen({ currentUserId, USER_LOGGED_IN }) {
    const { videoId } = useParams();
    const [user, setUser] = useState();
    const [currentVideo, takeCurrentVideo] = useState({})
    const [videoSrc, setVideoSrc] = useState("");
    const [userComment, setUserComment] = useState("");
    const [uploaderId, setUploaderId] = useState("");
    const [thisUserVideosIds, setThisUserVideosIds] = useState([]);
    const [input, setInput] = useState("");
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [numOfLikes, setNumOfLikes] = useState(0)
    // console.log(videoId)

    useEffect(() => {
        setIsLoading(true);

        DataBase.collection("videos").doc(videoId).get()
            .then((video) => {
                console.log(video.data())
                let src = video.data().url;
                let temp = { ...video.data() }
                setNumOfLikes(temp.likedBy.length)
                setUploaderId(temp.addBy)
                setVideoSrc(src)
                takeCurrentVideo(temp)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })


        const fetchedComments = []
        DataBase.collection('comments').where('forVideoId', '==', videoId).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((el) => {
                    fetchedComments.unshift(el.data())
                })
                setComments(fetchedComments)
            })
        //CAROUSEL VIDEOS QUERRY

    }, [videoId])

    useEffect(() => {
        const allVideosOfThisUser = [];
        nextVideoIndex = 0;
        DataBase.collection('videos').where('addBy', '==', uploaderId).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((userVideo) => {
                    // let video = { ...userVideo.data() }
                    // video.videoId = userVideo.id
                    if (userVideo.id !== videoId) {
                        allVideosOfThisUser.push(userVideo.id)
                    }
                })
                setThisUserVideosIds([...allVideosOfThisUser])
            })
    }, [uploaderId])


    useEffect(() => {
        return DataBase.collection('videos').doc(videoId).update({
            numOfComments: comments.length
        })
            .then(() => {
                // console.log('Comments length: ', comments.length)
                // console.log("num of comments updated")
            })
    }, [comments, videoId])


    useEffect(() => {
        if (!currentUserId) return;

        DataBase.collection('users').doc(currentUserId).get()
            .then((res) => {

                setUser(res.data())
            })
    }, [currentUserId])
    const openNotification = (ev) => {
        ev.preventDefault()
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => {
                notification.close(key)
            }}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Search notification',
            description: 'Please log in first.',
            btn,
            key,
        });
    };

    const uploadComment = (ev) => {        
        ev.preventDefault()
        console.log("event :", ev)
        if (input.trim().length < 200) {
            let date = new Date().toDateString()
            const commentObj = {
                addedByUUID: currentUserId,
                timeStamp: date,
                forVideoId: videoId,
                numOfLikes: 0,
                comment: input,
                userName: user.displayName,
                photoUrl: user.photoUrl

            }
            DataBase.collection("comments").doc().set(commentObj)
                .then(() => {
                    console.log("Document successfully written!");
                    setInput("")
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            setComments([...comments, commentObj])
            return DataBase.collection('videos').doc(videoId).update({
                numOfComments: comments.length

            })
                .then(() => {
                    console.log('Comments length: ', comments.length)
                    console.log("num of comments updated")
                })

        } else {
            alert("Comments should be max 200 letters.")
        }


    }
    const goToHomePage = () => {

        history.push("/")
    }
    const previousVideo = () => {
        console.log('Value of i inside prevFunc: ', nextVideoIndex)
        // if (i === thisUserVideosIds.length) {
        //     hideForwardBtn = true
        // } else {
        //     hideForwardBtn = false;
        // }
        nextVideoBtnPressed = false;
        history.goBack()
        nextVideoIndex -= 1;

    }
    const nextVideo = () => {
        nextVideoBtnPressed = true;
        if (thisUserVideosIds.length > 0 && nextVideoIndex < thisUserVideosIds.length - 1) {
            history.push(`/viewVideo/${thisUserVideosIds[nextVideoIndex]}`)
            nextVideoIndex += 1;
        }

    }

    let numOfComments = comments.length
    const onErrorLoadingVideo = () => {

        if (nextVideoBtnPressed && ((nextVideoIndex + 2) < thisUserVideosIds.length)) {
            nextVideoIndex += 1;
            console.log('In IF')
            nextVideo();
        } else {
            nextVideoIndex -= 1;
            console.log('Else')
            previousVideo();
        }
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className={viewPageStyles.viewContainer}>
            <div className={viewPageStyles.CarouselWrapper}>
                <button onClick={goToHomePage} className={viewPageStyles.closeBtn}><GrClose /></button>
                {nextVideoIndex < (thisUserVideosIds.length - 1) ? <button onClick={nextVideo} className={viewPageStyles.nextVideoBtn}><FaArrowRight /></button> : null}
                {nextVideoIndex === 0 ? null : <button onClick={previousVideo} className={viewPageStyles.previousVideoBtn}><FaArrowLeft /></button>}
                <video onError={(err) => { if (err) { console.log('Err', err); onErrorLoadingVideo() } }} controls src={videoSrc} className={viewPageStyles.video}>
                </video>
            </div>
            <div className={viewPageStyles.commentsContainer}>
                <div className={viewPageStyles.commentsHeader}>
                    <h1 className={viewPageStyles.uploaderInfo}>
                        <img src={currentVideo.photoUrl} alt="pic" className={viewPageStyles.uploaderPic} />
                        {currentVideo.displayName}</h1>
                    <FollowButton addBy={uploaderId} USER_LOGGED_IN={USER_LOGGED_IN} />
                </div>
                <div className={viewPageStyles.commentsWrapper}>
                    <div className={viewPageStyles.videoInfo}>
                        <h1>{currentVideo.title}</h1>
                        <p className={viewPageStyles.caption}><FaMusic />{currentVideo.caption}</p>
                        <div className={viewPageStyles.iconsDiv}>
                            <span><FaHeart className={viewPageStyles.icons} /></span><span>{numOfLikes}</span>
                            <span><FaCommentDots className={viewPageStyles.icons} /></span><span>{numOfComments}</span>
                        </div>

                        <div className={viewPageStyles.adressDiv}>
                            <p>{videoSrc}</p>
                        </div>
                    </div>
                    {comments.map((el, index) => {
                        return <CommentDiv

                            key={index}
                            photoUrl={el.photoUrl}
                            comment={el.comment}
                            timeStamp={el.timeStamp}
                            name={el.userName}
                        />
                    })}
                </div>
                <div className={viewPageStyles.addCommentContainer}>
                    <form className={viewPageStyles.form}>
                        <input placeholder="Add comment" value={input} className={viewPageStyles.postInput}
                            onInput={(ev) => {
                                setInput(ev.target.value)
                            }
                            }
                        ></input>
                        <button type="submit" onClick={USER_LOGGED_IN ? uploadComment : openNotification}> Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}