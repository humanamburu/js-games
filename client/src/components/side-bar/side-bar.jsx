import './_side-bar.scss';

import React from 'react';
import { Layout, Menu, Icon } from 'antd';

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
        return array.map(({ key, icon, title, href }) => {
            return (
                <Menu.Item key={key}>
                    <a href={href}>
                        <Icon type={icon}/>
                        <span className="nav-text">{title}</span>
                    </a>
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
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={[this.props.selected]}>
                    {this.mapButtons(this.props.buttons)}
                </Menu>
            </Layout.Sider>
        );
    }
}
