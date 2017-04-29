import './_main.styl';

import React from 'react';
import { Layout } from 'antd';

import SideBar from 'components/side-bar/side-bar';
import sideBarButtons from './buttons';

const { Header, Content } = Layout;

export default class MainWrapper extends React.Component {
    render() {
        return (
            <Layout className="container">
                <SideBar buttons={sideBarButtons} selected={'main'}/>
                <Layout>
                    <Header/>
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
