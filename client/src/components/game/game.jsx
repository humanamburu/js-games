import './_game.scss';

import React from 'react';
import {
    Timeline,
    Rate,
    Progress,
    Row,
    Col,
    Tag,
    Button,
    Icon,
    Alert,
} from 'antd';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rateText: 'Please rate the quality of the task.'
        };
    }

    onRateChange() {
        this.setState(
            Object.assign({}, this.state, { rateText: 'Thank you!' })
        );
    }

    render() {
        return (
            <Row className="game">
                <Row>
                    <h1 className="name">Tutorial</h1>
                </Row>
                <Row>
                    <Col span={10}>
                        <Timeline>
                            <Timeline.Item color="green">
                                <h4>Task #1</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectet</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h4>Task #2</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectet</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h4>Task #3</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectet</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h4>Task #4</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectet</p>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                    <Col span={6} className="meta">
                        <div className="timer">
                            <span>Total time: </span>
                            <span>00:05:12</span>
                        </div>
                        <Progress type="circle" percent={25}/>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Tag color="pink">Basics</Tag>
                            <Tag color="red">Math</Tag>
                            <Tag color="orange">Objects</Tag>
                            <Tag color="green">Console</Tag>
                            <Tag color="cyan">API</Tag>
                            <Tag color="blue">Tutorial</Tag>
                        </div>
                        <div className="rate">
                            <div ref={el => this.rateText}>{this.state.rateText}</div>
                            <Rate onChange={this.onRateChange.bind(this)}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Alert message="Tip: lorem ipsum hello wirld coffec and sigars with sugar press f12" type="warning" />
                    <Button.Group className="navigation">
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </Button.Group>
                </Row>
            </Row>
        );
    }
}
