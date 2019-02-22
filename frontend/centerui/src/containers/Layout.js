import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
  
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
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">My Center</Menu.Item>
                    <Menu.Item key="2">Popular</Menu.Item>
                    <SearchBar placeholder="Search All"/>
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
                            <Menu.Item key="1"><Link to="/mymovies">My List</Link></Menu.Item>
                            <Menu.Item key="2" selectedKeys={['movies']}><Link to="/movies">Movies List</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu align="left" key="sub2" title={<span><Icon type="laptop" />Television</span>}>
                            <Menu.Item key="5">My List</Menu.Item>
                            <Menu.Item key="6">Television List</Menu.Item>
                        </SubMenu>
                        <SubMenu align="left" key="sub3" title={<span><Icon type="notification" />Games</span>}>
                            <Menu.Item key="9">My List</Menu.Item>
                            <Menu.Item key="10">Games List</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/mymovies">Movies</Link></Breadcrumb.Item>
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
