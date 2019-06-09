import React from 'react'

// Components
import BabyEventButton from './BabyEventButton';

const BabyEventWidget = props => {
    return (
        <div>
            <BabyEventButton icon={props.icon} type={props.type}/>
            <p>Last time was ...</p>
        </div>
    )
}


export default BabyEventWidget
