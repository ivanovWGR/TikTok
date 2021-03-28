import viewPageStyles from "./ViewFullScreenVideo.module.scss";
import {FaHeart} from "react-icons/fa";


export default function CommentDiv () {


    return (

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
    )
}