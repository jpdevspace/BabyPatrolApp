import React, { Component } from 'react'

import API, { getLastFiveDays } from '../utils/API';

class Reports extends Component {
    state = {

    }

    componentDidMount = () => {
        API.getLastFiveDays()
            .then(res => console.log("Data >>>", res))
    }

    render = () => {
        return (
            <div>
                <h1>Reports</h1>
            </div>
        )
    }
}


export default Reports