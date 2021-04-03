import viewPageStyles from "./ViewFullScreenVideo.module.scss";
import {FaHeart} from "react-icons/fa";


export default function CommentDiv ({photoUrl, comment, name, timeStamp} ) {


    return (

        <div className={viewPageStyles.comment}>
            <div className={viewPageStyles.avatar}>
                <img src={photoUrl} alt="avatar" className={viewPageStyles.avatar}></img>
                </div>
            <div className={viewPageStyles.commentContent}>
                <h3>{name}</h3>
                <p>{comment}</p>
                <span>{timeStamp}</span>
            </div>
            <div className={viewPageStyles.heart}>
                <FaHeart />
            </div>
        </div>
    )
}