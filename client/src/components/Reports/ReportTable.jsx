import React from 'react';

import { format, isSameDay } from 'date-fns';
import activities from '../../config/activities';

const ReportTable = (props) => {
    const getEmoji = (activityString) => activities.filter(act => act.label === activityString)[0].icon;
    
    let rows = <tr><td>Loading...</td></tr>;

    if (props.data && props.data.length) {
        let prevRowData = '';

        rows = props.data.map((row, i) => { 
            if (isSameDay(row.date, prevRowData)) {
                return (
                    <tr key={ i }>
                        <td></td>
                        <td>{ format(row.date, 'h:mm a') }</td>
                        <td>{ row.type }</td>
                        <td>{ getEmoji(row.type) }</td>
                    </tr>
                );
            } else {
                prevRowData = row.date;
                return (
                    <tr key={ i }>
                        <td>{ format(row.date, 'dddd, MMM D / YYYY') }</td>
                        <td>{ format(row.date, 'h:mm a') }</td>
                        <td>{ row.type }</td>
                        <td>{ getEmoji(row.type) }</td>
                    </tr>
                );
            }
        });
    }
    

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Activity</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}

export default ReportTable;