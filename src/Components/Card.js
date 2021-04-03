import React,{useState} from 'react';
import { FaCommentDots, FaShare, FaHeart, FaBuromobelexperte } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({ videoUrl, likes, comments, title, fullName, caption, date, videoId, photo, USER_LOGGED_IN }) => {
    const [toggle,setToggle] = useState(false);
    const [following,setFollowing] = useState('Follow')
    const toogleClick = () => {
      setToggle(!toggle)
      if (!toggle){
           setFollowing('Following')
      }else {
          setFollowing('Follow')
      }
    }
    return (
        <div className="card">
            <div className="break" />
            <div className="section">
                <div className="user-info">
                    <img className="user-avatar" src={photo} width={'100%'} alt='username' />
                    <div>
                        <div className="section">
                            <h3 className="bold">{title}</h3>
                            <p className="username">{fullName}</p>
                        </div>
                        <p>{caption}</p>
                    </div>
                </div>

                <div className='card-button-wrapper'>
    <button className={toggle?'following-button':'follow-button'} onClick={toogleClick}>{following}</button>
                </div>
            </div>
            <video className="video" controls src={videoUrl}
            />

            <div className="section socials icons-conteiner">
                <div className='icon-wrapper'>
                    <FaHeart className="icons" />

                </div>
                <div className="social-tag"><span>{likes}</span></div>
                
                
                <div className='icon-wrapper'>
                    {USER_LOGGED_IN ?<Link to={`/viewVideo/${videoId}`}>
                    <FaCommentDots className="icons" />
                    </Link> : 
                    <FaCommentDots className="icons"/>
                    }                    
                
                </div>
                
                <div className="social-tag"><span>{comments}</span></div>
                <div className='icon-wrapper'>

                    <FaShare className="share" />
                </div>
                <div className="social-tag"><span>Share</span></div>
            </div>
        </div>
    )
}

export default Card