import './_materials.scss';

import React from 'react';

import { Card, Row, Col } from 'antd';

export default class Materials extends React.Component {
    render() {
        return (
            <Row className="materials">
                <Row>
                    <h1>JavaScript Materials</h1>
                </Row>
                <Row>
                    <Col className="card-wrapper" span={6}>
                        <Card className="card" title="Basics" extra={<a href="#">More</a>}>
                            <div className="material"><a href="#">What is JavaScript</a></div>
                            <div className="material"><a href="#">Editor and browser</a></div>
                            <div className="material"><a href="#">Debugger</a></div>
                            <div className="material"><a href="#">Variables</a></div>
                            <div className="material"><a href="#">Comments</a></div>
                            <div className="material"><a href="#">Console</a></div>
                            <div className="material"><a href="#">Data Structures</a></div>
                            <div className="material"><a href="#">Strings</a></div>
                            <div className="material"><a href="#">Comparison Operators</a></div>
                            <div className="material"><a href="#">Math</a></div>
                            <div className="material"><a href="#">Arrays and loops</a></div>
                        </Card>
                    </Col>
                    <Col className="card-wrapper" span={6}>
                        <Card className="card" title="Scope, Closures, DOM" extra={<a href="#">More</a>}>
                            <div className="material"><a href="#">User interactions</a></div>
                            <div className="material"><a href="#">Functions</a></div>
                            <div className="material"><a href="#">Parameters and arguments</a></div>
                            <div className="material"><a href="#">Scope</a></div>
                            <div className="material"><a href="#">Hide an email address using a 'for' loop </a></div>
                            <div className="material"><a href="#">Closures</a></div>
                            <div className="material"><a href="#">Document Object Model</a></div>
                            <div className="material"><a href="#">DOM API</a></div>
                            <div className="material"><a href="#">Data Structures</a></div>
                            <div className="material"><a href="#">Swithcing stylesheets</a></div>
                        </Card>
                    </Col>
                    <Col className="card-wrapper" span={6}>
                        <Card className="card" title="OOP and FP" extra={<a href="#">More</a>}>
                            <div className="material"><a href="#">OOP basics</a></div>
                            <div className="material"><a href="#">Function as class</a></div>
                            <div className="material"><a href="#">Instances</a></div>
                            <div className="material"><a href="#">Operator new</a></div>
                            <div className="material"><a href="#">Private and public methods</a></div>
                            <div className="material"><a href="#">Functional programing</a></div>
                            <div className="material"><a href="#">Lodash</a></div>
                        </Card>
                    </Col>
                    <Col className="card-wrapper" span={6}>
                        <Card className="card" title="ES6 and ES7 features" extra={<a href="#">More</a>}>
                            <div className="material"><a href="#">What is ES</a></div>
                            <div className="material"><a href="#">Const and let</a></div>
                            <div className="material"><a href="#">Destructuring</a></div>
                            <div className="material"><a href="#">Spread</a></div>
                            <div className="material"><a href="#">Class</a></div>
                            <div className="material"><a href="#">Modules system</a></div>
                            <div className="material"><a href="#">Bundling and tools</a></div>
                            <div className="material"><a href="#">Babel</a></div>
                        </Card>
                    </Col>
                </Row>
            </Row>
        );
    }
}
