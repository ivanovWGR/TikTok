import ReactDOM from "react-dom"
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Carousel } from 'antd';
import viewPageStyles from "./ViewFullScreenVideo.module.scss"
import { FaCommentDots, FaHeart, FaMusic } from "react-icons/fa";
import { GrClose } from 'react-icons/gr'
import { DataBase } from "../firebase";
import CommentDiv from './CommentDiv';


// TO DO VALIDATION UP TO 200 letters for comment, enter to triger uploading. Styling.
export default function VideoFullScreen({ currentUserId }) {
    const { videoId } = useParams();
    const [user, setUser] = useState();
    const [currentVideo, takeCurrentVideo] = useState({})
    const [videoSrc, setVideoSrc] = useState("");
    const [userComment, setUserComment] = useState("");
    const [input, setInput] = useState("");
    const [comments, setComments] = useState([])
    const history = useHistory();
    // console.log(videoId)
    useEffect(() => {
        DataBase.collection("videos").doc(videoId).get()
            .then((video) => {
                console.log(video.data())
                let src = video.data().url;
                let temp = { ...video.data() }
                setVideoSrc(src)
                takeCurrentVideo(temp)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [videoId])

    useEffect(() => {
        const fetchedComments = []
        DataBase.collection('comments').where('forVideoId', '==', videoId).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((el) => {
                    fetchedComments.push(el.data())

                })
                setComments(fetchedComments)

            })


    }, [videoId])
    useEffect(() => {
        return DataBase.collection('videos').doc(videoId).update({
            numOfComments: comments.length

        })
            .then(() => {
                console.log('Comments length: ', comments.length)
                console.log("num of comments updated")
            })
    }, [comments])


    useEffect(() => {
        DataBase.collection('users').doc(currentUserId).get()
            .then((res) => {

                setUser(res.data())
            })
    }, [currentUserId])


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
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    let numOfComments = comments.length
    // console.log(user.photoUrl)
    // console.log('video',currentVideo)
    return (
        <div className={viewPageStyles.viewContainer}>
            <button onClick={goToHomePage} className={viewPageStyles.closeBtn}><GrClose /></button>
            <div className={viewPageStyles.CarouselWrapper}>

                <video controls src={videoSrc} className={viewPageStyles.video}>
                </video>
            </div>


            <div className={viewPageStyles.commentsContainer}>
                <div className={viewPageStyles.commentsHeader}>

                    <h1 className={viewPageStyles.uploaderInfo}>
                        <img src={currentVideo.photoUrl} alt="pic" className={viewPageStyles.uploaderPic} />
                        {currentVideo.displayName}</h1>
                    <button className={`follow-button ${viewPageStyles.followBtn}`}>Follow</button>
                </div>

                <div className={viewPageStyles.commentsWrapper}>
                    <div className={viewPageStyles.videoInfo}>
                        <h1>{currentVideo.title}</h1>
                        <p className={viewPageStyles.caption}><FaMusic />{currentVideo.caption}</p>
                        <div className={viewPageStyles.iconsDiv}>
                            <span><FaHeart className={viewPageStyles.icons} /></span><span>Num of likes</span>
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
                                console.log(input)
                            }
                            }
                        ></input>
                        <button type="submit" onClick={uploadComment}> Post</button>
                    </form>
                </div>
            </div>
        </div>

    )

}