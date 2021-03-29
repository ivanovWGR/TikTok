import React from 'react';
import "antd/dist/antd.css";
import styles from './UserProfile.module.scss';

import UserItem from '../Sidebar/UserItem/UserItem';
import ForYouButton from '../Sidebar/ForYou/ForYouBtn';
import FollowingBtn from '../Sidebar/Following/FollowingBtn';
import SidebarLoginBtutton from '../Sidebar/SidebarLogin/SidebarLoginBtn';
import SidebarFooter from '../Sidebar/SidebarFooter/sidebarFooter';
import SeeAllButton from '../Sidebar/seeAllButton/SeeAllButton';
import UserInfo from './UserInfo';

import { Layout } from "antd";
const { Content, Sider } = Layout;

const UserPage = () => {
    return (
        <div>
            <Layout>
            <Layout>
            <Sider width={250} className="site-layout-background siderConteiner">
                <div className="siderWrapper">
                    <ForYouButton />
                    <FollowingBtn />
                    <SidebarLoginBtutton />
                    <UserItem />
                    <SeeAllButton />
                    <SidebarFooter />
                </div>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                    <UserInfo />
                </Content>
            </Layout>
            </Layout>
          </Layout>
        </div>

    )
}


export default UserPage;