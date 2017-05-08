import './_welcome.scss';

import React from "react";
import { connect } from 'react-redux';
import { Carousel, Button, Row } from 'antd';

//todo: use col and rows
class Welcome extends React.Component {
    render() {
        const { username } = this.props;

        return (
            <Row className="welcome">
                <h1>Hello, {username}!</h1>
                <div className="controls">
                    <Button type="primary">Login</Button>
                    <span> or </span>
                    <Button type="primary">Registration</Button>
                </div>
                <div className="text-content">
                    <p>Learn To Program JavaScript is suitable for beginner programmers. Step-by-step it explains how to write JavaScript code to run in a web browser on Windows, Linux or Mac OS X.</p>
                    <p>This course explains all you need to know in order to write JavaScript and make sense of other people’s JavaScript code. Every step of the way you can follow along with ready-to-run code in in short, easy-to-understand JavaScript programs.</p>
                </div>
                <div className="carousel">
                    <Carousel autoplay>
                        <div>
                            <img src="https://camo.githubusercontent.com/1a7883d5943fa246a1383723ef51e4e821eca32f/687474703a2f2f662e636c2e6c792f6974656d732f34343345324a31443257337831453175336a31752f4a532d6169726272616b656d616e2e6a7067" alt="javascript"/>
                        </div>
                        <div>
                            <img src="http://wikiwebpedia.com/wp-content/uploads/javascript.gif" alt="javascript"/>
                        </div>
                        <div>
                            <img src="https://javascriptforwp.com/wp-content/uploads/2016/03/badges.png" alt="javascript"/>
                        </div>
                    </Carousel>
                </div>
                <dl className="points">
                    <dt>Code</dt>
                    <dd>You will begin by learning the core features of programming – variables, functions and data types. You will move on to learn about specific capabilities of JavaScript – how to use it to automate web pages, hide email addresses, swap stylesheets interactively capabilities of HTML5.</dd>
                    <dt>JavaScript</dt>
                    <dd>JavaScript is the language of the web. If you need to program web sites to run on desktop computers or mobile devices, you have to know JavaScript.</dd>
                    <dt>DevTools</dt>
                    <dd>The Chrome DevTools are a set of web authoring and debugging tools built into Google Chrome. Use the DevTools to iterate, debug, and profile your site.</dd>
                </dl>
            </Row>
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
