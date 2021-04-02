import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './UserProfile.module.scss';
import { Tabs } from 'antd';
import Video from './Video'

const { TabPane } = Tabs;

// const videos = [{
//     addedBy: "Slatkata",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
//     likes: 254,
//     comments: 125
// },
// {
//     addedBy: "Kotence",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
//     likes: 12,
//     comments: 65
// }, {
//     addedBy: "chikiri",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
//     likes: 254,
//     comments: 33
// },
// {
//     addedBy: "Slatkata",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
//     likes: 254,
//     comments: 1589
// },
// {

//     addedBy: "pencho",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
//     likes: 665,
//     comments: 745
// },
// {
//     addedBy: "Azis",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
//     likes: 254,
//     comments: 456
// },
// {
//     addedBy: "Slatkata",
//     name: "Penka Petkova",
//     url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
//     likes: 785,
//     comments: 125
// },
// {
//     addedBy: "ChikiRiki",
//     name: "Pesho",
//     url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
//     likes: 44,
//     comments: 125
// },
// {
//     addedBy: "Slatkata",
//     name: "Toni",
//     url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
//     likes: 254,
//     comments: 11
// }]





const UserVideoTab = ({userVideos, likedVideos}) => {

    function callback(key) {
        console.log(key);
    }

    return (
        <Tabs defaultActiveKey="Videos" onChange={callback} size="large" className={styles.tabWrapper}>
            <TabPane tab="Videos" key="Videos">
                <div className={styles.videosCont}>
                    {userVideos.map(video => (
                       <Link to='/viewVideo'> <Video url={video.url} /></Link>
                    ))}
                </div>
            </TabPane>

            <TabPane tab="Liked" key="Liked">
                <div className={styles.videosCont}>
                    {/* testing only four videos */}
                    {likedVideos.map(video => (
                       <Link to='/viewVideo'> <Video url={video.url} /></Link>
                    ))}
                </div>
            </TabPane>

        </Tabs>

    )
}

export default UserVideoTab;