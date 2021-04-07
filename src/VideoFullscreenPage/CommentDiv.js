import viewPageStyles from "./ViewFullScreenVideo.module.scss";
import {FaHeart} from "react-icons/fa";


export default function CommentDiv ({photoUrl, comment, name, timeStamp} ) {


    return (

        <div className={viewPageStyles.comment}>
            <div className={viewPageStyles.avatar}>
                <img src={photoUrl} alt="avatar" className={viewPageStyles.avatar}></img>
                </div>
            <div className={viewPageStyles.commentContent}>
                <h3 className={viewPageStyles.titleComent}>{name}</h3>
                <p className={viewPageStyles.coment}>{comment}</p>
                <span>{timeStamp}</span>
            </div>
            <div className={viewPageStyles.heart}>
                <FaHeart />
            </div>
        </div>
    )
}