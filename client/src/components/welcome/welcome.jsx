import './_welcome.scss';

import React from "react";
import { connect } from 'react-redux';
import { Carousel } from 'antd';

class Welcome extends React.Component {
    render() {
        const { username } = this.props;

        return (
            <div>
                <h1>Hello, {username}!</h1>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur dignissimos explicabo facere fuga iste laboriosam necessitatibus nisi optio quasi quisquam repellendus, reprehenderit rerum sint tempore voluptatem, voluptatibus. Ad, consequatur?</p>
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
                    <dt>JavaScript</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur culpa deleniti ea modi tempore voluptate voluptatum! Cupiditate dolorem, doloremque ipsa ipsam iste perspiciatis praesentium reiciendis, rerum tempora, tempore veniam.</dd>
                    <dt>Milk</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur dolores eligendi harum hic, ipsum nobis non, numquam quaerat quidem ratione voluptas! Autem consectetur doloremque dolorum perspiciatis recusandae voluptatum?</dd>
                    <dt>Coffe</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur dolores eligendi harum hic, ipsum nobis non, numquam quaerat quidem ratione voluptas! Autem consectetur doloremque dolorum perspiciatis recusandae voluptatum?</dd>
                </dl>
            </div>
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
