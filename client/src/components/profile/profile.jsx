import './_profile.scss';

import React from 'react';
import { Badge, Row, Col, Progress, Card, Tag, Button } from 'antd';

export default class Profile extends React.Component {
    render() {
        return (
            <Row className="profile">
                <Row>
                    <h1>Profile info</h1>
                </Row>
                <Row>
                    <Col span={6}>
                        <Card title="Game progress" className="card">
                            <div className="nickname">Gladiator08</div>
                            <Badge count={5}>
                                <img className="avatar" src="https://cdn2.iconfinder.com/data/icons/helmet/512/sparta-soldier-helmet-warrior-head-safety-512.png"/>
                            </Badge>
                            <div className="section-name">Next level:</div>
                            <Progress percent={80} status="active"/>
                            <div className="section-name">Badges:</div>
                            <div className="badges">
                                <Tag color="red">Welcome</Tag>
                                <Tag color="green">DevTool trooper</Tag>
                                <Tag color="blue">5 stars</Tag>
                            </div>
                        </Card>
                    </Col>
                    <Col span={14}>
                        <Card title="General" className="card">
                            <dl className="info">
                                <dt>Login:</dt>
                                <dd>Gladiator08</dd>
                                <dt>Email:</dt>
                                <dd>Gladiator08@gmail.com</dd>
                                <dt>Nickname:</dt>
                                <dd>Gladiator08</dd>
                                <dt>About me:</dt>
                                <dd>Hello! I am test account for Web-knight game</dd>
                            </dl>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Controls" className="card">
                            <Button className="control-button" type="dashed">Change email</Button>
                            <Button className="control-button" type="dashed">Change password</Button>
                            <Button className="control-button" type="dashed">Change nickname</Button>
                            <Button className="control-button" type="danger">Reset progress</Button>
                            <Button className="control-button" type="danger">Delete account</Button>
                        </Card>
                    </Col>
                </Row>
            </Row>
        );
    }
}
