import ReactDOM from "react-dom"
import { Carousel } from 'antd';
import viewPageStyles from "./ViewFullScreenVideo.module.scss"
import { FaCommentDots, FaHeart } from "react-icons/fa";



export default function VideoFullScreen() {


    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    // const contentStyle = {
    //     height: '50px',    



    // };

    return (

        <div className={viewPageStyles.viewContainer}>
            <div className={viewPageStyles.CarouselWrapper}>
                <Carousel afterChange={onChange} className={viewPageStyles.Carousel}>
                    <div className={viewPageStyles.videoWrapper}>
                        <video controls
                            // className={contentStyle} 
                            src="https://v77.tiktokcdn.com/3439fcbdb3b94fa8b9958469efeb175d/605fd956/video/tos/useast2a/tos-useast2a-ve-0068c002/70fdf3baf7854b6bb5da3a293c74a21e/?a=1233&br=2162&bt=1081&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210327191758010189066032329544EB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amlod2pnZDhoNDMzOzczM0ApZzk3NTRmN2U3N2VlZ2ZkPGcwMTIvLmIxbGNgLS1gMTZzc15jYTA2NjIxXzIyYC9hNmE6Yw%3D%3D&vl=&vr=" />
                        {/* <h3 style={contentStyle}>1</h3> */}
                    </div>
                    <div className={viewPageStyles.videoWrapper}>
                        <video controls
                            // className={contentStyle} 
                            src="https://v77.tiktokcdn.com/3439fcbdb3b94fa8b9958469efeb175d/605fd956/video/tos/useast2a/tos-useast2a-ve-0068c002/70fdf3baf7854b6bb5da3a293c74a21e/?a=1233&br=2162&bt=1081&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210327191758010189066032329544EB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amlod2pnZDhoNDMzOzczM0ApZzk3NTRmN2U3N2VlZ2ZkPGcwMTIvLmIxbGNgLS1gMTZzc15jYTA2NjIxXzIyYC9hNmE6Yw%3D%3D&vl=&vr=" />
                        {/* <h3 style={contentStyle}>2</h3> */}
                    </div>
                    <div className={viewPageStyles.videoWrapper}>
                        <video controls
                            // className={contentStyle} 
                            src="https://v77.tiktokcdn.com/3439fcbdb3b94fa8b9958469efeb175d/605fd956/video/tos/useast2a/tos-useast2a-ve-0068c002/70fdf3baf7854b6bb5da3a293c74a21e/?a=1233&br=2162&bt=1081&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210327191758010189066032329544EB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amlod2pnZDhoNDMzOzczM0ApZzk3NTRmN2U3N2VlZ2ZkPGcwMTIvLmIxbGNgLS1gMTZzc15jYTA2NjIxXzIyYC9hNmE6Yw%3D%3D&vl=&vr=" />

                    </div>
                    <div className={viewPageStyles.videoWrapper}>
                        <video controls
                            // className={contentStyle} 
                            src="https://v77.tiktokcdn.com/3439fcbdb3b94fa8b9958469efeb175d/605fd956/video/tos/useast2a/tos-useast2a-ve-0068c002/70fdf3baf7854b6bb5da3a293c74a21e/?a=1233&br=2162&bt=1081&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210327191758010189066032329544EB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amlod2pnZDhoNDMzOzczM0ApZzk3NTRmN2U3N2VlZ2ZkPGcwMTIvLmIxbGNgLS1gMTZzc15jYTA2NjIxXzIyYC9hNmE6Yw%3D%3D&vl=&vr=" />

                    </div>
                </Carousel>
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
                        <p>Video URL</p>
                    </div>
                    <div className={viewPageStyles.comment}>
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
                            <FaHeart  />
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
                </div>
                <div className={viewPageStyles.addCommentContainer}>
                    <input placeholder="Add comment" className={viewPageStyles.postInput}></input>
                    <button> Post</button>
                </div>
            </div>
        </div>

    )

}