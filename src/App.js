import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less's
import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import Dashboard from './components/pages/Dashboard';
import PageRouter from './components/PageRouter';

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
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, maxWidth:1000,justifyContent:'center',alignContent:'center',alignItems:'center' }}>
            {/* <Dashboard/> */}
            <PageRouter/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
