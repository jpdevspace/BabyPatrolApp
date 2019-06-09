import React from 'react';

import BabyEventWidget from '../components/Dashboard/BabyEventWidget';
import BabyEventWidgetcontainer from '../components/Dashboard/BabyEventWidgetContainer';

import allActivities from '../config/activities';

const Dashboard = (props) => {
    return (
        <BabyEventWidgetcontainer>
            {allActivities.map((act, i) => <BabyEventWidget key={i} icon={act.icon} type={act.label} />)}
        </BabyEventWidgetcontainer>
    );

}

export default Dashboard;