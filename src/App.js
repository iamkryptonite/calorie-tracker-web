import './App.css';
import 'antd/dist/antd.less'
import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import PageRouter from './components/PageRouter';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
      }}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            {/* <Link to="/">Dashboard</Link> */}
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Track
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '32px 32px',justifyContent:'center',alignContent:'center',alignItems:'center' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, maxWidth:1000,margin:'auto' }}>
            <PageRouter/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
