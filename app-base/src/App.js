
import React from "react";
import { hot } from 'react-hot-loader/root';
// import { VueInReact } from 'vuera';
import vueToReact from './vueToReact.js'
import Adapter from "./adapter2";
import SelfButton from './button'
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import VueToR from './vueToR'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './styles.css'

const App2Button= React.lazy(() => import("app2/Button"));

import Content3 from 'home/Content';
const Vue3Content = vueToReact(Content3);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.setValue = this.setValue.bind(this);
  }
  render() {
    const { name } = this.props;
    return (
      <BrowserRouter>
        <Layout className="page-wrap">
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">react17</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/vue3">vue3</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/react163">react163</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div style={{display: 'flex', flexDireaction: 'row'}}>
                  <Switch>
                    <Route path={'/react163'}>
                      <Adapter
                        {...this.state}
                        reactImporter={() => import("react163/newReact")}
                        reactDomImporter={() => import("react163/newReactDOM")}
                        importer={() => import("react163/Content")}
                      ></Adapter>
                    </Route>
                    <Route exact path={'/vue3'}>
                      <Vue3Content 
                        pdata="hello" 
                        
                      />
                    </Route>
                    <Route path={'/'}>
                      <React.Suspense fallback="Loading 111" >
                        <App2Button />
                      </React.Suspense>
                    </Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default hot(App);
