import './_welcome.styl';

import { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {
    render() {
        const { username } = this.props;

        return (
          <div>{`Привет, ${username || 'Гость'}`}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.get('user').get('name')
    }
};

const mapActionsToProps = {

};

export default connect(mapStateToProps, mapActionsToProps)(Welcome);
