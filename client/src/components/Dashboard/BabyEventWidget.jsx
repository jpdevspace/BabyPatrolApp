import React from 'react'

// Components
import BabyEventButton from './BabyEventButton';
import BabyEventLegend from './BabyEventLegend';

const BabyEventWidget = props => {
    return (
        <div>
            <BabyEventButton icon={props.icon} type={props.type}/>
            <BabyEventLegend type={props.type} />
        </div>
    )
}


export default BabyEventWidget
