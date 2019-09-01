import React from 'react';

import BabyEventWidget from './BabyEventWidget';
import BabyEventWidgetcontainer from './BabyEventWidgetContainer';

import allActivities from '../../config/activities';

const Dashboard = (props) => {
    return (
        <BabyEventWidgetcontainer>
            {allActivities.map((act, i) => <BabyEventWidget key={i} icon={act.icon} type={act.label} />)}
        </BabyEventWidgetcontainer>
    );

}

export default Dashboard;