import React, { useContext, useEffect, useState } from "react";
import { BabyRecordsContext } from "../../contexts/BabyRecordsContext";
import { differenceInMinutes, format } from "date-fns";

import API from "../../utils/API";

// Components
import BabyEventButton from "./BabyEventButton";
import BabyEventLegend from "./BabyEventLegend";

const BabyEventWidget = props => {
  // state = {
  //   lastEventDate: "",
  //   agoString: "No records for this activity yet"
  // };

  const { lastRecords } = useContext(BabyRecordsContext);
  const [lastEventDate, setLastEventDate] = useState("");
  const [agoString, setAgoString] = useState(
    "No records for this activity yet"
  );

  const buildAgoString = targetDate => {
    if (targetDate) {
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
    return "No time available for this event";
  };

  const handleNewEvent = type =>
    this.setState({
      agoString: "just now.",
      lastEventDate: format(new Date(), "MMM D YYYY h:mm A")
    });

  const lastBabyActivity = lastRecords
    ? lastRecords[props.type].time.toDate()
    : null;

  return (
    <div>
      <BabyEventButton
        newEvent={handleNewEvent}
        icon={props.icon}
        type={props.type}
      />
      <BabyEventLegend
        type={props.type}
        agoString={
          lastBabyActivity
            ? buildAgoString(lastBabyActivity)
            : "No info available"
        }
      />
    </div>
  );
};

export default BabyEventWidget;
