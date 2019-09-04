import React, { useContext } from "react";
import { BabyRecordsContext } from "../../contexts/BabyRecordsContext";
import { differenceInMinutes } from "date-fns";

// Components
import BabyEventButton from "./BabyEventButton";
import BabyEventLegend from "./BabyEventLegend";

const BabyEventWidget = props => {
  const { lastRecords, newEventAdded } = useContext(BabyRecordsContext);

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

  const lastBabyActivity = lastRecords
    ? lastRecords[props.type].time.toDate()
    : null;

  return (
    <div>
      <BabyEventButton
        newEvent={newBabyRec => newEventAdded(newBabyRec)}
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
