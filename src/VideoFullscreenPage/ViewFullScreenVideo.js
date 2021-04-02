import ReactDOM from "react-dom"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'antd';
import viewPageStyles from "./ViewFullScreenVideo.module.scss"
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { DataBase } from "../firebase";
import CommentDiv from './CommentDiv';



export default function VideoFullScreen({ currentUserId }) {
    const [user, setUser] = useState();
    const { videoId } = useParams();
    const [videoSrc, setVideoSrc] = useState("");
    const [userComment, setUserComment] = useState("");
    const [input, setInput] = useState("");
    const [comments, setComments] = useState([])
    // console.log(videoId)
    useEffect(() => {
        DataBase.collection("videos").doc(videoId).get()
            .then((video) => {
                console.log(video.data())
                let src = video.data().url;
                setVideoSrc(src)
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
                    console.log(el.data())
                })
                setComments(fetchedComments)
            })
    }, [videoId])
    useEffect(() => {
        DataBase.collection('users').doc(currentUserId).get()
            .then((res) => {
                setUser(res.data())
            })
    }, [currentUserId])
    const uploadComment = (ev) => {
        ev.preventDefault()
        if (input.trim()) {
            let date = new Date().toDateString()
            const commentObj = {
                addedByUUID: currentUserId,
                timeStamp: date,
                forVideoId: videoId,
                numOfLikes: 0,
                comment: input,
                userName: user.displayName,

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
        }

    }
    function onChange(a, b, c) {
        console.log(a, b, c);
    }


    return (
        <div className={viewPageStyles.viewContainer}>
            <div className={viewPageStyles.CarouselWrapper}>
                <video controls src={videoSrc} className={viewPageStyles.video}>
                </video>
            </div>


            <div className={viewPageStyles.commentsContainer}>
                <div className={viewPageStyles.commentsHeader}>
                    <h1 className={viewPageStyles.uploaderInfo}>UploaderName</h1>
                    <button className='follow-button'>Follow</button>
                    <p>video description</p>
                </div>

                <div className={viewPageStyles.commentsWrapper}>
                    <div className={viewPageStyles.videoInfo}>
                        <span><FaHeart className="icons" /></span><span>Num of likes</span>
                        <span><FaCommentDots className="icons" /></span><span>num of comments</span>
                        <p>{videoSrc}</p>
                    </div>

                    {comments.map((el, index) => {
                        return <CommentDiv
                            key={index}
                            comment={el.comment}
                            timeStamp={el.timeStamp}
                            name={el.userName}
                        />
                    })}
                    {/* <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div >
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div>
                    <div className={viewPageStyles.comment}>
                        <div className={viewPageStyles.avatar}><img src="" alt="avatar"></img></div>
                        <div className={viewPageStyles.commentContent}>
                            <h3>Name</h3>
                            <p>Comment</p>
                            <span>timestamp</span>
                        </div>
                        <div className={viewPageStyles.heart}>
                            <FaHeart />
                        </div>
                    </div> */}
                </div>
                <div className={viewPageStyles.addCommentContainer}>
                    <input placeholder="Add comment" value={input} className={viewPageStyles.postInput}
                        onInput={(ev) => {
                            setInput(ev.target.value)
                            console.log(input)
                        }
                        }
                    ></input>
                    <button onClick={uploadComment}> Post</button>
                </div>
            </div>
        </div>

    )

}