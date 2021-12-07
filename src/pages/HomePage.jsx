import React, { Component, Fragment } from 'react'
import Charts from '../components/Charts/Charts';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                {/* load chart component */}
                <Charts />
            </Fragment>
        )
    }
}

export default HomePage
