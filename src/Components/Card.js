import React from 'react';

const Card = () => {

    return (
        <div className="card">
            <div className="break" />
            <div className="section">
                <div className="user-info">
                    <img className="user-avatar" src='https://pbs.twimg.com/profile_images/1245370888830279687/Yg52KzMm.jpg' width={'100%'} alt='username' />

                    <div>
                        <div className="section">
                            <h3 className="bold">Username</h3>
                            <p className="username">Full name</p>
                            <p>Date</p>
                        </div>
                        <p>Description will be here</p>
                    </div>
                </div>

                <div className='card-button-wrapper'>
                    <button className='follow-button'>Follow</button>
                </div>
            </div>
            <video className="video" controls>
                <source src='./testvideo/dog.mp4' type="video/mp4" />
            </video>
            <div className="section socials icons-conteiner">
                <div className='icon-wrapper'>
                    <i className="fas fa-heart icons"></i>
                </div>
                <div className="social-tag">likes</div>
                <div className='icon-wrapper'>
                    <i className="fas fa-comment-dots icons"></i>
                </div>
                <div className="social-tag">comments</div>
                <div className='icon-wrapper'>
                    <i className="fas fa-share share"></i>
                </div>
                <div className="social-tag">shares</div>
            </div>
        </div>
    )
}

export default Card