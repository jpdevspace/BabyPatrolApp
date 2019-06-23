import React from 'react';

import API from '../../utils/API';

const BabyEventButton = props => {
    const { type, icon } = props;

    const handleClick = (e) => {
        e.preventDefault();
        API.createNewEvent({ type })
        .then(res => console.log("Res >>>", res))
    };

    return (
        <div>
            <button onClick={e => handleClick(e)}>
                <h2>
                    <span role="img" aria-label={type}>{icon}</span>
                </h2>
            </button>
        </div>
    )
}

export default BabyEventButton;
