import React from 'react';
import "antd/dist/antd.css";
import styles from './UserProfile.module.scss';
import ShowSidebar from '../Sidebar/Sidebar'
import UserInfo from './UserInfo';
import UserVideoTab from './UserVideoTab'

import { Layout } from "antd";
const { Content, Sider } = Layout;

const UserPage = () => {
    return (
        <div>
            <Layout>
            <Layout>
            <Sider width={250} className="site-layout-background siderConteiner">
                <div className="siderWrapper">
                  <ShowSidebar/>
                </div>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                    <UserInfo />
                    <UserVideoTab/>
                </Content>
            </Layout>
            </Layout>
          </Layout>
        </div>

    )
}

export default UserPage;