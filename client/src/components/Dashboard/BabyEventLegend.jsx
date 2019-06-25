import React, { Component } from 'react';


class BabyEventLegend extends Component {
    render = () => {
        const { agoString, type } = this.props;

        return (
            <p>Last { type } was { agoString }</p>
        )
    }
}

export default BabyEventLegend;
