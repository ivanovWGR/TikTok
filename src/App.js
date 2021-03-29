import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderComp from './HeaderComponents/HeaderComp';
import "antd/dist/antd.css";
import "./App.css";

import Card from "./Components/Card";

import UserItem from './Sidebar/UserItem/UserItem';
import ForYouButton from './Sidebar/ForYou/ForYouBtn';
import FollowingBtn from './Sidebar/Following/FollowingBtn';
import SidebarLoginBtutton from './Sidebar/SidebarLogin/SidebarLoginBtn';
import SidebarFooter from './Sidebar/SidebarFooter/sidebarFooter';
import SeeAllButton from './Sidebar/seeAllButton/SeeAllButton';
import { Layout } from "antd";
import Upload from './UploadPage/Upload';
import ViewFullScreenVideo from './VideoFullscreenPage/ViewFullScreenVideo';
import UserPage from './ProfilePage/UserProfile';
const { Content, Sider } = Layout;


function App() {  
  const USER_LOGGED_IN = true;//for test only, change the value will change the header header
  const videos = [{
    addedBy: "Slatkata",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
    likes: 254,
    comments: 125
  },
  {
    addedBy: "Kotence",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
    likes: 12,
    comments: 65
  }, {
    addedBy: "chikiri",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
    likes: 254,
    comments: 33
  },
  {
    addedBy: "Slatkata",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/7ffcc00b4d076a0d12f9d3cde7afcadd/605e2cbe/video/tos/useast2a/tos-useast2a-pve-0068/78596fbff11f4249b83ea4a9e50fcf43/?a=1233&br=894&bt=447&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amh3bTM2b3N3NDMzPDczM0ApM2dmZGc8N2U3NzYzZmU6Omdvb3BkMmViMTRgLS00MTZzczVhNjBfLmI2X15iLi4yMWM6Yw%3D%3D&vl=&vr=",
    likes: 254,
    comments: 1589
  },
  {

    addedBy: "pencho",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
    likes: 665,
    comments: 745
  },
  {
    addedBy: "Azis",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
    likes: 254,
    comments: 456
  },
  {
    addedBy: "Slatkata",
    name: "Penka Petkova",
    url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
    likes: 785,
    comments: 125
  },
  {
    addedBy: "ChikiRiki",
    name: "Pesho",
    url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
    likes: 44,
    comments: 125
  },
  {
    addedBy: "Slatkata",
    name: "Toni",
    url: "https://v77.tiktokcdn.com/ae36c6881c41eaa58af865189f8e40d5/605e2cdf/video/tos/useast2a/tos-useast2a-ve-0068c002/fccd792d58e14a6a852511b5a4556ac8/?a=1233&br=1734&bt=867&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210326124908010189071071320D1A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs2ZGxyNHBpNDMzNDczM0ApNGZmZTxnNjs6NzlpZWhnZmc0bWE1cmhnLmFgLS0xMTZzc2FfXzZfLTI2YC81LWE2MF86Yw%3D%3D&vl=&vr=",
    likes: 254,
    comments: 11
  }]
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setFiltered(videos)
    
  }, [])

  const searchByName = (value) => {   
    const temp = videos.filter(video => video.addedBy.toLowerCase().includes(value.toLowerCase()))
    setFiltered(temp)
    console.log(temp)
    return value
  }



  return (
    <Router>
      <HeaderComp isUserLoggedIn={USER_LOGGED_IN} getInput={searchByName} />
      <Switch>
        <Route path="/viewVideo">
          <ViewFullScreenVideo />
        </Route>

        <Route path="/upload">
          <Upload />
        </Route>

         <Route path="/userprofile">
                <UserPage/>
         </Route>

        <Route exact path="/">
          <Layout>
            <Layout>
              <Sider width={250} className="site-layout-background siderConteiner">
                <div className="siderWrapper">
                  <ForYouButton />
                  <FollowingBtn />
                  <SidebarLoginBtutton />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <SeeAllButton />
                  <SidebarFooter />
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                  {filtered.map(({ url, likes, comments, addedBy, name }, index) => {
                    return <Card key={index} videoUrl={url} likes={likes} comments={comments} nickname={addedBy} fullName={name} />;

                  })}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
