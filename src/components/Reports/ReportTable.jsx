import React from "react";

import { format, isSameDay } from "date-fns";
import activities from "../../config/activities";

const ReportTable = ({ data }) => {
  const getEmoji = activityString =>
    activities.filter(act => act.label === activityString)[0].icon;

  let content = <h2>Loading...</h2>;
  let rows = null;

  if (!data || data.length === 0) {
    content = (
      <h2>
        No data available. Try adding a few events in the{" "}
        <a href="/dashboard">dashboard</a>
      </h2>
    );
  }

  if (data && data.length) {
    let prevRowData = "";

    rows = data.map((row, i) => {
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
          <>
            <tr key={i}>
              <td colSpan="4" className="bp-table-dateCell">
                {format(row.time.toDate(), "dddd, MMM D / YYYY")}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>{format(row.time.toDate(), "h:mm a")}</td>
              <td>{row.type}</td>
              <td>{getEmoji(row.type)}</td>
            </tr>
          </>
        );
      }
    });
  }

  if (!rows) {
    return <>{content}</>;
  }

  return (
    <div id="bp-report-tableContainer">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Activity</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ReportTable;
