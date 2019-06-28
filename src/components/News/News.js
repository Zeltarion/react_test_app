import React, {Component} from 'react';
import { connect } from 'react-redux'

class News extends Component {
    constructor() {
        super();
    }

    render() {
        // const {  } = this.props;
        return (
            <div>News</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => ({

});

// Connect flow
export default connect(mapStateToProps, mapDispatchToProps)(News);
