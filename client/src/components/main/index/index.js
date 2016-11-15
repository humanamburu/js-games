import './_index.styl';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import { Link } from 'react-router';

class Index extends Component {
    render() {
        return(
            <div className="index-wrapper">
                <Link to="/tutorial" >Tutorial</Link>
            </div>
        );
    }
}
//
// const selector = createStructuredSelector({
//     language,
//     enemies,
// });

export default connect()(Index);
