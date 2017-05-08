import './_main-wrapper.scss';

import React from 'react';
import { Layout, Icon, Breadcrumb } from 'antd';
import { connect } from 'react-redux';

import SideBar from 'components/side-bar/side-bar';
import sideBarButtons from './buttons';

const { Header, Content } = Layout;

class MainWrapper extends React.Component {
    parseBreadcrumbs() {
        const breadcrumbs = this.props.location.split('/').slice(1);

        return (
            <Breadcrumb separator=">">
                <Breadcrumb.Item><Icon type="home" /> Home</Breadcrumb.Item>
                {
                    breadcrumbs.map((location, index) => {
                        let text = !location ? 'index' : location;

                        return <Breadcrumb.Item key={index}>{text[0].toUpperCase() + text.substring(1)}</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        )
    }
    render() {
        return (
            <Layout className="container">
                <SideBar buttons={sideBarButtons} selected={this.props.location}/>
                <Layout className="scrollable">
                    <Header className="header">
                        {this.parseBreadcrumbs()}
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

const mapStateToProps = (state) => {
    return {
        location: state.get('router').location.pathname,
    }
};

export default connect(mapStateToProps)(MainWrapper);
