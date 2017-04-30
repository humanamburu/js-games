import './_main-wrapper.scss';

import React from 'react';
import { Layout, Icon, Breadcrumb } from 'antd';

import SideBar from 'components/side-bar/side-bar';
import sideBarButtons from './buttons';

const { Header, Content } = Layout;

export default class MainWrapper extends React.Component {
    render() {
        return (
            <Layout className="container">
                <SideBar buttons={sideBarButtons} selected={'main'}/>
                <Layout className="scrollable">
                    <Header className="header">
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Main</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="social">
                            <a className="item" href="https://github.com/humanamburu/web-knight">
                                <Icon type="star-o"/>
                                <span>GitHub</span>
                            </a>
                            <a className="item" href="https://github.com/humanamburu/web-knight">
                                <Icon type="star-o"/>
                                <span>Twitter</span>
                            </a>
                            <a className="item" href="https://github.com/humanamburu/web-knight">
                                <Icon type="star-o"/>
                                <span>Facebook</span>
                            </a>
                        </div>
                    </Header>
                    <Content className="content">
                        <div className="list">
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
