import './_welcome.styl';

import { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';

import SideBar from 'components/side-bar/side-bar';

const { Header, Content } = Layout;

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username } = this.props;
        const sideBarButtons = [
            {
                key: 'main',
                title: 'Main Page',
                icon: 'appstore',
                href: '#'
            },
            {
                key: 'profile',
                title: 'Profile',
                icon: 'meh-o',
                href: '#'
            },
            {
                key: 'game',
                title: 'Game',
                icon: 'code',
                href: '#'
            },
            {
                key: 'results',
                title: 'Results',
                icon: 'pie-chart',
                href: '#'
            },
            {
                key: 'materials',
                title: 'Materials',
                icon: 'book',
                href: '#'
            },
        ];

        return (
            <Layout className="container">
                <SideBar buttons={sideBarButtons} selected={'main'}/>
                <Layout>
                    <Header/>
                    <Content style={{ margin: '20px 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.get('user').get('name')
    }
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Welcome);
