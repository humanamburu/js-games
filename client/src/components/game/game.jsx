import './_game.scss';

import React from 'react';
import { connect } from 'react-redux';
import { mountCommands, unmountCommands } from 'services/game';
import { getLevel } from 'thunks/game';

import { Timeline, Rate, Progress, Row, Col, Tag, Button, Icon, Alert, Spin, } from 'antd';

class Game extends React.Component {
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

    *colors() {
        const colors = ['pink', 'orange', 'cyan', 'blue', 'green', 'red'];
        let i = 0;

        while (true) {
            yield colors[i];

            i++;
            if (i === colors.length) {
                i = 0;
            }
        }
    }

    generateTags(tags) {
        let colour = this.colors();

        return tags.map((name, i) => {
            return <Tag key={i} color={colour.next().value}>{name}</Tag>
        });
    }

    componentDidMount() {
        mountCommands();
    }

    componentWillUnmount() {
        unmountCommands();
    }

    componentWillMount() {
        this.props.fetch();
    }

    render() {
        const { level } = this.props;

        if (!level.get('tasks')) {
            return <Spin />;
        }

        return (
            <Row className="game">
                <Row>
                    <h1 className="name">{level.get('name')}</h1>
                </Row>
                <Row>
                    <Col span={10}>
                        <Timeline className="timeline">
                            {
                                level.get('tasks').map((task, i) => {
                                    return (
                                        <Timeline.Item key={i} color={task.get('status') ? 'green' : 'blue'}>
                                            <h4>{task.get('name')}</h4>
                                            <p>{task.get('description')}</p>
                                        </Timeline.Item>
                                    )
                                })
                            }
                        </Timeline>
                    </Col>
                    <Col span={6} className="meta">
                        <Progress type="circle" percent={level.get('progress')}/>
                    </Col>
                    <Col span={8}>
                        <div>
                            {this.generateTags(level.get('tags'))}
                        </div>
                        <div className="rate">
                            <div ref={el => this.rateText}>{this.state.rateText}</div>
                            <Rate onChange={this.onRateChange.bind(this)}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div>
                        {level.get('tips').map((tip, i) => <div key={i}><Alert message={tip}/></div>)}
                    </div>
                    <Button.Group className="navigation">
                        <Button type="primary">
                            <Icon type="left"/>
                            <span>Prev</span>
                        </Button>
                        <Button type="primary">
                            <span>Next</span>
                            <Icon type="right"/>
                        </Button>
                    </Button.Group>
                </Row>
            </Row>
        );
    }
}
const mapActionsToProps = {
    fetch: getLevel,
};

const mapStateToProps = (state) => ({
    level: state.get('game').get('level'),
});

export default connect(mapStateToProps, mapActionsToProps)(Game);
