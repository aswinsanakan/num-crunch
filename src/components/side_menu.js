import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class SideMenu extends Component {
  render() {
    return (
      <Sider>
        <div className="logo" >Billions</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>About</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SideMenu;