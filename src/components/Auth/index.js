import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AutComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                <Link to='/login'>login</Link>
                <Link to='registration'>registration</Link>
                {children}
            </div>
        )
    }
}

export default AutComponent;