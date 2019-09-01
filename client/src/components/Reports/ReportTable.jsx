import React from "react";

import { format, isSameDay } from "date-fns";
import activities from "../../config/activities";

const ReportTable = props => {
  const getEmoji = activityString =>
    activities.filter(act => act.label === activityString)[0].icon;
  console.log("props.data", props.data)
  let rows = (
    <tr>
      <td>Loading...</td>
    </tr>
  );
	
	if (!props.data || props.data.length === 0) {
		rows = (
			<tr>
				<td>No data available</td>
			</tr>
		)
	}

	if (props.data && props.data.length) {
    let prevRowData = "";

    rows = props.data.map((row, i) => {
      console.log("time >>>", row.time.toDate())
      console.log("isSame >>>", isSameDay(row.time.toDate(), prevRowData))
      if (isSameDay(row.time.toDate(), prevRowData)) {
        return (
          <tr key={i}>
            <td></td>
            <td>{format(row.time.toDate(), "h:mm a")}</td>
            <td>{row.type}</td>
            <td>{getEmoji(row.type)}</td>
          </tr>
        );
      } else {
        prevRowData = row.time.toDate();
        return (
          <tr key={i}>
            <td>{format(row.time.toDate(), "dddd, MMM D / YYYY")}</td>
            <td>{format(row.time.toDate(), "h:mm a")}</td>
            <td>{row.type}</td>
            <td>{getEmoji(row.type)}</td>
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
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ReportTable;
