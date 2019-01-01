import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
  
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
            <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <SubMenu align="left" key="sub1" title={<span><Icon type="user" />Movies</span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                </SubMenu>
                <SubMenu align="left" key="sub2" title={<span><Icon type="laptop" />Television</span>}>
                    <Menu.Item key="5">option1</Menu.Item>
                    <Menu.Item key="6">option2</Menu.Item>
                </SubMenu>
                <SubMenu align="left" key="sub3" title={<span><Icon type="notification" />Games</span>}>
                    <Menu.Item key="9">option1</Menu.Item>
                    <Menu.Item key="10">option2</Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">Movies</Link></Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                {props.children}
                </Content>
            </Layout>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;
