import 'antd/dist/antd.css';
import './App.css';

import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;


function App() {
  return (
    <Layout>

      <Header className="header">
        <h1 style={{ textAlign: 'center' }}>Header</h1>
      </Header>
      <Layout>

        <Sider width={250} className="site-layout-background siderConteiner">
          <div className='siderWrapper'>
            <h1>Side bar</h1>
          </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>

          <Content className="site-layout-background contentContainer">
            <h1 style={{ marginLeft: '235px' }}>Content</h1>
          </Content>

        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
