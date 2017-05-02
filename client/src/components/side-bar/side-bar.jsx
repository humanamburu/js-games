import './_side-bar.scss';

import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon, Badge } from 'antd';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
            mode: 'vertical',
            logoText: 'WK'
        };
    }

    onCollapse(collapsed) {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
            logoText: collapsed ? 'WK' : 'Web Knight',
        });
    }

    mapButtons(array) {
        return array.map(({ icon, title, href }) => {
            return (
                <Menu.Item key={href}>
                    <Link to={href}>
                        <Icon type={icon}/>
                        <span className="nav-text">{title}</span>
                    </Link>
                </Menu.Item>
            );
        })
    }

    render() {
        return (
            <Layout.Sider collapsible
                          collapsed={this.state.collapsed}
                          onCollapse={this.onCollapse.bind(this)}>
                <div className="logo">{this.state.logoText}</div>
                <div className="user-helm">
                    <Badge count={5}>
                        <img src="https://cdn2.iconfinder.com/data/icons/helmet/512/sparta-soldier-helmet-warrior-head-safety-512.png" className="head" />
                    </Badge>
                </div>
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={[this.props.selected]}>
                    {this.mapButtons(this.props.buttons)}
                </Menu>
            </Layout.Sider>
        );
    }
}
