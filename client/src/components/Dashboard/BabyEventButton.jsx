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
      type,
      uid: localStorage.getItem("babyPatrolUID")
    };

    // Updates Firebase
    try {
      addBabyRecords(newBabyRec);
      console.log("New record created.");
    } catch (err) {
      console.error("Error trying to addBabyRecords >>>", err.message);
    }
    // Updates context
    newEvent(newBabyRec);
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
