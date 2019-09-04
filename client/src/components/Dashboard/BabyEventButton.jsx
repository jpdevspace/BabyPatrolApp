import React from "react";
import { addBabyRecords } from "../../controllers/firebaseDB";

const BabyEventButton = props => {
  const { type, icon, newEvent } = props;

  const handleClick = e => {
    e.preventDefault();
    const newBabyRec = {
      comment: "no comments",
      time: new Date(),
      type
    };

    addBabyRecords(newBabyRec); // Updates Firebase
    newEvent(newBabyRec); // Updates context
  };

  return (
    <div>
      <button onClick={e => handleClick(e)}>
        <h2>
          <span role="img" aria-label={type}>
            {icon}
          </span>
        </h2>
      </button>
    </div>
  );
};

export default BabyEventButton;
