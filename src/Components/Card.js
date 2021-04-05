import React, { useEffect, useState } from 'react';
import { FaCommentDots, FaShare, FaHeart, FaBuromobelexperte } from "react-icons/fa";
import { Link } from 'react-router-dom';
import firebase, { DataBase } from '../firebase'



    const Card = ({addBy, url, likes, comments, title, caption, displayName, videoId, photoUrl, USER_LOGGED_IN }) => {
        const [toggle, setToggle] = useState(false);
        const [following, setFollowing] = useState('Follow')
        const [currentAccount, setCurrentAccount] = useState([]);

        let currentUser = "";
        if(USER_LOGGED_IN) {
            currentUser = firebase.auth().currentUser.uid;
        }
        useEffect(() => {
            DataBase.collection("users")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if (doc.id === currentUser) {
                  let res = {...doc.data()}
                  setCurrentAccount([...res.following])
                }
              });
            })
            .catch((error) => {
              console.log("Error getting document:", error);
            });

        },[USER_LOGGED_IN, currentUser])

          
        const toogleClick = () => {
            setToggle(!toggle)
            if(USER_LOGGED_IN){
                console.log(currentAccount)
                if (currentAccount.includes(addBy)) {
                    setFollowing('Follow')
                }else {
                    setFollowing('Following')
                }

                setToggle(!toggle)
                if (!toggle) {
                    setFollowing('Following')
                } else {
                    setFollowing('Follow')
                }
            }
        }

        return (
            <div className="card">
                <div className="break" />
                <div className="section">
                    <Link to = {`/user/${addBy}`}>
                        <div className="user-info">
                            <img className="user-avatar" src={photoUrl} width={'100%'} alt='username' />
                            <div>
                                <div className="section">
                                    <h3 className="bold">{title}</h3>
                                    <p className="username">{displayName}</p>
                                </div>
                                <p>{caption}</p>
                            </div>
                        </div>
                    </Link>
                    <div className='card-button-wrapper'>
                        {currentAccount.includes(addBy) && USER_LOGGED_IN ? <button className={'following-button'} onClick={toogleClick}>Following</button>:
                        <button className={'follow-button'} onClick={toogleClick}>Follow</button>}
                    </div>
                </div>

                <video className="video" controls src={url}/>
                <div className="section socials icons-conteiner">
                    <div className='icon-wrapper'>
                        <FaHeart className="icons" />
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
                    <div className="social-tag"><span>Share</span></div>
                </div>
            </div>
        )
    }
export default Card

