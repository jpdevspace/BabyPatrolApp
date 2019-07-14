import React, { Component } from 'react'

import API  from '../utils/API';

// Components
import ReportTable from '../components/Reports/ReportTable'

class Reports extends Component {
    state = {
        lastFiveDays: []
    }

    componentDidMount = () => {
        API.getLastFiveDays()
            .then(res => this.setState({ lastFiveDays: res.data.dbRes }))
            .catch(err => console.error("Errrrroor >>>", err));
    }

    render = () => {
        return (
            <div>
                <h1>Reports</h1>
                <ReportTable data={this.state.lastFiveDays} />
            </div>
        )
    }
}


export default Reports