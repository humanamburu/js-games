import './_welcome.styl';

import React from "react";
import { connect } from 'react-redux';

import MainWrapper from 'components/main-wrapper/main';

class Welcome extends React.Component {
    render() {
        const { username } = this.props;
        return (
            <MainWrapper>
                <div>Hello world</div>
            </MainWrapper>
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
