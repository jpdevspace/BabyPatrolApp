import React, { Component } from 'react';
import { distanceInWordsStrict } from 'date-fns';

import API from '../../utils/API';

class BabyEventLegend extends Component{
    state = {
        type: '',
        lastEventDate: '',
        agoString: 'No records for this activity yet'
    }

    componentDidMount = () => {
        API.getLastEvent({ type: this.props.type })
            .then(res => {
                const { lastEvent } = res.data;
                const agoString = distanceInWordsStrict(
                    new Date(),
                    new Date(lastEvent.date),
                    { addSuffix: true }
                );
                
                this.setState({ 
                    type: lastEvent.type, 
                    lastEventDate: lastEvent.date,
                    agoString
                }, () => console.log('Last event loaded!'));

            })
            .catch(err => console.error('Err getting last event >>>', err));
    }

    render = () => {
        const { agoString, type } = this.state;

        return (
            <p>Last { type } was { agoString }</p>
        )
    }
}

export default BabyEventLegend;
