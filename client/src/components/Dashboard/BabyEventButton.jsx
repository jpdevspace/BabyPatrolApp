import React from "react";
import { addBabyRecords } from "../../controllers/firebaseDB";
import firebase from "../../config/firebaseConfig";

const BabyEventButton = props => {
  const { type, icon, newEvent } = props;

  const handleClick = e => {
    e.preventDefault();
    const newBabyRec = {
      comment: "fire",
      time: new firebase.firestore.Timestamp.fromDate(new Date()),
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
