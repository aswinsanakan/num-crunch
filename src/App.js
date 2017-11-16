import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/side_menu'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <SideMenu 
          />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              Billions
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
            </Content>
            <Footer className="footer">
               Billions App ©2017 Created by Aswin Sanakan
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
