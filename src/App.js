import "antd/dist/antd.css";
import "./App.css";
import HeaderComp from "./HeaderComp";
import Card from "./Components/Card";

import UserItem from './Sidebar/UserItem/UserItem'
import ForYouButton from './Sidebar/ForYou/ForYouBtn'
import FollowingBtn from './Sidebar/Following/FollowingBtn'
import SidebarLoginBtutton from './Sidebar/SidebarLogin/SidebarLoginBtn'
import SidebarFooter from './Sidebar/SidebarFooter/sidebarFooter'
import SeeAllButton from './Sidebar/seeAllButton/SeeAllButton'

import { Layout } from "antd";
const { Content, Sider } = Layout;

function App() {
  const videos = [
    "https://v77.tiktokcdn.com/97f4be8b12187c9ae61d76a37e0552a5/6057b3c1/video/tos/useast2a/tos-useast2a-ve-0068c003/7ec9d4d1216b475cb0b4d5bba5b4fc6e/?a=1233&br=4544&bt=2272&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211459350101890711493DE84B45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajo1O3I2cjRsNDMzMzczM0ApNDs4ZDo1N2RlN2k2NmhpPGdvMWhvZGU2LTVgLS0xMTZzczJjYi1gYV9eNWMxMGJfLy86Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/54a345ec33f38c78332a9607e43067db/6057b3c3/video/tos/useast2a/tos-useast2a-ve-0068c004/f453d0925b73448ea20aa5cd5cf442c1/?a=1233&br=2822&bt=1411&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211459350101890711493DE84B45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ang6OW1rajlrNDMzZTczM0ApNjk5aWU2NDs7N2U3OTg4Omc0ZzJjb3BtLzNgLS01MTZzc2I2LWEyXzZjNmA2MF4xYzQ6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/8ad36955a423343977f6a0fa73b79544/6057b3c1/video/tos/useast2a/tos-useast2a-pve-0068/96fadef60f52424eb62cf192a0fa9d03/?a=1233&br=4904&bt=2452&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211459350101890711493DE84B45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajkzM2c6ZG5yNDMzODczM0ApNDxpMzZkNWUzN2c0NWdoPGdraV9tNDNgNV5gLS1eMTZzcy1iYjAxNWFfMDU1YWNfLmE6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/4493f2b9a73d3df7e1febbbd48c1e206/6057b3c2/video/tos/useast2a/tos-useast2a-ve-0068c003/d19ad17f6a9c42aa955cd55af21cb5a1/?a=1233&br=2778&bt=1389&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211459350101890711493DE84B45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajk4dGpvdHltNDMzOjczM0ApaGg0ZjhoZmRoN2ZlZTs4N2dzamRvXmNrNDZgLS1gMTZzczE0MF4wX2I2YDEwLjUuYzM6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/1c0d52dc9508eea21732b293d8117ffb/6057b3cc/video/tos/useast2a/tos-useast2a-ve-0068c002/9af1f5049e2a4745adbcb45200e92a48/?a=1233&br=5764&bt=2882&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021032114593201018919416329E9517D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhvZ2xrbnVoMzMzaDczM0ApZGhlNTM1OTw7N2hoMzk2OmdqYW9xLWZtbnBgLS0uMTZzc2JgXl8vMjVhXjEwYDNeXjY6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/1f1a816c7196a79b3ed6993e1e0fc93f/6057b3be/video/tos/useast2a/tos-useast2a-ve-0068c003/a3eaf143c804477890c8cfe87dc76ca0/?a=1233&br=5212&bt=2606&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211459350101890711493DE84B45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Q4N2d0ZG45NDMzOTczM0ApM2k0NDpoODw5NzxpOmdoM2dsL2ZyXnFhYi5gLS0zMTZzcy4uNjReYWE0LS9iYV8tMmE6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/5cba41b773f350fb43fb66607a4fd55b/6057b4e1/video/tos/useast2a/tos-useast2a-ve-0068c003/baf564b4cea5460eb73085b999094e95/?a=1233&br=2450&bt=1225&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211503360101902190713AE8AFCC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anR5eWZzZ2xkMzMzPDczM0ApaDs7ZDxoaDtmNzVmOmQ1ZGcwMDRqc19ucW5gLS01MTZzc2AyYWIwLWNeY19fXl81YzE6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/8ab12c7ca97be2fb626006d79dc1edd9/6057b4b6/video/tos/useast2a/tos-useast2a-ve-0068c003/08ac34abde2541b7a83bece11921cc15/?a=1233&br=1990&bt=995&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211503360101902190713AE8AFCC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdsampvZzpxMzMzZzczM0ApZWloNWQ1ZztoNztpZTdkZGdrNm5qLXJucHNgLS1jMTZzc2BeLTNjYDNhLmEtXzEzNS86Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/b84d4874bbe1f01a885ab2608d5fab0f/6057b4c8/video/tos/alisg/tos-alisg-pve-0037c001/a19c9a2662604a5aba418bb1a0aa5802/?a=1233&br=3974&bt=1987&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211503360101902190713AE8AFCC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2s2azZleHNrMzMzOzczM0ApNmU2MzQzZGU5NzloNWk8ZmdsXl4yLW01MjFgLS1iMTRzczJeNjYxMDM2X2E1LmNfYzA6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/01bd75a6e8aae72f0bd4685e0e5d4bef/6057b4b9/video/tos/useast2a/tos-useast2a-ve-0068c002/a781531554b247948fd6bea0285ef227/?a=1233&br=2482&bt=1241&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211503360101902190713AE8AFCC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdvbDlwbDY8NDMzZzczM0ApNjs8PDc2NmRnNzk6Ojk0aWdtYV8tNXI2NjVgLS01MTZzczIzLjA2Y2NhMzYvYzFhYjY6Yw%3D%3D&vl=&vr=",
    "https://v77.tiktokcdn.com/20bdce935777b845d2a94420a58136dc/6057b4b3/video/tos/useast2a/tos-useast2a-ve-0068c004/23739f29384248a9ba3177bec146cf7f/?a=1233&br=1122&bt=561&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103211503360101902190713AE8AFCC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZ5N2d0ZDhxNDMzOTczM0ApN2c8Zmc2NWU5N2ZoZTtoZ2dkMGpyXnEyMDZgLS0zMTZzczRjNTYwLjMzXzNjMWI1LTY6Yw%3D%3D&vl=&vr=",
  ];
  return (
    <Layout>
      <HeaderComp />
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
            <SeeAllButton />
            <SidebarFooter />
          </div>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content className="site-layout-background contentContainer">
            {videos.map((url, index) => {
              return <Card key={index} videoUrl={url} />;
            })}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
