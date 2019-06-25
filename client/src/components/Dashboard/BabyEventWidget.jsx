import React, { Component } from 'react'
import { differenceInMinutes, format } from 'date-fns';

import API from '../../utils/API';

// Components
import BabyEventButton from './BabyEventButton';
import BabyEventLegend from './BabyEventLegend';

class BabyEventWidget extends Component {
    state = {
        lastEventDate: '',
        agoString: 'No records for this activity yet'
    }

    componentDidMount = () => {
        API.getLastEvent({ type: this.props.type })
            .then(res => {
                const { dbRes } = res.data;
                const lastEventDate = format(new Date(dbRes.date), 'MMM D YYYY h:mm A');
                const agoString = this.buildAgoString(lastEventDate);
                
                this.setState({ 
                    lastEventDate,
                    agoString
                });

            })
            .catch(err => console.error('Err getting last event >>>', err));
    }

    buildAgoString = (targetDate) => {
        const diffInMinutes = differenceInMinutes(new Date(), targetDate);
        const hoursAgo = parseInt(diffInMinutes / 60);
        const minsAgo = diffInMinutes % 60;
        let result;

        if (hoursAgo > 0) {
            result = `${hoursAgo} hours and ${minsAgo} minutes ago`;
        } else {
            result = `${minsAgo} minutes ago`;
        }

        return result;
    }

    handleNewEvent = (type) => this.setState({ 
        agoString: 'just now.', 
        lastEventDate: format(new Date(), 'MMM D YYYY h:mm A')
    });

    render = () => {
        return (
            <div>
                <BabyEventButton newEvent={this.handleNewEvent} icon={this.props.icon} type={this.props.type}/>
                <BabyEventLegend type={this.props.type} agoString={this.state.agoString} />
            </div>
        )
    }
}


export default BabyEventWidget
